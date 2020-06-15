import React from 'react';
import { Form } from 'antd';
import getInputNode from '../../../utils/getInputNode';


const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = getInputNode(inputType, dataIndex);

  const rules = [
    {
      required: true,
      message: `Please Input ${title}!`,
    },
  ];

  const editableNode = (
    <Form.Item name={dataIndex} style={{ margin: 0 }} rules={rules} >
      {inputNode}
    </Form.Item>
  )

  return (
    <td {...restProps}>
      { editing ? editableNode : children }
    </td>
  );
};

export default EditableCell;
