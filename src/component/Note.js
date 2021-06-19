import React from 'react';

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            {/* {console.log(props.title)} */}
            <p>{props.content}</p>
            {/* {console.log(props.content)} */}
        </div>
    );
}

export default Note;