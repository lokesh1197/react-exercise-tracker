import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';

export default function EditExercise({ users, update, getOne }) {
  const {id} = useParams();
  const [{value, exercise}, setValue] = useState({value: "Loading. Please wait...", exercise: {date: new Date()}});

useEffect(() => {
  getOne(id).then((res) => setValue({ value: form(), exercise: res })).catch(err => console.log(err));
}, []);


  return (
    <div>
      {value}
    </div>
  );

function setDate(e) {
  setValue({ value, exercise: { date: e.target.value } });
}

  function form() {
    return (
      <form onSubmit={update}>
        <input type="hidden" name="id" value={id} />
        <div className="form-group">
          <label>Username: </label>
          <select name="username" className="form-control" required placeholder={exercise.username} >
            {users.map(user => <option key={user} value={user}>{user}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input type="text" name="description" className="form-control" required placeholder={exercise.description} />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input type="text" name="duration" className="form-control" required placeholder={exercise.duration} />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <DatePicker name="date" selected={exercise.date} onChange={setDate} />
        </div>
        <input type="submit" className="btn btn-primary" value="Update Log" />
      </form>
    );
  }
}
