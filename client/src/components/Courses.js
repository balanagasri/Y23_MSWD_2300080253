import React from 'react';
import './Courses.css';

const Courses = () => {
  const courses = [
    { title: 'Mern stack ', code: 'CS101' },
    { title: 'Python full stack', code: 'CS102' },
    { title: 'Data Science and Statistics', code: 'CS103' },
    // Add more courses as needed
  ];

  return (
    <div className="card-container">
      {courses.map((course, index) => (
        <div key={index} className="card">
          <h3>{course.title}</h3>
          <p>{course.code}</p>
        </div>
      ))}
    </div>
  );
};

export default Courses;
