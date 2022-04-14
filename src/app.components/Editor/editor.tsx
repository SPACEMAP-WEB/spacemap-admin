import * as React from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const html = '';

const ToastEditor = ({ html, setHtml }) => {
  const editorRef = React.useRef<Editor>();
  const handleChange = () => {
    if (!editorRef.current) return;
    setHtml(editorRef.current.getInstance().getHTML());
  };

  React.useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().setHTML(html);
      editorRef.current.getInstance().removeHook('addImageBlobHook');
      editorRef.current
        .getInstance()
        .addHook('addImageBlobHook', (blob, callback) => {
          console.log(blob);
        });
    }
  }, []);

  return (
    <Editor
      initialValue={html}
      previewStyle="vertical"
      initialEditType="wysiwyg"
      useCommandShortcut={true}
      height="600px"
      ref={editorRef}
      onChange={handleChange}
    />
  );
};

export default ToastEditor;
