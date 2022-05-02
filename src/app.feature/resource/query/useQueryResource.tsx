import { FormInstance } from 'antd'
import api from 'app.modules/api'
import { arrToMap } from 'app.modules/arrToMap'
import { API_GET_RESOURCE_FILES, API_RESOURCE } from 'app.modules/keyFactory'
import React from 'react'
import { useQuery } from 'react-query'
import { ContentDataType, ResourceDataType } from '../types/resourceType'

type requestFileType = {
  data: ResourceDataType
  id: string
  setFileList: React.Dispatch<React.SetStateAction<any[]>>
}

const requestApiGetResource = async ({ id }: { id: string | null }) => {
  const response = await api.GET(API_RESOURCE + (id ? `/${id}` : ''))
  return response.data.data
}

export const useQueryGetResource = () => {
  return useQuery<ResourceDataType[]>([API_RESOURCE], () => requestApiGetResource({ id: null }))
}

const s3ToBlob = async (link: string, fileName: string) => {
  const res = await fetch(link)
  const data = await res.blob()
  const file = new File([data], fileName, { type: data.type })
  return file
}

const requestFileList = async ({ data, id, setFileList }: requestFileType) => {
  const fileData = await api.GET(API_GET_RESOURCE_FILES + `/${id}`)

  if (fileData.data.data?.length > 0) {
    const fileDataObj = arrToMap(fileData.data.data)
    const files = await Promise.all(
      data.filesLocations.map((fileLink) => s3ToBlob(fileLink, fileDataObj[fileLink]))
    )
    const fileList = [
      ...files.map((file) => {
        return {
          lastModified: file.lastModified,
          name: file.name,
          size: file.size,
          type: file.type,
          originFileObj: file,
          status: 'done',
          uid: `rc-upload-${Math.random().toString(36).substr(2, 16)}`,
        }
      }),
    ]
    setFileList(fileList)
  }
}

export const useQueryGetResourceDetail = ({
  id,
  setContentData,
  setFileList,
  form,
  setLoadingFile,
}: {
  id: string
  setContentData: React.Dispatch<React.SetStateAction<ContentDataType>>
  setFileList: React.Dispatch<React.SetStateAction<any[]>>
  form: FormInstance<any>
  setLoadingFile: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return useQuery<ResourceDataType>([API_RESOURCE, id], () => requestApiGetResource({ id }), {
    onSuccess: async (data) => {
      setContentData({
        html: data.content as string,
        markdown: '',
      })

      await requestFileList({ data, id, setFileList })

      setLoadingFile(true)
      form.setFieldsValue({
        type: data.boardType,
        name: data.title,
      })
    },
  })
}
