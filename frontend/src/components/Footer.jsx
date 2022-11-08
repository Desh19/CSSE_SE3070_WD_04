import React from 'react';
import "../assets/style.css";
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';

//Implementation of the footer component

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' style={{backgroundColor:'#204051'}}>
      <div>
      
      <div class="footer">
       <div class="waves">
           <div class="wave" id="wave1"></div>
           <div class="wave" id="wave2"></div>
           <div class="wave" id="wave3"></div>
           <div class="wave" id="wave4"></div>
       </div>
       <p>2022 SL Public Transport | MULD Creation</p>
       </div> 

   </div>
        
    </MDBFooter>
  )
}
