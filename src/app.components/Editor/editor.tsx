import * as React from 'react';
import styled from 'styled-components';

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const html = '';

const ToastEditor = ({ setHtml }) => {
  const editorRef = React.useRef<Editor>();
  const handleChange = () => {
    if (!editorRef.current) return;
    setHtml(editorRef.current.getInstance().getHTML());
  };

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
