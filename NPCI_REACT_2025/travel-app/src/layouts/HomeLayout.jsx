import React from 'react'
import Login from '../components/Login'
import AddPayment from '../components/AddPayment'

const HomeLayout = () => {
  return (
      <div>
          <Login />
          {/* <AddPayment /> */}
          <button onClick={()=> {sessionStorage.removeItem('currentuser')}}>Clear session storage</button>
    </div>
  )
}

export default HomeLayout