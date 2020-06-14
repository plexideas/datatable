import React from 'react'
import { Button } from 'antd';
import { connect } from 'react-redux';
import { actionCommonSetEditingKey } from '../../../actions/commonActions';
import { actionSetData } from '../../../actions/dataActions';

const OperationCell = (props) => {
  const { record, editingKey, setEditingKey, data, setData, form } = props;
  const editable = record.RN === editingKey;

  const edit = (record) => {
    setEditingKey(record.RN);
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex(item => key === item.RN);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  return editable ? (
    <Button
      type="link"
      onClick={() => save(record.RN)}
    >
      Save
    </Button>
  ) : (
    <Button type="link" disabled={editingKey !== ''} onClick={() => edit(record)}>
      Edit
    </Button>
  );
}

const mapStateToProps = (state) => {
  return {
    editingKey: state.common.editingKey,
    data: state.data.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setEditingKey: (editingKey) => {
      dispatch(actionCommonSetEditingKey(editingKey));
    },
    setData: (data) => {
      dispatch(actionSetData(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OperationCell);

