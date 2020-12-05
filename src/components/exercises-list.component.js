import React from 'react';
import Exercise from './exercise.component';

export default function ExercisesList({ exercises, del}) {
    return(
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map(exercise => <Exercise exercise={exercise} del={del} />)}
          </tbody>
        </table>
      </div>
    );
}
