import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebookF,FaGoogle,FaTwitter,FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";

export default function App() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted foot'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom '>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div className='ll'>
          <a href='' className='me-4 text-reset '>
          <FaFacebookF />
          </a>
          <a href='' className='me-4 text-reset icons'>
          <FaTwitter />
          </a>
          <a href='' className='me-4 text-reset icons'>
          <FaGoogle />
          </a>
          <a href='' className='me-4 text-reset icons'>
          <FaInstagram />
          </a>
          <a href='' className='me-4 text-reset icons'>
          <FaLinkedin />
          </a>
          <a href='' className='me-4 text-reset icons'>
          <FaGithub />

          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                MedWise
              </h6>
              <p>
              Say goodbye to long waiting times and endless phone calls – with just a few clicks, you can schedule appointments with top-notch healthcare providers in your area.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Online apoointment booking
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Rating of Doctors
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Health Status
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                 Your Profile
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Sign Out
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Appointments
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
                New York, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                birlaani@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
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
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MedWise.com
        </a>
      </div>
    </MDBFooter>
  );
}