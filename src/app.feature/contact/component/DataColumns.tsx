import { TContact } from '../constants/type'

const DataColumns = () => [
  {
    title: 'Index',
    key: 'index',
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
  },
  {
    title: 'CreatedAt',
    key: 'createdAt',
    dataIndex: 'createdAt',
    width: '10%',
  },
]

export default DataColumns
