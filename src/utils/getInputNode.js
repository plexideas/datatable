import React from 'react';
import { InputNumber, Input, DatePicker } from 'antd';
import TerminationDateInput from '../components/TerminationDateInput/TerminationDateInput';
import SourceInput from '../components/SourceInput/SourceInput';
import ClientNameInput from '../components/ClientNameInput/ClientNameInput';
import { TYPE, COLUMN } from '../constants';
import { integerFormatter } from './formatter';

const getInputNode = (inputType, dataIndex) => {
  switch(dataIndex) {
    case COLUMN.VALUE_3:
      return <InputNumber formatter={integerFormatter} />
    case COLUMN.TERMINATION_DT:
      return <TerminationDateInput />
    case COLUMN.SOURCE_NM: 
      return <SourceInput />
    case COLUMN.CLIENT_NM:
      return <ClientNameInput />
    default:
      return getStandartInputNode(inputType);
  }
}

const getStandartInputNode = (inputType) => {
  switch(inputType) {
    case TYPE.TIMESTAMP:
    case TYPE.DATE:
      return <DatePicker />
    case TYPE.NUMERIC: 
      return <InputNumber />
    default: return <Input />
  }
}



export default getInputNode;
