import React from 'react';
import { Item, ItemPanel } from 'gg-editor';

function NodePanel() {
    return (
        <div className="p-4">
            <ItemPanel>
                <Item
                    type='node'
                    model={{
                        label: 'Entry Trigger',
                        shape: 'entry-node',
                    }}
                >
                    <EntryNode />
                </Item>
                <Item
                    type='node'
                    model={{
                        size: [80, 24],
                        label: 'rect',
                    }}
                >
                    <DelayNode />
                </Item>
                <Item
                    type='node'
                    model={{
                        size: [100, 50],
                        label: 'ellipse',
                    }}
                >
                    <NodeDrag />
                </Item>
                <Item
                    type='node'
                    model={{
                        size: [80, 80],
                        label: 'diamond',
                    }}
                >
                    <NodeDrag />
                </Item>
                <Item
                    type='node'
                    model={{
                        size: [50, 50],
                        label: 'triangle',
                    }}
                >
                    <NodeDrag />
                </Item>
            </ItemPanel>
        </div>
    )
}

function NodeDrag() {
    return (
        <div className="panel-node-item">
            <div style={{ fontWeight: 'bold', borderBottom: '1px solid #ececec', paddingBottom: 8 }}>Entry Title</div>
            <div style={{ padding: '10px', color: '#bbb' }}>
                wait for <span style={{ fontWeight: 'bold' }}>1 minute</span>
            </div>
        </div>
    )
}

function EntryNode() {
    return (
        <div className="panel-node-item">
            <div style={{ fontWeight: 'bold', paddingBottom: 8 }}><i style={{ float: 'right', color: '#e1e1e1' }} className="fas fa-question-circle"></i> Entry Trigger</div>
            <div style={{ background: '#f5f9fb', border: '1px solid #02b2d0', padding: 20, margin: 8, borderRadius: 8, fontWeight: '600' }}>
                <i className="fas fa-bolt" style={{ color: '#02b2d0' }}></i> signed_up
            </div>
        </div>
    )
}

function DelayNode() {
    return (
        <div className="panel-node-item">
            <div style={{ fontWeight: 'bold', paddingBottom: 8 }}><i style={{ color: '#b97ed6' }} className="fas fa-clock"></i> Delay</div>
            <div style={{ borderTop: '1px solid #eee', padding: 15 }}>
                Wait for <b>1 Minute</b>
            </div>
        </div>
    )
}

export { NodePanel, }
