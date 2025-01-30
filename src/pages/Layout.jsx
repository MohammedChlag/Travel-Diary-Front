import React, { useEffect } from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import useAuth from '../hooks/useAuth.js'
import Navbar from '../components/navbar/Navbar.jsx'

const Layout = () => {
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type')
  const message = searchParams.get('message')

  const { currentUser } = useAuth()
  if (currentUser) {
    console.log('Current User', { currentUser })
  } else {
    console.log('No Current User')
  }

  useEffect(() => {
    if (type) {
      if (type === 'error') {
        toast.error(message)
      } else if (type === 'success') {
        toast.success(message)
      } else if (type === 'warning') {
        toast.warning(message)
      } else if (type === 'info') {
        toast.info(message)
      } else {
        toast(message)
      }
    }
  }, [type, message])
  return (
    <>
      <Navbar />
      <main>
        <h1>Layout</h1>
        <Outlet />
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
        />
      </main>
    </>
  )
}

export default Layout
