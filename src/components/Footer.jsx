import React from 'react'
import "../styles/Footer.css"
import { LocationOn, LocalPhone, Email } from "@mui/icons-material"
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
function Footer() {
  return (

<MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                DREAM <span style={{color:"RED"}}>HOUSE</span>
              </h6>
              <p>
               dream house is a group of companies headquartered in Mumbai Established in 1868, it is India's largest conglomerate, with products and services in over 150 countries, and operations in 100 countries across six continents
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  home rent
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  ploat rent
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  sails
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  realestate
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                dreamhouse@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91  962345670 
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href=''>
        dreamhouse.com
        </a>
      </div>
    </MDBFooter>

    // <div className="footer">
    //   <div className="footer_left">
    //     <a href="/"><img src=" https://www.pngmart.com/files/7/Real-Estate-PNG-Transparent-HD-Photo.png" width={'100px'} alt="logo" /></a>
    //   </div>

    //   <div className="footer_center">
    //     <h3>Useful Links</h3>
    //     <ul>
    //       <li>About Us</li>
    //       <li>Terms and Conditions</li>
    //       <li>Return and Refund Policy</li>
    //     </ul>
    //   </div>

    //   <div className="footer_right">
    //     <h3>Contact</h3>
    //     <div className="footer_right_info">
    //       <LocalPhone />
    //       <p>+1 234 567 890</p>
    //     </div>
    //     <div className="footer_right_info">
    //       <Email />
    //       <p>dreamnest@support.com</p>
    //     </div>
    //     <img src="/assets/payment.png" alt="payment" />
    //   </div>
    // </div>
  )
}

export default Footer