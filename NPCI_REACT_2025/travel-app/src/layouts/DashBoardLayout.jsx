import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const DashBoardLayout = () => {
    const navigate = useNavigate();
  return (
      <div>
          <button onClick={()=> navigate('sales')}>Sales</button>
          <button onClick={() => navigate('staff')}>Staff</button>
          <Outlet></Outlet>
          </div>
  )
}

export default DashBoardLayout