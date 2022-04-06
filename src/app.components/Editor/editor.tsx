import * as React from "react";
import styled from "styled-components";

import { Editor, EditorProps } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

const ForwardedToastEditor = React.forwardRef<Editor | undefined, EditorProps>(
  (props, ref) => {
    console.log(ref);
    return <Editor {...props} ref={ref} />;
  }
);

ForwardedToastEditor.displayName = "ForwaredToastEditor";

const ToastEditor = ({ ref }) => {
  const editorRef = React.useRef<Editor>();
  const handleChange = () => {
    console.log(ref);
  };
  return (
    <ForwardedToastEditor
      initialValue=""
      previewStyle="vertical"
      initialEditType="markdown"
      useCommandShortcut={true}
      height="600px"
      ref={ref}
      onChange={handleChange}
    />
  );
};

export default ToastEditor;
