import React, { useState } from 'react';
import backgroundImage from './assets/1.png'; // Import the background image

const AddContenuEducatif = () => {
  const [typeContenus, setTypeContenus] = useState('');
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [trimestre, setTrimestre] = useState('');
  const [niveauScolaire, setNiveauScolaire] = useState('7eme');
  const [reporteur, setReporteur] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      type_contenus: typeContenus,
      titre,
      description,
      trimestre,
      date_pub: new Date(),
      niveau_scolaire: niveauScolaire,
      reporteur,
      image,
    };
    console.log(data); // Replace with actual API call
    setTypeContenus('');
    setTitre('');
    setDescription('');
    setTrimestre('');
    setNiveauScolaire('7eme');
    setReporteur('');
    setImage('');
  };

  return (
    <div className="container-fluid" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh' }}>
    <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Add Contenu Educatif</h2>
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
                <div className="mb-3">
                  <label htmlFor="titre" className="form-label">Titre:</label>
                  <input type="text" className="form-control" id="titre" value={titre} onChange={(e) => setTitre(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description:</label>
                  <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="trimestre" className="form-label">Trimestre:</label>
                  <select className="form-select" id="trimestre" value={trimestre} onChange={(e) => setTrimestre(e.target.value)}>
                    <option value="">Select Trimestre</option>
                    <option value="s1">S1</option>
                    <option value="s2">S2</option>
                    <option value="s3">S3</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="niveauScolaire" className="form-label">Niveau Scolaire:</label>
                  <select className="form-select" id="niveauScolaire" value={niveauScolaire} onChange={(e) => setNiveauScolaire(e.target.value)}>
                    <option value="7eme">7eme</option>
                    <option value="8eme">8eme</option>
                    <option value="9eme">9eme</option>
                    <option value="1ere">1ere</option>
                    <option value="2eme">2eme</option>
                    <option value="3eme">3eme</option>
                    <option value="Bac">Bac</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="reporteur" className="form-label">Reporteur:</label>
                  <input type="text" className="form-control" id="reporteur" value={reporteur} onChange={(e) => setReporteur(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">Image:</label>
                  <input type="file" className="form-control" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary btn-block">Cree</button>
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

export default AddContenuEducatif;
