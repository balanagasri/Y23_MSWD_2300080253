import React from 'react';
import PropTypes from 'prop-types';

const cardStyle = {
  marginBottom: '1rem',
};

const Assignments = ({ data }) => {
  return (
    <div>
      <h2 className="text-center my-4">Assignments</h2>
      <div className="row">
        {data.map((assignment, index) => (
          <div className="col-md-4" key={index}>
            <div className="card" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title">{assignment.subject}</h5>
                <p className="card-text">
                  Due Date: {assignment.dueDate}<br />
                  Year: {assignment.year}<br />
                  Grading: {assignment.grading}<br />
                  Type: {assignment.type}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Assignments.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      grading: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Assignments;
