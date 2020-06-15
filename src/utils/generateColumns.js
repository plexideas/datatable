import { TYPE, COLUMN, COLOR, EDITABLE_FIELD_LIST } from "../constants";

const setValueOneRender = (value) => {
  const obj = {
    children: value,
    props: {}
  }

  if (parseInt(value) > 2000 && parseInt(value) <= 3000) {
    obj.props = { style: { background: COLOR.YELLOW } }
  } else if (parseInt(value) > 3000) {
    obj.props = { style: { background: COLOR.RED }}
  }

  return obj;
};

const sortByTimestamp = (a, b) => new Date(a.replace(/\s+/g, '')) - new Date(b.replace(/\s+/g, ''));

const setSortingByType = (key, type) => {
  switch(type) {
    case TYPE.STRING:
      return (a, b) => a[key].localeCompare(b[key]);
    case TYPE.NUMERIC:
      return (a, b) => a[key] - b[key];
    case TYPE.DATE:
      return (a, b) => new Date(a[key]) - new Date(b[key]);
    case TYPE.TIMESTAMP:
      return (a, b) => {
        return sortByTimestamp(a[key], b[key])
      };
    default: 
      return;
  }
}

const generateColumns = (configs) => {
  const configsArr = Object.entries(configs);
  const columns = configsArr.map((conf) => {
    const key = conf[0];
    const { label, type } = conf[1];
    return {
      title: label,
      dataIndex: key,
      key: key,
      inputType: type,
      editable: EDITABLE_FIELD_LIST.includes(key),
      sorter: setSortingByType(key, type),
      render: (value) => key === COLUMN.VALUE_1 ? setValueOneRender(value) : value
    }
  })

  return columns;
}

export default generateColumns
