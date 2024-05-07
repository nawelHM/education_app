import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from './assets/1.png';

const ContenuList = () => {
    const [contenus, setContenus] = useState([]);

    useEffect(() => {
        // Fetch the list of contents from the server
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/contenus');
                setContenus(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleUpdate = (contenuId) => {
        // Handle update logic here
        console.log(`Updating contenu with ID ${contenuId}`);
    };

    const handleDelete = (contenuId) => {
        // Handle delete logic here
        console.log(`Deleting contenu with ID ${contenuId}`);
    };

    return (
        <div className="container-fluid" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh' }}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Liste de Contenus</h2>
                            <ul className="list-group">
                                {contenus.map((contenu) => (
                                    <li key={contenu._id} className="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <div>{contenu.titre}</div>
                                            <div>{contenu.description}</div>
                                        </div>
                                        <div>
                                            <button className="btn btn-outline-primary me-2" onClick={() => handleUpdate(contenu._id)}>
                                                <FontAwesomeIcon icon={faEdit} />
                                            </button>
                                            <button className="btn btn-outline-danger" onClick={() => handleDelete(contenu._id)}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mb-3" style={{ marginBottom: '20px' }}>
                        {/* Margin applied to this div */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContenuList;
