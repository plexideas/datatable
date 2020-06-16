import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Input, InputNumber, Space, Form } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

import SourceInput from '../SourceInput/SourceInput';
import ClientNameInput from '../ClientNameInput/ClientNameInput';
import TerminationDateInput from '../TerminationDateInput/TerminationDateInput';
import { actionFilterSetCriteria, actionFilterClear } from '../../actions/filterReducer';
import { actionCommonSetEditingKey } from '../../actions/commonActions';
import { integerFormatter } from '../../utils/formatter';

const Filter = (props) => {
  const { filterSetCriteria, filterClear, filter, setEditingKey } = props;

  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState(filter.description);
  const [source, setSource] = useState(filter.source);
  const [clientName, setClientName] = useState(filter.clientName);
  const [terminationDate, setTerminationDate] = useState(filter.terminationDate);
  const [maxRange, setMaxRange] = useState(filter.maxRange);

  const showModal = () => {
    setEditingKey('');
    setVisible(true);
  };

  const handleOk = e => {
    filterSetCriteria({
      description,
      source,
      clientName,
      terminationDate,
      maxRange,
    });
    setVisible(false);
  };

  const handleCancel = e => {
    setVisible(false);
  };

  const hadleClearFilter = () => {
    setDescription('');
    setClientName('');
    setTerminationDate('');
    setSource('');
    setMaxRange('');
    filterClear();
  }

  const isFiltered = () => {
    const filterAsArr = Object.entries(filter);
    return filterAsArr.filter(el => el[1]).length > 0
  }

  return (
    <Space>
      <Button type="primary" icon={<FilterOutlined />} onClick={showModal}>Filter</Button>
      <Modal
        title="Filter"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={780}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <Form 
          layout='vertical'
        >
          <Space>
            <Form.Item label="Item Description">
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
              />
            </Form.Item>
            <Form.Item label="Source">
              <SourceInput
                value={source}
                onChange={setSource}
                allowClear
              />
            </Form.Item>
            <Form.Item label="Client name">
              <ClientNameInput
                value={clientName}
                onChange={setClientName}
                allowClear
              />
            </Form.Item>
            <Form.Item label="Termination date">
              <TerminationDateInput value={terminationDate} onChange={setTerminationDate} />
            </Form.Item>
            <Form.Item label="Max range">
              <InputNumber
                value={maxRange}
                onChange={setMaxRange}
                formatter={integerFormatter} 
              />
            </Form.Item>    
          </Space>
        </Form>
      </Modal>
      { isFiltered() && <Button onClick={hadleClearFilter}>Clear filter</Button> }
    </Space>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterSetCriteria: (data) => {
      dispatch(actionFilterSetCriteria(data));
    },
    filterClear: () => {
      dispatch(actionFilterClear());
    },
    setEditingKey: (editingKey) => {
      dispatch(actionCommonSetEditingKey(editingKey));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

