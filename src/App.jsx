import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


function App() {


  return (
    <>
      <Navbar/>
      <div className='min-h-[calc(100vh-470px)]'>
         <Outlet/>
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default App
