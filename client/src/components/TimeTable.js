import React from 'react';
import PropTypes from 'prop-types';

const TimeTable = ({ data }) => {
  return (
    <div>
      <h2 className="text-center my-4">Time Table</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Day</th>
            <th>Hours</th>
            <th>Course</th>
            <th>Section</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.day}</td>
              <td>{entry.hours}</td>
              <td>{entry.course}</td>
              <td>{entry.section}</td>
              <td>{entry.room}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TimeTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      hours: PropTypes.string.isRequired,
      course: PropTypes.string.isRequired,
      section: PropTypes.string.isRequired,
      room: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TimeTable;
