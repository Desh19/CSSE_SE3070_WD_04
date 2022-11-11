import React from 'react'
import { useState,useEffect } from "react";
import axios from "axios";
import "../assets/style.css";
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

//Implementation of the page to display generated QR code

export default function Qrcode() {
  const [qrcode, setQRCode] = useState("");
  useEffect(()=>{
   
    const getUser = async()=>{
    
    const res=  await axios.get(
        `http://127.0.0.1:8090/user/${localStorage.getItem('id')}` );
      setQRCode(res.data.data.qrcode);
    };

    getUser();
   
   
    },[]);



  return (
    <div>
      <Header/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <MDBContainer fluid className="p-3">
      <h1 class="qrtitle">QR Code</h1>
      <br/>
      <img style={{width:"300px"}} src={qrcode} />
      </MDBContainer>
      
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
  )
}
