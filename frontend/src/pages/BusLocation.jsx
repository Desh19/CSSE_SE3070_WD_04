import React from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon,
  } from "mdb-react-ui-kit";
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function BusLocation() {
  return (
    <div>
      <Header/>
      <br/>
      <br/>
      <br/>
      <MDBContainer fluid className="p-4">
      <h2>Bus Locations</h2>
      <br/>
        
      </MDBContainer>
      <Footer/>
    </div>
  )
}
