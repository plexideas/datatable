import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TEST_DATA_URL = 'https://run.mocky.io/v3/6f15e3ad-bf04-4940-9b81-0f14fac8ebf2';

const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(TEST_DATA_URL)
      .then((result) => {
        const { items } = result.data;
        if (items) setData(items);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed fetching data! Please, try refresh page a little later');
      })
  }, [])

  return (
    <div>
      <h1>Datatable</h1>
      {
        loading 
        ? <div>Loading...</div>
        : <div>{JSON.stringify(data)}</div>
      }
      {
        error && <div>{error}</div>
      }
    </div>
  )
}

export default App

