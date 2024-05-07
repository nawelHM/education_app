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
import Dashboard from './Dashboard';
import Sidebar from "./Sidebar";
import StudentListPage from "./StudentListPage";
//import ListePostesPage from "./ListePostesPage";
import ListeEnseignantsPage from "./ListeEnseignantsPage";
import UpdateContenuEducatif from './UpdateContenuEducatif';
import ContenuList from './ContenuList';
import AjouterCorrection  from './AjouterCorrection';
const FooterWithRoute = () => {
  const location = useLocation();

  useEffect(() => {
    // Determine whether to show or hide the footer based on the current route
    const path = location.pathname;
    const routesWithoutFooter = ['/addcontent', '/login', '/signup' , '/dashboard' , '/studentlistpage','/listeposte','/listeenseignant'];
    const shouldHideFooter = routesWithoutFooter.includes(path);
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.display = shouldHideFooter ? 'none' : 'block';
    }
  }, [location]);

  return null;
};


const App = () => {
  const [showNavbar, setShowNavbar] = useState(true);
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
    
  ];
  useEffect(() => {
  const path = window.location.pathname;
    setShowNavbar(!['/dashboard' , '/studentlistpage','/listeposte','/listeenseignant'].includes(path));
  }, []);
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
      {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home staticData={staticData} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addcontent" element={<AddContenuEducatif />} />
          <Route path="/details/:index" element={<Details staticData={staticData} />} /> {/* Route for Details component */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/studentlistpage" element={<StudentListPage /> } /> 
           <Route path="/listeenseignant" element={<ListeEnseignantsPage />} />
          {/* <Route path="/listeposte" element={<ListePostesPage />} /> */}
          <Route path="/updatecontent" element={<UpdateContenuEducatif />} />
          <Route path="/courslist" element={<ContenuList />} /> 
          <Route path="/ajoutercorrection" element={<AjouterCorrection />} />
          
        </Routes>
        <FooterWithRoute />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
