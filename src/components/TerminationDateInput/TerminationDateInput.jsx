import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';

const TerminationDateInput = (props) => {
  const handleOnChange = (value) => {
    if (props.onChange) {
      props.onChange(value ? value.format('YYYY-MM') : '');
    }
  }

  return (
    <DatePicker.MonthPicker 
      value={props.value ? moment(new Date(props.value)) : ''}
      onChange={handleOnChange}
    />
  )
}

export default TerminationDateInput
