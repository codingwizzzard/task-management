import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
  <div>
  <div className="main-page-wrapper">
    <div className="modal fade" id="searchModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-fullscreen modal-dialog-centered">
        <div className="modal-content d-flex justify-content-center">
          <form action="#">
            <input type="text" placeholder="Buy Apartments, Rent Condos, Sell Houses" />
            <button><i className="fa-light fa-arrow-right-long" /></button>
          </form>
        </div>
      </div>
    </div>
    <Header/>
    <Outlet/>
    <Footer/>
    <button className="scroll-top">
      <i className="bi bi-arrow-up-short" />
    </button>
  </div> 
</div>

  )
}

export default Layout