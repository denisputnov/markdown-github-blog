import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

interface ILayoutProps {
  children: React.ReactElement | null
}

function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default Layout