const generateColumns = (configs) => {
  const configsArr = Object.entries(configs);
  const columns = configsArr.map((conf) => {
    return {
      title: conf[1].label,
      dataIndex: conf[0],
      key: conf[0],
      sorter: setSortingByType(conf[0], conf[1].type),
    }
  })

  return columns;
}

const setSortingByType = (key, type) => {
  switch(type) {
    case 'STRING':
      return (a, b) => a[key].localeCompare(b[key]);
    case 'NUMERIC':
      return (a, b) => a[key] - b[key];
    case 'DATE':
      return (a, b) => new Date(a[key]) - new Date(b[key]);
    case 'TIMESTAMP':
      return (a, b) => {
        return sortByTimestamp(a[key], b[key])
      };
    default: 
      return;
  }
}

const sortByTimestamp = (a, b) => new Date(a.replace(/\s+/g, '')) - new Date(b.replace(/\s+/g, ''));

export default generateColumns
