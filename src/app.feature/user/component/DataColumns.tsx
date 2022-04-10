import React from 'react';

const DataColumns: any = () => [
  {
    title: 'Index',
    key: 'index',
    align: 'center',
    render: (value, item, index) => index + 1,
    width: '5%',
  },
  {
    title: 'UserName',
    dataIndex: 'username',
    key: 'username',
    width: '10%',
  },
  {
    title: 'Email',
    key: 'email',
    dataIndex: 'email',
  },
  { title: 'Date', key: 'date', dataIndex: 'date', width: '10%' },
];

export default DataColumns;
