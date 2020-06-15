import React from 'react';
import { Select } from 'antd';

const SourceInput = (props) => {
  const options = [
    "DEV", "UAT", "PROD"
  ];

  return (
    <Select { ...props }>
      {
        options.map(opt => (
          <Select.Option key={opt} value={opt}>{opt}</Select.Option>
        ))
      }
    </Select>
  )
}

export default SourceInput

