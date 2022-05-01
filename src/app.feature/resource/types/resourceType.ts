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

export type ResourceDataType = {
  _id: string
  id: string
  index: number
  type: string
  boardType: string
  title: string
  content: string
  imagesLocations: string[]
  filesLocations: []
  date: string
  createdAt: string
  __v: number
}

export type ResourceFileData = {
  _id: string
  placeID: string
  originalName: string
  fileName: string
  location: string
  type: string
  createdAt: string
  __v: number
}
