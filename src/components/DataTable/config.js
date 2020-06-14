export const TEST_DATA_URL = 'https://run.mocky.io/v3/6f15e3ad-bf04-4940-9b81-0f14fac8ebf2';

export const COLUMNS = [
  {
    title: "#",
    dataIndex: "RN",
    key:"RN",
    sorter: (a, b) => a.RN - b.RN,
  },
  {
    title: "Item Description",
    dataIndex: "DESCRIPTION",
    key:"DESCRIPTION",
    sorter: (a, b) => a.DESCRIPTION.localeCompare(b.DESCRIPTION),
  },
  {
    title: "Source",
    dataIndex: "SOURCE_NM",
    key:"SOURCE_NM",
    sorter: (a, b) => a.SOURCE_NM.localeCompare(b.SOURCE_NM),
  },
  {
    title: "Client ID",
    dataIndex: "CLIENT_ID",
    key:"CLIENT_ID",
    sorter: (a, b) => a.CLIENT_ID - b.CLIENT_ID,
  },
  {
    title: "Client Name",
    dataIndex: "CLIENT_NM",
    key:"CLIENT_NM",
    sorter: (a, b) => a.CLIENT_NM.localeCompare(b.CLIENT_NM),
  },
  {
    title: "Activation Date",
    dataIndex: "ACTIVATION_DT",
    key:"ACTIVATION_DT",
    sorter: (a, b) => new Date(a.ACTIVATION_DT) - new Date(b.ACTIVATION_DT),
  },
  {
    title: "Termination Date",
    dataIndex: "TERMINATION_DT",
    key:"TERMINATION_DT",
    sorter: (a, b) => new Date(a.TERMINATION_DT) - new Date(b.TERMINATION_DT),
  },
  {
    title: "Interference Coordination Value",
    dataIndex: "VALUE_1",
    key:"VALUE_1",
    sorter: (a, b) => a.VALUE_1 - b.VALUE_1,
  },
  {
    title: "Duplex Compensation Coefficient",
    dataIndex: "VALUE_2",
    key:"VALUE_2",
    sorter: (a, b) => a.VALUE_2 - b.VALUE_2,
  },
  {
    title: "Max Range",
    dataIndex: "VALUE_3",
    key:"VALUE_3",
    sorter: (a, b) => a.VALUE_3 - b.VALUE_3,
  },
  {
    title: "Updated By",
    dataIndex: "UPDATED_BY",
    key:"UPDATED_BY",
    sorter: (a, b) => a.UPDATED_BY.localeCompare(b.UPDATED_BY),
  },
  {
    title: "Update Time",
    dataIndex: "UPDATE_TIMESTAMP",
    key:"UPDATE_TIMESTAMP",
    sorter: (a, b) => new Date(a.UPDATE_TIMESTAMP) - new Date(b.UPDATE_TIMESTAMP)
  },
];
