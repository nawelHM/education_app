import React, { useState, useEffect } from 'react';

const ListeEnseignantsPage = () => {
  // État pour stocker la liste des enseignants
  const [enseignants, setEnseignants] = useState([]);

  // Simuler le chargement des données des enseignants depuis une source externe
  useEffect(() => {
    // Fonction asynchrone pour charger les enseignants (exemple)
    const fetchEnseignants = async () => {
      try {
        // Remplacer cette logique avec la vraie récupération de données
        const response = await fetch('URL_API_ENSEIGNANTS');
        const data = await response.json();
        setEnseignants(data);
      } catch (error) {
        console.error('Erreur lors du chargement des enseignants :', error);
      }
    };

    // Charger les enseignants lorsque le composant est monté
    fetchEnseignants();

    // Nettoyer l'effet lorsque le composant est démonté
    return () => {
      // Logique de nettoyage (si nécessaire)
    };
  }, []); // L'effet se déclenche seulement une fois lors du montage

  return (
    <div>
      <h1>Liste des Enseignants</h1>
      <ul>
        {enseignants.map((enseignant, index) => (
          <li key={index}>
            {enseignant.nom} {enseignant.prenom}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListeEnseignantsPage;
