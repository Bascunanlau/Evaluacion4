import React from "react";

const Item = ({note, deleteNote}) => {

    const {id, text, title, classStyle} = note;

    const fnDeleteNote = () => {
        deleteNote(id);
    }    

    return (
        <li className={`note ${classStyle}`}>
            <div>
                <div>
                    <div className="note-button-div">
                        <button onClick={fnDeleteNote} className="note-button">X</button>
                    </div>
                    <h2>{title}</h2>
                </div>
                <p>{text}</p>
            </div>
        </li>
    );

}

export {Item}