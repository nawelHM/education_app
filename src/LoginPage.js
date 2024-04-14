import React, { useState } from 'react';
import backgroundImage from './assets/back.png';
import { Link } from 'react-router-dom';
import './Login.css';
import axios from 'axios'; // Import Axios for making HTTP requests

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { username, password });
      console.log(response.data); // Handle successful login response
    } catch (error) {
      console.error('Login failed:', error.response.data); // Handle login error
    }
  };

  return (
    <div className="login-page" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="login-form">
        <h2 className="text-center mb-4">Connecter</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" id="username" className="form-control form-control-lg" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="mb-3">
            <input type="password" id="password" className="form-control form-control-lg" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary btn-block rounded-pill">Login</button>
          </div>
          <div className="text-center mb-3">
            <a href="#" className="text-decoration-none">Mot de passe oublier?</a>
          </div>
          <hr />
          <div className="text-center">
            <p className="mb-3">vous n'avez pas un compte?</p>
            <Link to="/signup" className="btn btn-success rounded-pill">cree un compte</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
