import React, { useContext, useEffect } from "react";
import { BlocContext } from "../Context/BlocContext";
import BlockCard from "./BlockCard";
import "../Style/ListStyle.css";

function BlockList() {
    const { notes, setNotes } = useContext(BlocContext);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await fetch('http://76.76.21.123:3000/notas');
                if (!response.ok) {
                    throw new Error('No se pudo obtener la lista de notas');
                }
                const data = await response.json();
                setNotes(data);
            } catch (error) {
                console.error('Hubo un problema al obtener las notas:', error);
            }
        };

        fetchNotes();
    }, [setNotes]);

    if (notes.length === 0) {
        return <h2 className="note_empty">Vacio</h2>
    }

    return (
        <section className="note_section">
            {notes.map(note => (
                <BlockCard key={note.id} note={note} />
            ))}
        </section>
    );
}

export default BlockList;
