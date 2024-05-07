// StudentListPage.js

import React, { useState, useEffect } from 'react';

const StudentListPage = () => {
  // Example state to hold student data
  const [students, setStudents] = useState([]);

  // Example useEffect to fetch student data
  useEffect(() => {
    // Simulated fetch request (replace with actual API call)
    const fetchStudents = async () => {
      try {
        const response = await fetch('api/students');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.firstName} {student.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentListPage;
