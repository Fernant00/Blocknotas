import { createContext, useEffect, useState } from "react";
import { Notes as data } from "../Data/Notes";

export const BlocContext = createContext();

function BlocContextProvider(props) {
    const [notes, setNotes] = useState([]);
    const [keyId, setKeyId] = useState(4);

    function CreateNote(note) {
        setNotes([
            ...notes,
            {
                id: keyId,
                title: note.title,
                description: note.description,
            },
        ]);
    }

    function DeleteNote(noteId) {
        setNotes(notes.filter((note) => note.id !== noteId));
    }

    return (
        <BlocContext.Provider
            value={{
                keyId,
                setKeyId,
                notes,
                setNotes,  // Añadimos setNotes aquí
                DeleteNote,
                CreateNote,
            }}
        >
            {props.children}
        </BlocContext.Provider>
    );
}
export default BlocContextProvider;
