import dynamic from 'next/dynamic';
import React, { useRef } from 'react';
import { EditorProps } from '@toast-ui/react-editor';

const Editor =
  dynamic <
  EditorProps >
  (() => import('@toast-ui/react-editor').then((m) => m.Editor),
  { ssr: false });

const ToastEditorComponent = () => {
  return (
    <Editor
      initialValue="hello react editor world!"
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
    />
  );
};

export default ToastEditorComponent;
