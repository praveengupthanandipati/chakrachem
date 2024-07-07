import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const TextEditor = ({ value, onChange }) => {
  const editor = useRef(null);
  const config = {
    readonly: false,
    height: 300,
  };

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={value}
        config={config}
        onBlur={(newContent) => onChange(newContent)}
        onChange={(newContent) => {}}
      />
    </div>
  );
};

export default TextEditor;
