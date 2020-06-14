import React, { useState } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const TerminationDateInput = (props) => {
  const [date, setDate] = useState(moment(new Date(props.value)));
  const handleOnChange = (value) => {
    value && props.onChange(value.format('YYYY-MM'));
    setDate(value)
  }

  return (
    <DatePicker.MonthPicker value={date} onChange={handleOnChange}  />
  )
}

export default TerminationDateInput
