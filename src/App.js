import React from 'react';
import './App.css';
import GGEditor, { Flow, EditableLabel } from 'gg-editor';
import { NodePanel } from './Panel';
import CustomNode from './CustomNode';
import Tool from './tools/Tool';

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
    <GGEditor className="h-full flex">
      <div className="flex-grow">
        <Tool />
        <div style={{height: 'calc(100% - 48px)'}}>
          <Flow data={data} className="bg-gray-100 h-full" />
          <EditableLabel />
          <CustomNode />
        </div>
      </div>
      <div className="w-96 border-l">
        <NodePanel />
      </div>
    </GGEditor>
  );
}

export default App;
