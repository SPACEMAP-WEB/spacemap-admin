import api from 'app.modules/api'
import { API_GET_CONTACTS } from 'app.modules/keyFactory'
import { useQuery } from 'react-query'
import { TContact } from '../constants/type'

const requestApiGetContact = async ({ id }: { id: string | null }) => {
  const res = await api.GET<TContact, null>(API_GET_CONTACTS + (id ? `/${id}` : ''))
  return res.data.data
}

export const useQueryGetContacts = () => {
  return useQuery<TContact[]>([API_GET_CONTACTS], () => requestApiGetContact({ id: null }))
}

export const useQueryGetDetailContact = (id: string) => {
  return useQuery<TContact>([API_GET_CONTACTS, id], () => requestApiGetContact({ id }))
}
