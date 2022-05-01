import api from 'app.modules/api'
import { createResoucre } from 'app.modules/api/resource'
import { API_RESOURCE } from 'app.modules/keyFactory'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'

export const useMutationDeleteResource = () => {
  return useMutation(async (id: string) => {
    const res = await api.DELETE({ url: API_RESOURCE + `${id}` })
    return res
  })
}

export const useMutationPostResource = () => {
  const router = useRouter()
  return useMutation((formData: FormData) => createResoucre(formData), {
    onSuccess: () => {
      router.back()
    },
    onError: (error) => {
      console.error(error)
    },
  })
}
