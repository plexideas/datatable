import React, { useState, useEffect } from 'react';
import { Table, Spin, Form } from 'antd';
import { connect } from 'react-redux';
import { actionFetchData } from '../../actions/dataActions';
import { actionFetchColumnsInfo } from '../../actions/columnsInfoActions';
import { actionCommonSetEditingKey } from '../../actions/commonActions';
import OperationCell from './OperationCell/OperationCell';
import EditableCell from './EditableCell/EditableCell';
import Filter from '../Filter/Filter';

import './DataTable.css';

const DataTable = (props) => {

  const { 
    columns,
    data, 
    error, 
    loadingData, 
    loadingColumns, 
    fetchData, 
    fetchColumnInfo,
    setEditingKey,
    editingKey,
    filter
  } = props;

  const [form] = Form.useForm();
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys)
    },
  };

  useEffect(() => {
    fetchColumnInfo();
    fetchData();
  }, [fetchData, fetchColumnInfo]);

  const operationsColumn = {
    title: 'Edit',
    dataIndex: 'operation',
    render: (_, record) => <OperationCell record={record} form={form} />
  }

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
          record,
          inputType: col.inputType,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: record.RN === editingKey,
        }
      ),
    };
  });

  const filteredData = data.filter((value) => {
    const filterDerscription = value.DESCRIPTION
      .toLocaleLowerCase()
      .includes(filter.description.toLocaleLowerCase());
    const filterSource = (!filter.source || value.SOURCE_NM === filter.source);
    const filterClientName = (!filter.clientName || value.CLIENT_NM === filter.clientName);
    const filterTerminationDate = (!filter.terminationDate || value.TERMINATION_DT === filter.terminationDate)
    const filterMaxRange = (!filter.maxRange || value.VALUE_3 === filter.maxRange);
    
    return filterDerscription 
      && filterSource 
      && filterClientName 
      && filterTerminationDate 
      && filterMaxRange;
  })

  return (
    <Form form={form} component={false}>
      {
        loadingColumns 
        ? <Spin />
        : <Table
            className="table-striped-rows"
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            columns={[...mergedColumns, operationsColumn]}
            dataSource={filteredData}
            loading={loadingData}
            onChange={() => setEditingKey('')}
            rowSelection={rowSelection}
            rowKey="RN"
            footer={() => <Filter />}
            title={() => 'Datatable'}
            scroll={{x: 'max-content'}}
          />
      }
      { error && <div>{error}</div> }
    </Form>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data.data,
    loadingData: state.data.loading,
    error: state.data.error,
    columns: state.columnsInfo.columns,
    loadingColumns: state.columnsInfo.loading,
    editingKey: state.common.editingKey,
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(actionFetchData());
    },
    fetchColumnInfo: () => {
      dispatch(actionFetchColumnsInfo());
    },
    setEditingKey: (editingKey) => {
      dispatch(actionCommonSetEditingKey(editingKey));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)

