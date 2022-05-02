import api from '.'
import { API_RESOURCE, API_POST_RESOURCE_IMAGE } from 'app.modules/keyFactory'

export const uploadImage = async (blob: File) => {
  let formData = new FormData()
  formData.append('file', blob)
  try {
    const response = await api.POST({
      headers: {
        'content-type': 'multipart/form-data',
      },
      url: API_POST_RESOURCE_IMAGE,
      data: formData,
    })
    return response.data
  } catch {
    console.log('error')
  }
}

export const createResoucre = async (formData: FormData) => {
  const response = await api.POST({
    headers: {
      'content-type': 'multipart/form-data',
    },
    url: API_RESOURCE,
    data: formData,
  })
  return response.data
}
