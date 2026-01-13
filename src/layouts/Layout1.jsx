import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'

function Layout1() {
  return (
    <>
      
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout1
