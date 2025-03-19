import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser((values) => ({ ...values, [name]: value }));
  };

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        sessionStorage.setItem('currentuser', user.username);
      axios.post('http://localhost:3000/users', user, {})
            .then(console.log('Axios login successfully', user));
    };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password" 
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Login;
