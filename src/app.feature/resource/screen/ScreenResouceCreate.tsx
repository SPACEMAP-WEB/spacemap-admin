import React, { useState } from 'react'
import styled from 'styled-components'
import { Form, message, Button, Input, Select, Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import LottieLoadingTable from 'app.components/Loading/LottieLoadingTable'
import Error from 'app.components/Error/Error'
import dynamic from 'next/dynamic'
import { UploadChangeParam } from 'antd/lib/upload'
import { UploadFile } from 'antd/lib/upload/interface'
import { ContentDataType, UploadFileType } from 'app.feature/resource/types/resourceType'
import { createResoucre } from 'app.modules/api/resource'

const ToastEditor = dynamic(() => import('app.components/Editor/editor'), {
  ssr: false,
}) // client 사이드에서만 동작되기 때문에 ssr false로 설정

const { Option } = Select
const { Dragger } = Upload

const ScreenResourceEdit = () => {
  const router = useRouter()
  const [form] = Form.useForm()
  const [isSaveButtonActive, setIsSaveButtonActive] = useState<boolean>(false)
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [contentData, setContentData] = useState<ContentDataType>({ html: '', markdown: '' })

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  const handleFinishFailed = () => {
    message.error('Save failed!')
  }

  const handleValuesChange = (
    data:
      | Record<'type' | 'name' | 'contents', string>
      | Record<'file', UploadFileType>
      | Record<'imagesLocations', string[]>
  ) => {
    form.setFieldsValue(data)
    const formValuesList = Object.values(form.getFieldsValue(true))
    const isSomeValueNull = formValuesList.includes(null)
    setIsSaveButtonActive(!isSomeValueNull)
  }

  const handleEditorBlur = () => {
    form.setFieldsValue({ contents: contentData.html })
  }

  function getImages(html: string) {
    const imgReg = /<img.*?src="(.*?)"[^>]+>/g
    const images = []
    let img
    while ((img = imgReg.exec(html))) {
      images.push(img[1])
    }
    return images
  }

  const handleFinish = (values: any) => {
    const imagesLocations = getImages(contentData.html)
    console.log(form.getFieldValue('files'))
    let formData = new FormData()
    formData.append('boardType', values.type)
    formData.append('title', values.name)
    formData.append('content', values.contents)
    formData.append('imagesLocations', JSON.stringify(imagesLocations))
    form
      .getFieldValue('files')
      .fileList?.forEach((file: any) => formData.append('files', file.originFileObj as Blob))
    try {
      createResoucre(formData).then((response) => {
        console.log(response)
        router.back()
      })
    } catch {
      console.log('error')
    }
  }

  const handleBackPress = () => {
    router.back()
  }

  const handleFileChange = (info: UploadChangeParam<UploadFile<any>>) => {
    setFileList([...fileList, info.file])
  }

  if (false) return <Error />
  if (false) return <LottieLoadingTable />

  return (
    <StyledWrapper>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
        onValuesChange={handleValuesChange}
        className="form-container"
      >
        <div className="input-group">
          <Form.Item
            name="type"
            label="Type"
            initialValue={null}
            rules={[
              {
                type: 'string',
                required: true,
              },
            ]}
          >
            <Select allowClear placeholder="type">
              {['Media', 'Document'].map((type) => (
                <Option key={type} value={type}>
                  {type}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            initialValue={null}
            rules={[
              {
                type: 'string',
                required: true,
              },
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item name="contents" label="Contents" initialValue={contentData.html}>
            <ToastEditor
              contentData={contentData}
              setContentData={setContentData}
              onBlur={handleEditorBlur}
            />
          </Form.Item>
          <Form.Item name="files" label="Files" getValueProps={normFile} initialValue={fileList}>
            <Dragger onChange={handleFileChange}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data
                or other band files
              </p>
            </Dragger>
          </Form.Item>
        </div>
        <div className="button-group">
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <Button htmlType="button" onClick={handleBackPress} disabled={!isSaveButtonActive}>
            Back
          </Button>
        </div>
      </Form>
    </StyledWrapper>
  )
}

export default ScreenResourceEdit

const StyledWrapper = styled.div`
  width: 100%;
  background: #fff;
  padding: 30px;

  h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  h2 {
    color: #808080;
    font-size: 14px;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .input-group {
      width: 50%;

      label {
        color: #808080;
      }

      .ant-upload-list-picture-card .ant-upload-list-item-actions {
        a {
          display: none;
        }
      }

      .ant-upload-list-item-card-actions-btn.ant-btn-sm {
        width: 40px;
        height: 40px;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        .anticon-delete {
          color: white;
          background: red;
          font-size: 20px;
          width: 100%;
          height: 100%;
          align-items: center;
          border-radius: 50%;
          margin: 0;
        }
      }

      .ant-upload-list-picture-card .ant-upload-list-item:hover .ant-upload-list-item-info::before {
        opacity: 0;
      }

      .ant-upload-list.ant-upload-list-picture-card {
        margin-top: 10px;
      }

      .ant-input-number {
        width: 50%;
      }

      .ant-row.ant-form-item {
        margin-bottom: 20px;
      }

      .ant-col.ant-form-item-label {
        padding: 0;
      }

      .ant-form-item {
        margin: 0;
      }
    }

    .button-group {
      display: flex;
      justify-content: flex-end;

      > :first-child {
        margin-right: 10px;
      }
    }
  }
`
