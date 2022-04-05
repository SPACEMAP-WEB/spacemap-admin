import * as React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { NextPage } from 'next';

import { Editor as ToastEditor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const Editor = () => {
  const editorRef = React.useRef<ToastEditor>(null);

  // Editor에 사용되는 plugin 추가
  const plugins = [];

  return (
    <CustomReactQuill
      initialValue=""
      previewStyle="vertical"
      initialEditType="wysiwyg"
      useCommandShortcut={true}
      ref={editorRef}
      plugins={plugins}
      // onChange={()=>console.log(ToastEditor.)}
    />
  );
};

export default Editor;

// style
const CustomReactQuill = styled(ToastEditor)`
  height: 500px;
`;
