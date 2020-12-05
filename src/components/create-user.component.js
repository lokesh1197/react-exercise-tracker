import React from 'react';

export default function CreateUser({ add }) {
  return (
    <form onSubmit={add}>
      <div className='form-group'>
        <label>Username: </label>
        <input type="text" required className="form-control"  name="username" />
      </div>
      <div className='form-group'>
        <input type="submit" className="btn btn-primary" value="Add User" />
      </div>
    </form>
  );
}
