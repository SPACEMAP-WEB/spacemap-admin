const DataColumns: any = () => [
  {
    title: 'Index',
    key: 'index',
    align: 'center',
    render: (value, item, index) => index + 1,
    width: '5%',
  },
  {
    title: 'Subject',
    dataIndex: 'subject',
    key: 'subject',
    width: '10%',
  },
  {
    title: 'Email',
    key: 'email',
    dataIndex: 'email',
  },
  { title: 'Date', key: 'date', dataIndex: 'date', width: '10%' },
]

export default DataColumns
