import React, { useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const TerminationDateInput = (props) => {
  const initDate = props.value 
    ? moment(new Date(props.value)) 
    : moment(new Date())
  const [date, setDate] = useState(initDate);
  const handleOnChange = (value) => {
    value && props.onChange && props.onChange(value.format('YYYY-MM'));
    setDate(value)
  }

  return (
    <DatePicker.MonthPicker 
      value={date}
      onChange={handleOnChange} 
      defaultValue={moment(new Date())}
    />
  )
}

export default TerminationDateInput
