import React, {Component } from 'react';
import FOLDERS from './Folders';
import { Link } from 'react-router-dom';



const notes = FOLDERS.notes;

class Notes extends Component {
    render(){
        return (
            <div className="NoteSet">
            {notes.map(note => {
                return <li key={note.id}>
                    <Link
                to={`/note/${note.id}`}
                >
                {note.name}
                </Link>
                {note.modified}
                </li>
            })}
            </div>
        )
    }
}

export default Notes;