import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Table from '../components/Table';
import StateDemo from '../components/StateDemo';

const RootLayout = () => {
  let user = { username: 'Jayesh', password: 'abc@123' };
  let linkList = [
    { linkRef: '/home', linkText: 'Home' },
    { linkRef: '/about', linkText: 'About' },
    { linkRef: '/products', linkText: 'Product' },
  ];
  let columns = ['Name', 'Email', 'Location'];

  let data = [
    { Name: 'Jayesh', Email: 'jayesh@gmail.com', Location: 'Thane'},
    { Name: 'Vedant', Email: 'vedant@gmail.com', Location: 'Latur'},
    { Name: 'Vinayak', Email: 'vinayak@gmail.com', Location: 'Solapur'},
    { Name: 'Utkarsh', Email: 'usp@gmail.com', Location: 'Pune' },
      { Name: 'Aditya', Email: 'aditya@gmail.com', Location: 'Pune'},
      { Name: 'Kartikeya', Email: 'kartikeya@gmail.com', Location: 'Lucknow'},
      { Name: 'Chirag', Email: 'chirag@gmail.com', Location: 'Mumbai'},
      { Name: 'Avishkar', Email: 'avishkar@gmail.com', Location: 'Latur' }
  ];

  return (
    <div>
      <Header user={user} />
      <Navigation linkList={linkList} />
      <main>
        <Table columns={columns} data={data} />
          </main>
        <StateDemo />
    </div>
  );
};

export default RootLayout;
