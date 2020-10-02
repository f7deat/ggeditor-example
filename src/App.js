import React from 'react';
import './App.css';
import GGEditor, { Flow, EditableLabel, RegisterNode } from 'gg-editor';
import { NodePanel } from './Panel';
const data = {
  nodes: [
    {
      id: '0',
      label: 'Node',
      x: 55,
      y: 55,
    },
    {
      id: '1',
      label: 'Node',
      x: 55,
      y: 255,
    },
  ],
  edges: [
    {
      label: 'Label',
      source: '0',
      target: '1',
    },
  ],
};
function App() {
  return (
    <div className="App">
      <GGEditor>
      <div className="panel">
        <NodePanel/>
      </div>
        <Flow data={data} className="flow-wrapper" />
        <EditableLabel />
      </GGEditor>
    </div>
  );
}

export default App;
