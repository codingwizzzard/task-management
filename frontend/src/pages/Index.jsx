import React from 'react'

const Index = () => {
  return (
   <div className="property-listing-one bg-pink-two mt-150 xl-mt-120 pt-140 xl-pt-120 lg-pt-80 pb-180 xl-pb-120 lg-pb-100">
  <div className="container">
    <div className="position-relative">
      <div className="title-one text-center text-lg-start mb-45 xl-mb-30 lg-mb-20 wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
        <h3><span>Tasks <img src="images/shape/title_shape_03.svg" alt className="lazy-img" style={{}} /></span></h3>
        <p className="fs-22 mt-xs">New Tasks &amp; will be available soon.</p>
      </div>
      {/* /.title-one */}
      <div className="row gx-xxl-5">
        <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
          <div className="listing-card-one border-25 h-100 w-100">
            <div className="img-gallery p-15">
              <div className="position-relative border-25 overflow-hidden">
                <div className="tag border-25">FOR RENT</div>
                <div id="carousel1" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel1" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carousel1" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carousel1" data-bs-slide-to={2} aria-label="Slide 3" />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                    </div>
                    <div className="carousel-item" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                    </div>
                    <div className="carousel-item" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.img-gallery */}
            <div className="property-info p-25">
              <a href="listing_details_01.html" className="title tran3s">Blueberry villa</a>
              <div className="address">Mirpur 10, Stadium dhaka 1208</div>
              <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_04.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">1370 sqft</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_05.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">03 bed</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_06.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">02 bath</span>
                </li>
              </ul>
              <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                <strong className="price fw-500 color-dark">$3,280/<sub>m</sub></strong>
                <a href="listing_details_01.html" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right" /></a>
              </div>
            </div>
            {/* /.property-info */}
          </div>
          {/* /.listing-card-one */}
        </div>
        <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
          <div className="listing-card-one border-25 h-100 w-100">
            <div className="img-gallery p-15">
              <div className="position-relative border-25 overflow-hidden">
                <div className="tag sale border-25">FOR SELL</div>
                <div id="carousel2" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel2" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carousel2" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carousel2" data-bs-slide-to={2} aria-label="Slide 3" />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_02.jpg" className="w-100" alt="..." /></a>
                    </div>
                    <div className="carousel-item" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_03.jpg" className="w-100" alt="..." /></a>
                    </div>
                    <div className="carousel-item" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.img-gallery */}
            <div className="property-info p-25">
              <a href="listing_details_01.html" className="title tran3s">White House villa</a>
              <div className="address">Muza link road, ca, usa</div>
              <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_04.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">1270 sqft</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_05.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">02 bed</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_06.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">02 bath</span>
                </li>
              </ul>
              <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                <strong className="price fw-500 color-dark">$28,100.00</strong>
                <a href="listing_details_01.html" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right" /></a>
              </div>
            </div>
            {/* /.property-info */}
          </div>
          {/* /.listing-card-one */}
        </div>
        <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
          <div className="listing-card-one border-25 h-100 w-100">
            <div className="img-gallery p-15">
              <div className="position-relative border-25 overflow-hidden">
                <div className="tag sale border-25">FOR SELL</div>
                <div id="carousel3" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel3" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carousel3" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carousel3" data-bs-slide-to={2} aria-label="Slide 3" />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_03.jpg" className="w-100" alt="..." /></a>
                    </div>
                    <div className="carousel-item" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_02.jpg" className="w-100" alt="..." /></a>
                    </div>
                    <div className="carousel-item" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.img-gallery */}
            <div className="property-info p-25">
              <a href="listing_details_01.html" className="title tran3s">Luxury villa in Dal lake.</a>
              <div className="address">Mirpur 10, Stadium</div>
              <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_04.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">1270 sqft</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_05.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">02 bed</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_06.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">02 bath</span>
                </li>
              </ul>
              <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                <strong className="price fw-500 color-dark">$42,500.00</strong>
                <a href="listing_details_01.html" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right" /></a>
              </div>
            </div>
            {/* /.property-info */}
          </div>
          {/* /.listing-card-one */}
        </div>
        <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>
          <div className="listing-card-one border-25 h-100 w-100">
            <div className="img-gallery p-15">
              <div className="position-relative border-25 overflow-hidden">
                <div className="tag border-25">FOR RENT</div>
                <div id="carousel4" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel4" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carousel4" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carousel4" data-bs-slide-to={2} aria-label="Slide 3" />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_04.jpg" className="w-100" alt="..." /></a>
                    </div>
                    <div className="carousel-item" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                    </div>
                    <div className="carousel-item" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_02.jpg" className="w-100" alt="..." /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.img-gallery */}
            <div className="property-info p-25">
              <a href="listing_details_01.html" className="title tran3s">Blueberry villa</a>
              <div className="address">Mirpur 10, Stadium dhaka 1208</div>
              <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_04.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">1370 sqft</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_05.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">03 bed</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_06.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">02 bath</span>
                </li>
              </ul>
              <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                <strong className="price fw-500 color-dark">$3,280/<sub>m</sub></strong>
                <a href="listing_details_01.html" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right" /></a>
              </div>
            </div>
            {/* /.property-info */}
          </div>
          {/* /.listing-card-one */}
        </div>
        <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay="0.1s" style={{visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp'}}>
          <div className="listing-card-one border-25 h-100 w-100">
            <div className="img-gallery p-15">
              <div className="position-relative border-25 overflow-hidden">
                <div className="tag sale border-25">FOR SELL</div>
                <div id="carousel5" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel5" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carousel5" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carousel5" data-bs-slide-to={2} aria-label="Slide 3" />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_05.jpg" className="w-100" alt="..." /></a>
                    </div>
                    <div className="carousel-item" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_03.jpg" className="w-100" alt="..." /></a>
                    </div>
                    <div className="carousel-item" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.img-gallery */}
            <div className="property-info p-25">
              <a href="listing_details_01.html" className="title tran3s">White House villa</a>
              <div className="address">Muza link road, ca, usa</div>
              <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_04.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">1270 sqft</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_05.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">02 bed</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_06.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">02 bath</span>
                </li>
              </ul>
              <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                <strong className="price fw-500 color-dark">$28,100.00</strong>
                <a href="listing_details_01.html" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right" /></a>
              </div>
            </div>
            {/* /.property-info */}
          </div>
          {/* /.listing-card-one */}
        </div>
        <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay="0.2s" style={{visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp'}}>
          <div className="listing-card-one border-25 h-100 w-100">
            <div className="img-gallery p-15">
              <div className="position-relative border-25 overflow-hidden">
                <div className="tag border-25">FOR RENT</div>
                <div id="carousel6" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel6" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carousel6" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carousel6" data-bs-slide-to={2} aria-label="Slide 3" />
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_06.jpg" className="w-100" alt="..." /></a>
                    </div>
                    <div className="carousel-item" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_04.jpg" className="w-100" alt="..." /></a>
                    </div>
                    <div className="carousel-item" data-bs-interval={1000000}>
                      <a href="listing_details_01.html" className="d-block"><img src="images/listing/img_01.jpg" className="w-100" alt="..." /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.img-gallery */}
            <div className="property-info p-25">
              <a href="listing_details_01.html" className="title tran3s">Luxury villa in Dal lake.</a>
              <div className="address">Mirpur 10, Stadium</div>
              <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_04.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">1270 sqft</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_05.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">02 bed</span>
                </li>
                <li className="d-flex align-items-center">
                  <img src="images/icon/icon_06.svg" alt className="lazy-img icon me-2" style={{}} />
                  <span className="fs-16">02 bath</span>
                </li>
              </ul>
              <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                <strong className="price fw-500 color-dark">$3,280/<sub>m</sub></strong>
                <a href="listing_details_01.html" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right" /></a>
              </div>
            </div>
            {/* /.property-info */}
          </div>
          {/* /.listing-card-one */}
        </div>
      </div>
      <div className="section-btn text-center md-mt-60">
        <a href="listing_01.html" className="btn-five">Explore All</a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Index