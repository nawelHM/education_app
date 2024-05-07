import React, { useState } from 'react';
import backgroundImage from './assets/back.png';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios'; // Importer Axios pour effectuer des requêtes HTTP

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/auth/login', { email, mot_de_passe: password });
      console.log(response.data); // Handle successful login response
  
      // Save login data to local storage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId);
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('role', response.data.role);
      localStorage.setItem('nom', response.data.nom);
      localStorage.setItem('prenom', response.data.prenom);
  
      // Redirect user based on role
      const userRole = response.data.role;
      if (userRole === 'Admin') {
        // Redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        // Redirect to homepage
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Login failed:', error.response.data);
      setErrorMessage('Email ou mot de passe incorrect');
    }
  };
  

  return (
    <div className="login-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="login-form">
        <h2 className="text-center mb-4">Connecter</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="email" id="email" className="form-control form-control-lg" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <input type="password" id="password" className="form-control form-control-lg" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary btn-block rounded-pill">Login</button>
          </div>
          {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>} {/* Afficher le message d'erreur */}
          <div className="text-center mb-3">
            <a href="#" className="text-decoration-none">Mot de passe oublié?</a>
          </div>
          <hr />
          <div className="text-center">
            <p className="mb-3">Vous n'avez pas de compte?</p>
            <Link to="/signup" className="btn btn-success rounded-pill">Créer un compte</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
