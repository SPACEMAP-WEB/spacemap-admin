import { templateDataColumns } from 'app.modules/templateTableColumn'
import { TUser } from '../constants/type'

export default templateDataColumns<TUser>([
  {
    title: 'Index',
    key: 'index',
    align: 'center' as const,
    width: '5%',
    sorter: (a: TUser, b: TUser) => (a.index as number) - (b.index as number),
  },
  {
    title: 'UserName',
    key: 'username',
    width: '10%',
    render: (value: string, row: TUser) => <div>{row.firstname + row.lastname}</div>,
  },
  {
    title: 'Email',
    key: 'email',
    dataIndex: 'email',
  },
  {
    title: 'UserType',
    key: 'userType',
    dataIndex: 'userType',
  },
  {
    title: 'affiliation',
    key: 'affiliation',
    dataIndex: 'affiliation',
  },
  {
    title: 'createdAt',
    key: 'createdAt',
    dataIndex: 'createdAt',
    width: '10%',
  },
  {
    title: 'lastLoggedAt',
    key: 'lastLoggedAt',
    dataIndex: 'lastLoggedAt',
    width: '10%',
  },
  {
    title: 'modifiedAt',
    key: 'modifiedAt',
    dataIndex: 'modifiedAt',
    width: '10%',
  },
])
