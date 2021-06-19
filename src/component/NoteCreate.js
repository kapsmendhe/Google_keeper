import React, { useState } from "react";

export default function NoteCreate(props) {
    const { setNotes } = props;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const titleHandler = (e) => {
        setTitle(e.target.value);
    }

    const contentHandler = (e) => {
        setContent(e.target.value);
    }

    const clickHandler = (e) => {
        const newNote = [{ title: title, content: content }]
        // console.log(notes);
        // console.log(newNote);
        // console.log([notes, newNote]);
        setNotes((notes) => {
            return [...notes, ...newNote];
        })
        setTitle("");
        setContent("");
    }
    return (
        <div className="note">
            <input onChange={titleHandler} type="text" value={title}></input>
            <input onChange={contentHandler} type="text" value={content}></input>
            <button onClick={clickHandler}>Add</button>
        </div>
    );
}