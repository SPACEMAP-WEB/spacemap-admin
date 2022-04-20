import api from 'app.modules/api'
import { API_RESOURCE } from 'app.modules/keyFactory'
import { useQuery } from 'react-query'
import { ResourceDataType } from '../types/resourceType'

const requestApiGetResource = async ({ id }: { id: string | null }) => {
  const response = await api.GET(API_RESOURCE + (id ? `/${id}` : ''))
  return response.data.data
}

export const useQueryGetResource = () => {
  return useQuery<ResourceDataType[]>([API_RESOURCE], () => requestApiGetResource({ id: null }))
}

export const useQueryGetResourceDetail = (id: string) => {
  return useQuery<ResourceDataType>([API_RESOURCE, id], () => requestApiGetResource({ id }))
}
