import React, {Component } from 'react';
import FOLDERS from './Folders';


const notes = FOLDERS.notes;


export default function Note(props){

const note = notes.find(n =>
    n.id === props.match.params.noteId)
        return (
            <div>
                <div>
                    <h2>note.title</h2>
                </div>
                {note.content}
            </div>
            )
}
