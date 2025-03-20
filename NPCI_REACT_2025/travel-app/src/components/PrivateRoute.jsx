import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem('currentuser'); 

  return (
    isAuthenticated? children: <Navigate to='/'/>
  )
};

export default PrivateRoute;
