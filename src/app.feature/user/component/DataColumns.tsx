import { TUser } from '../constants/type'

const DataColumns = () => [
  {
    title: 'Index',
    key: 'index',
    align: 'center' as const,
    width: '5%',
    sorter: (a: TUser, b: TUser) => (a.index as number) - (b.index as number),
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
  {
    title: 'Date',
    key: 'date',
    dataIndex: 'date',
    width: '10%',
  },
]

export default DataColumns
