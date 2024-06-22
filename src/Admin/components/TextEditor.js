import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("Start Description");
  const config = {
    readonly: false,
    height: 300,
  };
  const handleUpdate = (event) => {
    // const editorContent = event.target.innerHTML;
    // setContent(editorContent);
  };
  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={handleUpdate}
        onChange={(newContent) => {}}
      />
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
    </div>
  );
};

export default TextEditor;
