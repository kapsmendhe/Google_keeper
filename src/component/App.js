import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
import NoteCreate from './NoteCreate';

function App() {
    const [notes, setNotes] = useState([{ title: "", content: "" }]);
    const reverse = notes.reverse();
    return (
        <div>
            <Header />
            <NoteCreate notes={notes} setNotes={setNotes} />
            {/* {console.log(notes)} */}
            {reverse.map((ele) => {
                if (ele.title !== "" && ele.content !== "") {
                    return (
                        <Note
                            title={ele.title}
                            content={ele.content}
                        />
                    );
                }
            })}
            <Footer />
        </div>
    );
}

export default App;