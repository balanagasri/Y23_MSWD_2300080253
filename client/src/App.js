import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Faculty from './components/Faculty';
import Student from './components/Student';
import Courses from './components/Courses';
import User from './components/User'; // Uncommented the User import
import kl_students from './kl_students.jpg'; 
import kl_faculty from './kl_faculty.jpg';
import kl_cafeteria from './kl_cafeteria.jpg';
import kl_transport from './kl_transport.jpeg'; // Ensure the extension is correct
import kl_library from './kl_library.jpg';
import React from 'react';
import TimeTable from './TimeTable';
import Assignments from './Assignments';

const timeTableData = [
  { day: 'Monday', hours: '09:00 - 10:00', course: 'Math', section: 'A', room: '101' },
  { day: 'Monday', hours: '10:00 - 11:00', course: 'Physics', section: 'B', room: '102' },
  // Add more timetable entries
];

const assignmentsData = [
  { subject: 'Math', dueDate: '2024-08-10', year: '2024', grading: 'A', type: 'Homework' },
  { subject: 'Physics', dueDate: '2024-08-15', year: '2024', grading: 'B', type: 'Project' },
  // Add more assignments
];

const User = (props) => {
  return (
    <div>
      <h2>Name of the user: {props.name} Logged in as: {props.type}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center my-4">School Portal</h1>
      <TimeTable data={timeTableData} />
      <Assignments data={assignmentsData} />
      <div className="App">
        <Header />
        <h2 className="subheader">ERP for Y23</h2>
        <h4 className="announcement">Registrations start from Tomorrow</h4>
        <div className="image-container">
          <div className="image-item">
            <img src={kl_students} alt="Students" />
            <p>Students</p>
          </div>
          <div className="image-item">
            <img src={kl_faculty} alt="Faculty" />
            <p>Faculty</p>
          </div>
          <div className="image-item">
            <img src={kl_cafeteria} alt="Cafeteria" />
            <p>Cafeteria</p>
          </div>
          <div className="image-item">
            <img src={kl_transport} alt="Transport" />
            <p>Transport</p>
          </div>
          <div className="image-item">
            <img src={kl_library} alt="Library" />
            <p>Library</p>
          </div>
        </div>
        <User name="abc" type="Guest" />
        <Faculty />
        <Student />
        <Courses />
        <Footer />
      </div>
    </div>
  );
}

export default App;
