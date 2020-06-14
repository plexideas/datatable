import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { COLUMNS, TEST_DATA_URL } from './config';

import './DataTable.css';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys)
    },
  };

  useEffect(() => {
    axios.get(TEST_DATA_URL)
      .then((result) => {
        const { items } = result.data;
        if (items) setData(items);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed fetching data! Please, try refresh page a little later');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Table
        className="table-striped-rows"
        columns={COLUMNS}
        dataSource={data}
        loading={loading}
        rowSelection={rowSelection}
        rowKey="RN"
      />
      { error && <div>{error}</div> }
    </div>
  )
}

export default DataTable

