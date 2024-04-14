import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Home from './Home';
import AddContenuEducatif from './AddContenuEducatif';
import Details from './Details'; // Import the Details component
import Contact from './Contact';
const FooterWithRoute = () => {
  const location = useLocation();

  useEffect(() => {
    // Determine whether to show or hide the footer based on the current route
    const path = location.pathname;
    const routesWithoutFooter = ['/addcontent', '/login', '/signup'];
    const shouldHideFooter = routesWithoutFooter.includes(path);
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.display = shouldHideFooter ? 'none' : 'block';
    }
  }, [location]);

  return null;
};

const App = () => {
  // Sample static data
  const staticData = [
    {
      type_contenus: "Cours",
      titre: "Mathématiques",
      description: "Cours de mathématiques pour les élèves de 7ème année.",
      trimestre: "s1",
      date_pub: new Date(),
      niveau_scolaire: "7eme",
      reporteur: "John Doe",
      image: "maths.jpg"
    },
    {
      type_contenus: "Devoirs",
      titre: "Devoir de français",
      description: "Devoir de français sur la grammaire et la conjugaison.",
      trimestre: "s2",
      date_pub: new Date(),
      niveau_scolaire: "9eme",
      reporteur: "Jane Doe",
      image: "francais.jpg"
    },
    // Add more static data objects as needed
  ];

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home staticData={staticData} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addcontent" element={<AddContenuEducatif />} />
          <Route path="/details/:index" element={<Details staticData={staticData} />} /> {/* Route for Details component */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FooterWithRoute />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
