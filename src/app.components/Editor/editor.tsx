import * as React from 'react'
import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import { ContentDataType } from 'app.feature/types/resourceType'
import { uploadImage } from 'app.modules/api/resource'

type EditorProps = {
  contentData: ContentDataType
  setContentData: React.Dispatch<React.SetStateAction<ContentDataType>>
  onBlur: () => void
}

const ToastEditor = ({ contentData, setContentData, onBlur }: EditorProps) => {
  const editorRef = React.useRef<Editor>(null)
  const handleChange = () => {
    if (!editorRef.current) return
    const editorInstance = editorRef.current?.getInstance()
    if (editorInstance) {
      setContentData({
        html: editorInstance?.getHTML(),
        markdown: editorInstance?.getMarkdown(),
      })
    }
  }

  React.useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook('addImageBlobHook')
      editorRef.current.getInstance().addHook('addImageBlobHook', async (blob, callback) => {
        const response = await uploadImage(blob)
        const s3ImageUrl = response.data.location as string
        callback(s3ImageUrl, 'imgUrl')
        return false
      })
    }
  }, [])

  return (
    <Editor
      initialValue={''}
      previewStyle="vertical"
      initialEditType="wysiwyg"
      useCommandShortcut={true}
      height="600px"
      ref={editorRef}
      onChange={handleChange}
      onBlur={onBlur}
    />
  )
}

export default ToastEditor
