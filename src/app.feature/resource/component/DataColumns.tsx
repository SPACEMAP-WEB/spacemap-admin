import { templateDataColumns } from 'app.modules/templateTableColumn'
import { ResourceDataType } from '../types/resourceType'

export default templateDataColumns<ResourceDataType>([
  {
    title: 'Index',
    dataIndex: 'index',
    key: 'index',
    align: 'center',
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
  {
    title: 'Date',
    key: 'date',
    dataIndex: 'date',
    width: '15%',
  },
])
