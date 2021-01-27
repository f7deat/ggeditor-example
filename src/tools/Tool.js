import { Command, constants } from 'gg-editor';
import React from 'react';

export default function Tool() {
    return (
        <div className="flex px-4 text-gray-700 bg-white">
            <Command name={constants.EditorCommand.Undo} className="p-3" disabledClassName="text-gray-400">
                <button className="btn" type="button"><i className="fas fa-undo"></i></button>
            </Command>
            <Command name={constants.EditorCommand.Redo} className="p-3" disabledClassName="text-gray-400">
                <button className="btn" type="button"><i className="fas fa-redo"></i></button>
            </Command>
            <Command name={constants.EditorCommand.Copy} className="p-3" disabledClassName="text-gray-400">
                <button className="btn" type="button"><i className="fas fa-copy"></i></button>
            </Command>
            <Command name={constants.EditorCommand.Paste} className="p-3" disabledClassName="text-gray-400">
                <button className="btn" type="button"><i className="fas fa-paste"></i></button>
            </Command>
            <Command name={constants.EditorCommand.Remove} className="p-3" disabledClassName="text-gray-400">
                <button className="btn" type="button"><i className="fas fa-trash"></i></button>
            </Command>
            <Command name={constants.EditorCommand.ZoomIn} className="p-3" disabledClassName="text-gray-400">
                <button className="btn" type="button"><i className="fas fa-search-plus"></i></button>
            </Command>
            <Command name={constants.EditorCommand.ZoomOut} className="p-3" disabledClassName="text-gray-400">
                <button className="btn" type="button"><i className="fas fa-search-minus"></i></button>
            </Command>
        </div>
    )
}