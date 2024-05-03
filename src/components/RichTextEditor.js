import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './RichTextEditor.css'; // Import the CSS file

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <div className="rich-text-editor-container" >
      <div className="rich-text-editor-toolbar" >
        {/* Toolbar */}
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
