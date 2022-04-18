import api from 'app.modules/api'
import { API_GET_DETAIL_USER, API_GET_USERS } from 'app.modules/keyFactory'
import { useQuery } from 'react-query'
import { TUser } from '../constants/type'

const requestApiUser = async ({ id }: { id: string | null }) => {
  const res = await api.GET(API_GET_USERS + (id ? `/${id}` : ''))
  return res.data.data
}

export const useQueryGetUsers = () => {
  return useQuery<TUser[]>([API_GET_USERS], () => requestApiUser({ id: null }))
}

export const useQueryGetDetailUser = (id: string) => {
  return useQuery<TUser>([API_GET_DETAIL_USER, id]), () => requestApiUser({ id })
}
