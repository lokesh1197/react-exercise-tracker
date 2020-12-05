import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/navbar.component';
import ExerciseList from './components/exercises-list.component';
import EditExercise from './components/edit-exercises.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

import { UserActions, ExerciseActions } from './requests';

function App() {
  const [exercises, setExercises] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserActions.get().then(users => setUsers(users | []));
    ExerciseActions.get().then(exercises => setExercises(exercises | []));
  });

  function addExercise(e) {
    e.preventDefault();
    const exercise = {
      username: e.target.username.value,
      description: e.target.description.value,
      duration: e.target.duration.value,
      date: e.target.date.value,
    }
    console.log(exercise);
    ExerciseActions.add(exercise).then(res => console.log(res));
    window.location = '/';
  }

  function updateExercise(e) {
    e.preventDefault();
    const id = e.target.id.value;
    const exercise = {
      username: e.target.username.value,
      description: e.target.description.value,
      duration: e.target.duration.value,
      date: e.target.date.value,
    }
    console.log(id, exercise);
    ExerciseActions.update(id, exercise).then(res => console.log(res));
    window.location = '/';
  }

  function deleteExercise(id) {
    ExerciseActions.delete(id);
    window.location = '/';
  }

  function addUser(e) {
    e.preventDefault();
    const user = {
      username: e.target.username.value,
    }
    UserActions.add(user);
  }

  return (
    <Router>
      <Switch>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact>
          <ExerciseList exercises={exercises} del={deleteExercise}  />
        </Route>
        <Route path="/edit/:id">
          <EditExercise update={updateExercise} users={users} getOne={ExerciseActions.getOne} />
        </Route>
        <Route path="/create">
          <CreateExercise users={users} add={addExercise} />
        </Route>
        <Route path="/user">
          <CreateUser add={addUser} />
        </Route>
      </div>
      </Switch>
    </Router>
  );
}

export default App;
