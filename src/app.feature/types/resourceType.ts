import { UploadFile } from 'antd/lib/upload/interface'

export type UploadStatusType = 'error' | 'success' | 'done' | 'uploading' | 'removed'

export type FileType = {
  lastModified: number
  lastModifiedDate: Date
  name: string
  originFileObj: File
  percent: number
  response: string
  size: number
  status: UploadStatusType
  type: string
  uid: string
  xhr: XMLHttpRequest
}

export type UploadFileType = {
  file: UploadFile | null
  fileList: UploadFile[]
}

export type ContentDataType = {
  html: string
  markdown: string
}
