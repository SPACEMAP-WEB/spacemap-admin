import api from 'app.modules/api'
import { API_RESOURCE } from 'app.modules/keyFactory'
import { useQuery } from 'react-query'
import { ResourceDataType } from '../types/resourceType'

const requestApiGetResource = async () => {
  const response = await api.GET(API_RESOURCE)
  return response.data.data
}

export const useQueryGetResource = () => {
  return useQuery<ResourceDataType[]>([API_RESOURCE], () => requestApiGetResource())
}
