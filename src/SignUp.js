import React, { useState } from 'react';
import backgroundImage from './assets/back.png';
import './SignUp.css';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState('Etudiant');
  const [userData, setUserData] = useState({
    nom: '',
    prenom: '',
    email: '',
    mot_de_passe: '',
    role: 'Etudiant',
    adresse: '',
    date_naissance: '',
    niveaueducation: '',
    niveau_educatif: '',
    specialite: '',
    statut: 'actif',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setUserData({ ...userData, role });
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('User registered successfully:', data);
        
        // Redirect to login page
        window.location.href = '/login';
        
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="signup-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="signup-form">
              <h2 className="text-center mb-4">Inscription</h2>
              {step === 1 && (
                <div>
                  <p>Choisissez votre rôle :</p>
                  <div className="d-flex justify-content-between role-selection">
                    <div className={`card role-card ${selectedRole === 'Etudiant' ? 'selected' : ''}`} onClick={() => handleRoleSelect('Etudiant')}>
                      <div className="card-body text-center">
                        <h3 className="card-title font-weight-bold mb-0" style={{ fontSize: '1rem' }}>Étudiant</h3>
                      </div>
                    </div>
                    <div className={`card role-card ${selectedRole === 'Parent' ? 'selected' : ''}`} onClick={() => handleRoleSelect('Parent')}>
                      <div className="card-body text-center">
                        <h3 className="card-title font-weight-bold mb-0" style={{ fontSize: '1rem' }}>Parent</h3>
                      </div>
                    </div>
                    <div className={`card role-card ${selectedRole === 'Enseignant' ? 'selected' : ''}`} onClick={() => handleRoleSelect('Enseignant')}>
                      <div className="card-body text-center">
                        <h3 className="card-title font-weight-bold mb-0" style={{ fontSize: '1rem' }}>Enseignant</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {step === 2 && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input type="text" name="nom" className="form-control" placeholder="Nom" value={userData.nom} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <input type="text" name="prenom" className="form-control" placeholder="Prénom" value={userData.prenom} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <input type="email" name="email" className="form-control" placeholder="Email" value={userData.email} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <input type="password" name="mot_de_passe" className="form-control" placeholder="Mot de passe" value={userData.mot_de_passe} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <input type="date" name="date_naissance" className="form-control" placeholder="Date de naissance" value={userData.date_naissance} onChange={handleChange} required />
                  </div>
                  <div className="mb-3">
                    <input type="text" name="adresse" className="form-control" placeholder="Adresse" value={userData.adresse} onChange={handleChange} required />
                  </div>
                  {selectedRole === 'Etudiant' && (
                    <div className="mb-3">
                      <input type="text" name="niveaueducation" className="form-control" placeholder="Niveau d'études" value={userData.niveaueducation} onChange={handleChange} required />
                    </div>
                  )}
                  {selectedRole === 'Enseignant' && (
                    <div>
                      <div className="mb-3">
                        <input type="text" name="niveau_educatif" className="form-control" placeholder="Niveau éducatif" value={userData.niveau_educatif} onChange={handleChange} required />
                      </div>
                      <div className="mb-3">
                        <input type="text" name="specialite" className="form-control" placeholder="Spécialité" value={userData.specialite} onChange={handleChange} required />
                      </div>
                    </div>
                  )}
                  <div className="mb-4">
                    <button type="submit" className="btn btn-primary btn-block rounded-pill py-2">S'inscrire</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
