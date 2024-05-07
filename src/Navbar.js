import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaComment } from 'react-icons/fa';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    window.location.href = '/login';
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const renderAuthButton = () => {
    const userId = localStorage.getItem('userId');
    const role = localStorage.getItem('role');

    if (userId) {
      if (role === 'Admin') {
        return (
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        );
      } else {
        return (
          <button className="btn btn-link nav-link" onClick={handleLogout}>Déconnexion</button>
        );
      }
    } else {
      return (
        <Link className="nav-link" to="/login">Connexion</Link>
      );
    }
  };

  const role = localStorage.getItem('role');

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Le Nom de Votre Application</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {(role === 'Etudiant' || role === 'Parent') && (
              <li className="nav-item">
                <Link className="nav-link" to="/">Accueil</Link>
              </li>
            )}
            {role === 'Enseignant' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/addcontent">Ajouter Spécialité</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/updatecontent">Modifier Spécialité</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/courslist">Liste des Spécialités</Link>
                </li>
              </>
            )}
            {(role === 'Etudiant') && (
              <li className="nav-item">
                <Link className="nav-link" to="/ajoutercorrection">Ajouter Correction</Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {(role === 'Etudiant' || role === 'Parent') && (
              <li className="nav-item">
                <div className="dropdown">
                  <button className="btn btn-link nav-link" onClick={toggleDropdown}>
                    <FaComment /> Chatbot AI
                  </button>
                  {isOpen && (
                    <div className="dropdown-menu show" style={{ width: '250px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                      <input type="text" className="form-control mb-2" placeholder="Search..." />
                      <select className="form-select mb-2" aria-label="Select an option">
                        <option value="cours">Cours</option>
                        <option value="test">Test</option>
                        <option value="devoir_correction">Devoir Correction</option>
                      </select>
                      <button className="btn btn-primary">Submit</button>
                    </div>
                  )}
                </div>
              </li>
            )}
            <li className="nav-item">
              {renderAuthButton()}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
