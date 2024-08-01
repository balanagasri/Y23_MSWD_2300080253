import React from 'react';
import './Faculty.css';

const Faculty = () => {
  const facultyMembers = [
    { name: 'Nagarjuna Karyemsetty', department: 'Computer Science' },
    { name: 'Gurusamy Murugesan', department: 'Computer Science' },
    { name: 'Dr. Murali Mohan Vutukuru', department: 'Computer Science' },
    // Add more faculty members as needed
  ];

  return (
    <div className="card-container">
      {facultyMembers.map((faculty, index) => (
        <div key={index} className="card">
          <h3>{faculty.name}</h3>
          <p>{faculty.department}</p>
        </div>
      ))}
    </div>
  );
};

export default Faculty;
