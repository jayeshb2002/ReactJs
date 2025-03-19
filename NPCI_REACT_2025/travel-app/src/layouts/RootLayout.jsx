import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Table from '../components/Table';
import StateDemo from '../components/StateDemo';
import PaymentDetails from '../components/PaymentDetails';
import ProfilePage from '../components/ProfilePage';
import Login from '../components/Login';

const RootLayout = () => {
  let user = { username: 'Jayesh', password: 'abc@123' };
  let linkList = [
    { linkRef: '/home', linkText: 'Home' },
    { linkRef: '/about', linkText: 'About' },
    { linkRef: '/products', linkText: 'Product' },
  ];
  let columns = ['Name', 'Email', 'Location'];

  let data = [
      { Name: 'Junaid', Email: 'jayesh@gmail.com', Location: 'Thane'},
      { Name: 'Wazir', Email: 'vedant@gmail.com', Location: 'Latur'},
      { Name: 'Waseem', Email: 'vinayak@gmail.com', Location: 'Solapur'},
      { Name: 'Usmaan', Email: 'usp@gmail.com', Location: 'Pune' },
      { Name: 'Adil', Email: 'aditya@gmail.com', Location: 'Pune'},
      { Name: 'Kaasim', Email: 'kartikeya@gmail.com', Location: 'Lucknow'},
      { Name: 'Chiraguddin', Email: 'chirag@gmail.com', Location: 'Mumbai'},
      { Name: 'Abraar', Email: 'avishkar@gmail.com', Location: 'Latur' }
  ];

  return (
    <>
      <Header user={user} />
      <Navigation linkList={linkList} />
      <main>
        <Table columns={columns} data={data} />
          </main>
      <StateDemo />
      <PaymentDetails />
      {/* <ProfilePage /> */}
    </>
  );
};

export default RootLayout;
