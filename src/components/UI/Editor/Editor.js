import React from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const Editor = props => (
  <div>
    <label className='w-100'>Description
      <SunEditor 
        onChange={props.change} 
        setContents={props.text} 
        width="100%"
        setOptions={{
          height: 250,
          placeholder:'Enter text',
        }}
      />
    </label>
  </div>
);

export default Editor;