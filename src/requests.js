import axios from 'axios';

const baseUrl = 'http://localhost:5000';
const userUrl = baseUrl + '/users/';
const exerciseUrl = baseUrl + '/exercises/';

export const UserActions = {
  add(user) {
    axios.post(userUrl + 'add/', user)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  },

  async get() {
    return axios.get(userUrl)
      .then(res => res.data.map(user => user.username))
      .catch(err => console.log(err));
  }
}

export const ExerciseActions = {
  add(exercise) {
    axios.post(exerciseUrl + 'add/', exercise)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  },

  async get() {
    return axios.get(exerciseUrl)
      .then(res => res.data)
      .catch(err => console.log(err));
  },

  async getOne(id) {
    return axios.get(exerciseUrl + id)
      .then(res => res.data)
      .catch(err => console.log(err));
  },

  update(id, exercise) {
    axios.put(exerciseUrl + id, exercise)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  },

  delete(id) {
    axios.delete(exerciseUrl + id)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  },
}
