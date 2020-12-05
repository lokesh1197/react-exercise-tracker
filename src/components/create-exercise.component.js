import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CreateExercise({ users, add })  {
  const [exercise, setExercise] = useState({
    username: '',
    description: '',
    duration: 0,
    date: new Date()
  });

  function setUser(e) {
    const username = e.target.value;
    setExercise(prev => { return { ...prev, username } });
  }

  function setDescription(e) {
    const description = e.target.value;
    setExercise(prev => { return { ...prev, description } });
  }

  function setDuration(e) {
    const duration = e.target.value;
    setExercise(prev => { return { ...prev, duration } });
  }

  function setDate(date) {
    setExercise(prev => { return { ...prev, date: date } });
  }


  return (
    <form onSubmit={add}>
      <div className="form-group">
        <label>Username: </label>
        <select name="username" className="form-control" required onChange={setUser} value={exercise.username}>
          {users.map(user => <option key={user} value={user}>{user}</option>)}
        </select>
      </div>
      <div className="form-group">
        <label>Description: </label>
        <input type="text" name="description" className="form-control" required onChange={setDescription} value={exercise.description} />
      </div>
      <div className="form-group">
        <label>Duration (in minutes): </label>
        <input type="text" name="duration" className="form-control" required onChange={setDuration} value={exercise.duration} />
      </div>
      <div className="form-group">
        <label>Date: </label>
        <DatePicker name="date" onChange={setDate} selected={exercise.date} />
      </div>
      <input type="submit" className="btn btn-primary" value="Log Exercise" />
    </form>
  );
}
