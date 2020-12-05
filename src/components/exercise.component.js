import React from 'react';
import { Link } from 'react-router-dom';

export default function Exercise({ exercise, del }) {
  return (
    <tr>
      <td>{exercise.username}</td>
      <td>{exercise.description}</td>
      <td>{exercise.duration}</td>
      <td>{new Date(exercise.date).toString()}</td>
      <Link to={"/edit/" + exercise._id}>edit</Link> | <a href="/" onClick={() => del(exercise._id)}>delete</a>
    </tr>
  );
}
