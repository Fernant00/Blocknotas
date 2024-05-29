import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlocContext } from "../Context/BlocContext";
import "../Style/FormStyles.css";

function BlockForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { keyId, setKeyId, CreateNote } = useContext(BlocContext);
    const navigate = useNavigate();

    const HandleSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
            id: keyId,
            title,
            description,
        };

        try {
            const response = await fetch('http://localhost:3000/notas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newNote),
            });

            if (!response.ok) {
                throw new Error('Error al guardar la nota');
            }

            const savedNote = await response.json();
            CreateNote(savedNote);
            setKeyId(keyId + 1);
            setTitle("");
            setDescription("");
            navigate("/");
        } catch (error) {
            console.error('Hubo un problema al guardar la nota:', error);
        }
    };

    return (
        <section>
            <h1 className="form_title">Registrar nota</h1>
            <form className="form" onSubmit={HandleSubmit}>
                <input
                    className="form_input"
                    placeholder="Escribe el titulo"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                />
                <textarea
                    className="form_textarea"
                    placeholder="Escribe la descripción"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                />
                <button className="form_button">save</button>
            </form>
        </section>
    );
}

export default BlockForm;
