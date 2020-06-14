import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

import './DataTable.css';

const TEST_DATA_URL = 'https://run.mocky.io/v3/6f15e3ad-bf04-4940-9b81-0f14fac8ebf2';


const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const columns = [
    {
      title: "#",
      dataIndex: "RN",
      key:"RN",
    },
    {
      title: "Item Description",
      dataIndex: "DESCRIPTION",
      key:"DESCRIPTION",
    },
    {
      title: "Source",
      dataIndex: "SOURCE_NM",
      key:"SOURCE_NM",
    },
    {
      title: "Client ID",
      dataIndex: "CLIENT_ID",
      key:"CLIENT_ID",
    },
    {
      title: "Client Name",
      dataIndex: "CLIENT_NM",
      key:"CLIENT_NM",
    },
    {
      title: "Activation Date",
      dataIndex: "ACTIVATION_DT",
      key:"ACTIVATION_DT",
    },
    {
      title: "Termination Date",
      dataIndex: "TERMINATION_DT",
      key:"TERMINATION_DT",
    },
    {
      title: "Interference Coordination Value",
      dataIndex: "VALUE_1",
      key:"VALUE_1",
    },
    {
      title: "Duplex Compensation Coefficient",
      dataIndex: "VALUE_2",
      key:"VALUE_2",
    },
    {
      title: "Max Range",
      dataIndex: "VALUE_3",
      key:"VALUE_3",
    },
    {
      title: "Updated By",
      dataIndex: "UPDATED_BY",
      key:"UPDATED_BY",
    },
    {
      title: "Update Time",
      dataIndex: "UPDATE_TIMESTAMP",
      key:"UPDATE_TIMESTAMP",
    },
  ];

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
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey="RN"
      />
      { error && <div>{error}</div> }
    </div>
  )
}

export default DataTable

