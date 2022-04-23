import { FormInstance } from 'antd'
import api from 'app.modules/api'
import { API_RESOURCE } from 'app.modules/keyFactory'
import React from 'react'
import { useQuery } from 'react-query'
import { ContentDataType, ResourceDataType } from '../types/resourceType'

const requestApiGetResource = async ({ id }: { id: string | null }) => {
  const response = await api.GET(API_RESOURCE + (id ? `/${id}` : ''))
  return response.data.data
}

export const useQueryGetResource = () => {
  return useQuery<ResourceDataType[]>([API_RESOURCE], () => requestApiGetResource({ id: null }))
}

export const useQueryGetResourceDetail = (
  id: string,
  setState: React.Dispatch<React.SetStateAction<ContentDataType>>,
  form: FormInstance<any>
) => {
  return useQuery<ResourceDataType>([API_RESOURCE, id], () => requestApiGetResource({ id }), {
    onSuccess: (data) => {
      setState({
        html: data.content as string,
        markdown: '',
      })
      console.log(data)
      form.setFieldsValue({
        type: data.boardType,
        name: data.title,
        files: data.filesLocations,
      })
      console.log(form.getFieldsValue(true))
    },
  })
}
