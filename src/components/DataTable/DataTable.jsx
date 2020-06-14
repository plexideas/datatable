import React, { useState, useEffect } from 'react';
import { Table, Spin } from 'antd';
import { connect } from 'react-redux';
import { actionFetchData } from '../../actions/dataActions';
// import { COLUMNS } from './config';

import './DataTable.css';
import { actionFetchColumnsInfo } from '../../actions/columnsInfoActions';

const DataTable = (props) => {

  const { columns, data, error, loadingData, loadingColumns, fetchData, fetchColumnInfo } = props;
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

  return (
    <div>
      {
        loadingColumns 
        ? <Spin />
        : <Table
            className="table-striped-rows"
            columns={columns}
            dataSource={data}
            loading={loadingData}
            rowSelection={rowSelection}
            rowKey="RN"
          />
      }
      { error && <div>{error}</div> }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data.data,
    loadingData: state.data.loading,
    error: state.data.error,
    columns: state.columnsInfo.columns,
    loadingColumns: state.columnsInfo.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(actionFetchData());
    },
    fetchColumnInfo: () => {
      dispatch(actionFetchColumnsInfo());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)

