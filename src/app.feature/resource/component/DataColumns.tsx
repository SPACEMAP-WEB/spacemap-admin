const DataColumns: any = () => [
  {
    title: 'Index',
    key: 'index',
    align: 'center',
    render: (value, item, index) => index + 1,
    width: '5%',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: '10%',
  },
  {
    title: 'Title',
    key: 'title',
    dataIndex: 'title',
  },
  { title: 'Date', key: 'date', dataIndex: 'date', width: '10%' },
]

export default DataColumns
