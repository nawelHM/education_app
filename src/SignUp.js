import React, { useState } from 'react';
import backgroundImage from './assets/back.png';
import './SignUp.css';

const SignUp = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [mot_de_passe, setMotDePasse] = useState('');
  const [role, setRole] = useState('Etudiant');
  const [adresse, setAdresse] = useState('');
  const [dateNaissance, setDateNaissance] = useState(''); // New state for date of birth
  const [statut, setStatut] = useState('actif');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/register', { // Adjust URL as per your backend server
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom,
          prenom,
          email,
          mot_de_passe,
          role,
          adresse,
          date_naissance: dateNaissance, // Map to the backend field name
          statut,
        }),
      });
      if (response.ok) {
        console.log('User signed up successfully!');
        // Redirect to login page or any other page
      } else {
        console.error('Failed to sign up');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="signup-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="signup-form">
              <h2 className="text-center mb-4">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text" id="nom" className="form-control" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                </div>
                <div className="mb-3">
                  <input type="text" id="prenom" className="form-control" placeholder="Prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
                </div>
                <div className="mb-3">
                  <input type="email" id="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <input type="password" id="mot_de_passe" className="form-control" placeholder="Mot de passe" value={mot_de_passe} onChange={(e) => setMotDePasse(e.target.value)} />
                </div>
                <div className="mb-3">
                  <input type="date" id="dateNaissance" className="form-control" placeholder="Date de naissance" value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} />
                </div>
                <div className="mb-3">
                  <select className="form-control" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="Etudiant">Etudiant</option>
                    <option value="Parent">Parent</option>
                    <option value="Enseignant">Enseignant</option>
                  </select>
                </div>
                <div className="mb-3">
                  <input type="text" id="adresse" className="form-control" placeholder="Adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
                </div>
                <div className="mb-4">
                  <button type="submit" className="btn btn-primary btn-block rounded-pill py-2">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
