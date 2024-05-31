import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlocContext } from "../Context/BlocContext";

function BlockForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { keyId, setKeyId, CreateNote } = useContext(BlocContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
            id: keyId,
            title,
            description,
        };

        try {
            const response = await fetch('http://76.76.21.123:3000/notas', {
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
        <section style={styles.formContainer}>
            <h1 style={styles.formTitle}>Registrar nota</h1>
            <form style={styles.form} onSubmit={handleSubmit}>
                <input
                    style={styles.formInput}
                    placeholder="Escribe el titulo"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                />
                <textarea
                    style={styles.formTextarea}
                    placeholder="Escribe la descripcion"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                />
                <button style={styles.formButton}>Guardar</button>
            </form>
        </section>
    );
}

const styles = {
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    form: {
        background: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
        margin: '1rem auto',
    },
    formTitle: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: '#333',
        textAlign: 'center',
    },
    formInput: {
        width: '100%',
        padding: '0.75rem',
        marginBottom: '1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '1rem',
        transition: 'border-color 0.3s',
    },
    formTextarea: {
        width: '100%',
        padding: '0.75rem',
        marginBottom: '1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '1rem',
        transition: 'border-color 0.3s',
    },
    formButton: {
        width: '100%',
        padding: '0.75rem',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: '#fff',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    '@media (maxWidth: 600px)': {
        form: {
            padding: '1.5rem',
        },
        formTitle: {
            fontSize: '1.25rem',
        },
    },
};

export default BlockForm;
