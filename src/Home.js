import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './assets/bh55.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Home = () => {
  const niveaux = ["7eme", "8eme", "9eme", "1ere", "2eme", "3eme", "Bac"];
  const typesContenus = ["Cours", "Test", "Devoirs", "Exercices"];
  const semestres = ["S1", "S2", "S3"];

  const [showExplanation, setShowExplanation] = useState(false);
  const [courses, setCourses] = useState([]);

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await axios.get('http://localhost:4000/enseignantviewcours/cours');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }
    fetchCourses();
  }, []);

  return (
    <div className="container-fluid p-0" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className="row">
        <div className="col-md-3">
          <div className="sidebar p-4 mt-5" style={{ marginTop: '40px', marginLeft: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', background: 'rgba(255, 255, 255, 0.8)' }}>
            <div className="mb-3">
              <label>Niveau:</label>
              {niveaux.map(niveau => (
                <div key={niveau} className="form-check">
                  <input className="form-check-input" type="radio" name="niveau" id={niveau} value={niveau} />
                  <label className="form-check-label" htmlFor={niveau}>{niveau}</label>
                </div>
              ))}
            </div>
            <div className="mb-3">
              <label>Type de Contenus:</label>
              {typesContenus.map(type => (
                <div key={type} className="form-check">
                  <input className="form-check-input" type="radio" name="typeContenus" id={type} value={type} />
                  <label className="form-check-label" htmlFor={type}>{type}</label>
                </div>
              ))}
            </div>
            <div className="mb-3">
              <label>Semestre:</label>
              {semestres.map(semestre => (
                <div key={semestre} className="form-check">
                  <input className="form-check-input" type="radio" name="semestre" id={semestre} value={semestre} />
                  <label className="form-check-label" htmlFor={semestre}>{semestre}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-9 mt-5">
          <div className="representation" style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', marginBottom: '20px', marginLeft: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ color: '#2d4059' }}>Bienvenue sur le site Parascolaire</h1>
            <p style={{ color: '#2d4059' }}>Voici un site parascolaire dynamique et coloré !</p>
            <div className="content-container">
              {courses.map((content, index) => (
                <div key={index} className="content-item" style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', marginBottom: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                  <h2 style={{ color: '#ff6f61' }}>{content.titre}</h2>
                  <p style={{ color: '#0077c0' }}>{content.description}</p>
                  <p style={{ color: '#41b3a3' }}>Trimestre: {content.trimestre}</p>
                  <p style={{ color: '#f4d35e' }}>Niveau Scolaire: {content.niveau_scolaire}</p>
                  <p style={{ color: '#2d4059' }}>Reporteur: {content.reporteur}</p>
                  <div style={{ textAlign: 'center' }}>
                    <Link to={`/details/${index}`} className="btn btn-primary mt-3">Plus</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="fixed-bottom mb-3" style={{ position: 'fixed', left: '20px', bottom: '20px', zIndex: '999', width: '300px' }}>
          <div className="card" style={{ display: showExplanation ? 'block' : 'none' }}>
            <div className="card-body">
              <h5 className="card-title">Bienvenue sur notre site éducatif !</h5>
              <p className="card-text">Ce site est conçu pour aider les élèves à trouver du contenu pédagogique adapté à leur niveau scolaire et à leurs besoins d'apprentissage.</p>
            </div>
          </div>
        </div>
        <div className="fixed-icon text-primary" style={{ position: 'fixed', left: '20px', bottom: '20px', fontSize: '2rem', zIndex: '1000' }} onClick={toggleExplanation}>
          <FontAwesomeIcon icon={faInfoCircle} />
        </div>
      </div>
    </div>
  );
}

export default Home;
