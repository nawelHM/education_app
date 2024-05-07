import React, { useState, useEffect } from 'react';
import axios from 'axios';
import backgroundImage from './assets/1.png';

const UpdateContenuEducatif = ({ contenuId }) => {
    const [contenu, setContenu] = useState({});
    const [typeContenus, setTypeContenus] = useState('');
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [trimestre, setTrimestre] = useState('');
    const [niveauScolaire, setNiveauScolaire] = useState('7eme');
    const [reporteur, setReporteur] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        // Fetch the existing content data based on the contenuId
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/contenueducatif/${contenuId}`);
                setContenu(response.data);
                setTypeContenus(response.data.type_contenus);
                setTitre(response.data.titre);
                setDescription(response.data.description);
                setTrimestre(response.data.trimestre);
                setNiveauScolaire(response.data.niveau_scolaire);
                setReporteur(response.data.reporteur);
                setImage(response.data.image);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [contenuId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            type_contenus: typeContenus,
            titre,
            description,
            trimestre,
            niveau_scolaire: niveauScolaire,
            reporteur,
            image,
        };

        try {
            const response = await axios.put(`/api/contenueducatif/${contenuId}`, data);
            console.log(response.data);
            // Optionally, redirect or show a success message
        } catch (error) {
            console.error(error);
            // Handle error if needed
        }
    };

    return (
        <div className="container-fluid" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh' }}>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Update Contenu Educatif</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="typeContenus" className="form-label">Type Contenus:</label>
                                    <select className="form-select" id="typeContenus" value={typeContenus} onChange={(e) => setTypeContenus(e.target.value)}>
                                        <option value="">Select Type Contenus</option>
                                        <option value="test">Test</option>
                                        <option value="devoirs">Devoirs</option>
                                        <option value="exercices">Exercices</option>
                                        <option value="cours">Cours</option>
                                    </select>
                                </div>
                                {/* Other form fields */}
                                <div className="d-grid mb-3">
                                    <button type="submit" className="btn btn-primary btn-block">Update</button>
                                </div>
                            </form>
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

export default UpdateContenuEducatif;
