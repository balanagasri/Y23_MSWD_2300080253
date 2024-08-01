import React from 'react';
import './Student.css';

const Student = () => {
  const students = [
    { name: 'Bala Naga Sri ', major: 'AI&DS' },
    { name: 'Madhu Shalini ', major: 'Mathematics' },
    { name: 'Jasvitha ', major: 'Computers' },
    // Add more students as needed
  ];

  return (
    <div className="card-container">
      {students.map((student, index) => (
        <div key={index} className="card">
          <h3>{student.name}</h3>
          <p>{student.major}</p>
        </div>
      ))}
    </div>
  );
};

export default Student;
