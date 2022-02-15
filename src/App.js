import React from 'react';
import './App.css';
import GGEditor, { Flow, EditableLabel } from 'gg-editor';
import Tool from './tools/Tool';
import data from './data.json'

function App() {
  return (
    <GGEditor className="h-full flex">
      <div className="flex-grow">
        <Tool />
        <div style={{height: 'calc(100% - 48px)'}}>
          <Flow data={data} className="bg-gray-100 h-full" />
          <EditableLabel />
        </div>
      </div>
    </GGEditor>
  );
}

export default App;
