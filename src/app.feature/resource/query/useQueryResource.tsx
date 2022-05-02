import { FormInstance } from 'antd'
import api from 'app.modules/api'
import { arrToMap } from 'app.modules/arrToMap'
import { API_RESOURCE } from 'app.modules/keyFactory'
import React from 'react'
import { useQuery } from 'react-query'
import { ContentDataType, ResourceDataType, ResourceFileData } from '../types/resourceType'

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

export const useQueryGetResourceDetail = ({
  id,
  setContentData,
  setFileList,
  form,
  fileData,
  setLoadingFile,
}: {
  id: string
  setContentData: React.Dispatch<React.SetStateAction<ContentDataType>>
  setFileList: React.Dispatch<React.SetStateAction<any[]>>
  form: FormInstance<any>
  fileData: ResourceFileData[]
  setLoadingFile: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return useQuery<ResourceDataType>([API_RESOURCE, id], () => requestApiGetResource({ id }), {
    onSuccess: async (data) => {
      setContentData({
        html: data.content as string,
        markdown: '',
      })
      if (fileData.length > 0) {
        const fileDataObj = arrToMap(fileData)
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
              uid: `rc-upload-${Date()}`,
            }
          }),
        ]
        setFileList(fileList)
      }
      setLoadingFile(true)
      form.setFieldsValue({
        type: data.boardType,
        name: data.title,
      })
    },
  })
}
