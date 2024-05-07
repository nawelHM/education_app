import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaClipboardList, FaUserGraduate, FaChalkboardTeacher, FaSignOutAlt } from 'react-icons/fa'; 

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    window.location.href = '/login';
  };

  const renderAuthButton = () => {
    const userId = localStorage.getItem('userId');
    const userRole = localStorage.getItem('userRole');

    if (userId) {
      return (
        <button className="btn btn-link nav-link" onClick={handleLogout} style={{ color: '#4e7db0', fontSize: '18px', textDecoration: 'none' }}>
          <FaSignOutAlt className="mr-1" />Déconnexion
        </button>
      );
    } else {
      return (
        <Link className="nav-link" to="/login" style={{ color: '#4e7db0', fontSize: '18px', textDecoration: 'none' }}>
          <FaSignOutAlt className="mr-1" />Connexion
        </Link>
      );
    }
  };

  return (
    <div className="sidebar" style={{ 
      height: '100%', 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      backgroundColor: '#f0f5f9', // Light blue background color
      color: '#4e7db0', // Blue text color
      width: '250px', // Width of the sidebar
      padding: '20px' // Added padding for space
    }}>
      <div className="sidebar-header mb-5"> {/* Increased margin-bottom */}
        <h3 style={{ color: '#4e7db0', fontSize: '24px', marginBottom: '30px' }}>Education</h3> {/* Adjusted font size and margin */}
      </div>
      <ul className="list-unstyled components">
        <li style={{ marginBottom: '30px', marginTop: '20px' }}> {/* Increased margin-bottom and margin-top */}
          <Link to="/dashboard" style={{ textDecoration: 'none', color: '#4e7db0', fontSize: '18px' }}>
            <FaHome className="mr-2" />Accueil
          </Link>
        </li>
        <li style={{ marginBottom: '30px' }}> {/* Increased margin-bottom */}
          <Link to="/liste-des-postes" style={{ textDecoration: 'none', color: '#4e7db0', fontSize: '18px' }}>
            <FaClipboardList className="mr-2" />Liste des Postes
          </Link>
        </li>
        <li style={{ marginBottom: '30px' }}> {/* Increased margin-bottom */}
          <Link to="/liste-des-etudiants" style={{ textDecoration: 'none', color: '#4e7db0', fontSize: '18px' }}>
            <FaUserGraduate className="mr-2" />Liste des Étudiants
          </Link>
        </li>
        <li style={{ marginBottom: '30px' }}> {/* Increased margin-bottom */}
          <Link to="/liste-des-enseignants" style={{ textDecoration: 'none', color: '#4e7db0', fontSize: '18px' }}>
            <FaChalkboardTeacher className="mr-2" />Liste des Enseignants
          </Link>
        </li>
      </ul>
      <ul className="list-unstyled components mt-5">
        <li>
          {renderAuthButton()}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
