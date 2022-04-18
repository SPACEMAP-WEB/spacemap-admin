import RowDetailShow from 'app.components/Table/RowDetailShow'
import { TContact } from '../constants/type'

const DataColumns = () => [
  {
    title: 'Index',
    key: 'index',
    dataIndex: 'index',
    align: 'center' as const,
    width: '5%',
    sorter: (a: TContact, b: TContact) => (a.index as number) - (b.index as number),
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
    width: '20%',
  },
  {
    title: 'Message',
    key: 'message',
    dataIndex: 'message',
  },
  {
    title: 'CreatedAt',
    key: 'createdAt',
    dataIndex: 'createdAt',
    width: '10%',
    render: (value: string) => <div>{value.split('T')[0]}</div>,
  },
  {
    dataIndex: 'action',
    key: 'action',
    width: '10%',
    render: (value: string, row: TContact) => <RowDetailShow />,
  },
]

export default DataColumns
