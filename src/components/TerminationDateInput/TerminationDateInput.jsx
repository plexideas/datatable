import React, { useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const TerminationDateInput = (props) => {
  const initDate = props.value 
    ? moment(new Date(props.value)) 
    : ''
  const [date, setDate] = useState(initDate);
  const handleOnChange = (value) => {
    if (props.onChange) {
      props.onChange(value ? value.format('YYYY-MM') : '');
    }
    setDate(value)
  }

  return (
    <DatePicker.MonthPicker 
      value={date}
      onChange={handleOnChange}
    />
  )
}

export default TerminationDateInput
