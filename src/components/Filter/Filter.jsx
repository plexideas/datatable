import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Input, InputNumber, Space } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

import SourceInput from '../SourceInput/SourceInput';
import ClientNameInput from '../ClientNameInput/ClientNameInput';
import TerminationDateInput from '../TerminationDateInput/TerminationDateInput';
import { actionFilterSetCriteria } from '../../actions/filterReducer';

const Filter = (props) => {
  const { filterSetCriteria, filter } = props;

  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState(filter.description);
  const [source, setSource] = useState(filter.source);
  const [clientName, setClientName] = useState(filter.clientName);
  const [terminationDate, setTerminationDate] = useState(filter.terminationDate);
  const [maxRange, setMaxRange] = useState(filter.maxRange);

  const showModal = () => {
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
    console.log(e);
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" icon={<FilterOutlined />} onClick={showModal}>Filter</Button>
      <Modal
        title="Filter"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={780}
      >
        <Space className="filter">
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)} 
          />
          <SourceInput
            value={source}
            onChange={setSource}
            allowClear
          />
          <ClientNameInput
            value={clientName}
            onChange={setClientName}
            allowClear
          />
          <TerminationDateInput value={terminationDate} onChange={setTerminationDate} />
          <InputNumber
            value={maxRange}
            onChange={setMaxRange}
            formatter={(val) => isNaN(parseInt(val)) ? '' : parseInt(val)} 
          />
        </Space>
      </Modal>
    </>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

