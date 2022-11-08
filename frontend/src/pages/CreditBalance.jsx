import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
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
import Footer from "../components/Footer";
import Header from "../components/Header";
import Topupcreditmodal from "../components/modals/Topupcreditmodal";

//Implementation of the page to display topup credit 

export default function CreditBalance() {
  const [balance, setBalance] = useState("");
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(
        `http://127.0.0.1:8090/user/${localStorage.getItem("id")}`
      );
      setBalance(res.data.data.credit_amount);
    };
    getUser();
  }, []);

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MDBContainer fluid className="p-5">

        <center>

      <div class="card text-center w-51 ">
        <div class="card-header">
          <h3 class="card-title">Available Credit Balance</h3>
        </div>
        <div class="card-body text-center">

          <h5 style={{fontSize:"40px"}}>Account Credit Balance : {balance}.00 LKR</h5>
        </div>
        <div class="card-footer text-muted">
            <Topupcreditmodal
              id={localStorage.getItem("id")}
              name={localStorage.getItem("name")}
            />
        </div>
      </div>

      </center>
        
      </MDBContainer>
    
   
      <Footer />
    </div>
  );
}
