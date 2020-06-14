import React from 'react'
import { connect } from 'react-redux';
import { Select } from 'antd';
import { COLUMN } from '../../constants';


const ClientNameInput = (props) => {
  const { data } = props;

  return (
    <Select
      {...props}
      style={{ width: 150 }}
      showSearch
      optionFilterProp="children"
      filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    >
      {
        data.map((el, index) => {
          const clientNm = el[COLUMN.CLIENT_NM];
          return <Select.Option key={clientNm + index} value={clientNm} >{clientNm}</Select.Option>
        })
      }
    </Select>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data.data,
  };
};

export default connect(mapStateToProps, {})(ClientNameInput);

