import './App.css'
import About from './components/About'
import FinanceDetails from './components/FinanceDetails'
import Login from './components/Login'
import NotFound from './components/NotFound'
import PaymentDetails from './components/PaymentDetails'
import PrivateRoute from './components/PrivateRoute'
import ProfilePage from './components/ProfilePage'
import SalesDetails from './components/SalesDetails'
import StaffDetails from './components/StaffDetails'
import DashBoardLayout from './layouts/DashBoardLayout'
import HomeLayout from './layouts/HomeLayout'
import RootLayout from './layouts/RootLayout'
import Image from './ui/image'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

function App() {

  const myrouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Login />}></Route>
        <Route path='/home' element={<Login />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/payments' element={<PaymentDetails />}></Route>
        <Route path='/finance' element={<PrivateRoute><FinanceDetails /></PrivateRoute>}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
        <Route path='/profile/:id' element={<ProfilePage />}></Route>
        <Route path='/dashboard' element={<DashBoardLayout />}>
          <Route path='sales' element={<SalesDetails />}></Route>
          <Route path='staff' element={<StaffDetails />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={myrouter} />
      {/* <RootLayout></RootLayout>
      <HomeLayout></HomeLayout> */}
    </>
  )
}

export default App
