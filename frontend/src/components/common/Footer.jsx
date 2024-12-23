import React from 'react'

const Footer = () => {
  return (
<div className="footer-four position-relative z-1">
  <div className="container container-large">
    <div className="bg-wrapper position-relative z-1">
      <div className="row">
        <div className="col-xxl-3 col-lg-4 mb-60">
          <div className="footer-intro">
            <div className="logo mb-20">
              <a href="index.html">
                <img src="images/logo/logo_06.svg" alt />
              </a>
            </div> 
            {/* logo */}
            <p className="mb-30 xs-mb-20">11910 Clyde Rapid Suite 210, Willyand, Virginia, United States</p>
            <a href="#" className="email tran3s mb-60 md-mb-30">homyreal@demo.com</a>
            <ul className="style-none d-flex align-items-center social-icon">
              <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fa-brands fa-twitter" /></a></li>
              <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 ms-auto mb-30">
          <div className="footer-nav ps-xl-5">
            <h5 className="footer-title">Links</h5>
            <ul className="footer-nav-link style-none">
              <li><a href="index.html">Home</a></li>
              <li><a href="dashboard/membership.html" target="_blank">Membership</a></li>
              <li><a href="about_us_01.html">About Company</a></li>
              <li><a href="blog_01.html">Blog</a></li>
              <li><a href="blog_02.html">Explore Careers</a></li>
              <li><a href="pricing_02.html">Pricing</a></li>
              <li><a href="dashboard/dashboard-index.html" target="_blank">Dashboard</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-4 mb-30">
          <div className="footer-nav">
            <h5 className="footer-title">Legal</h5>
            <ul className="footer-nav-link style-none">
              <li><a href="faq.html">Terms &amp; conditions</a></li>
              <li><a href="faq.html">Cookie</a></li>
              <li><a href="faq.html">Privacy policy</a></li>
              <li><a href="faq.html">Faq’s</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-sm-4 mb-30">
          <div className="footer-nav">
            <h5 className="footer-title">New Listing</h5>
            <ul className="footer-nav-link style-none">
              <li><a href="listing_01.html">​Buy Apartments</a></li>
              <li><a href="listing_02.html">Buy Condos</a></li>
              <li><a href="listing_03.html">Rent Houses</a></li>
              <li><a href="listing_04.html">Rent Industrial</a></li>
              <li><a href="listing_05.html">Buy Villas</a></li>
              <li><a href="listing_06.html">Rent Office</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* /.bg-wrapper */}
    <div className="bottom-footer">
      <p className="m0 text-center fs-16">Copyright @2024 Homy inc.</p>
    </div>
  </div>
  <img src="images/assets/ils_06.svg" alt className="lazy-img shapes shape_01" style={{}} />
</div>

  )
}

export default Footer