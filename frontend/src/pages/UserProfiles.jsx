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
import Viewtravelhistmodal from "../components/modals/Viewtravelhistmodal";
import Reviewmodal from "../components/modals/Reviewmodal";

//Implementation of the page to display travel history of the user

export default function UserProfiles() {
  const [userd, setUserd] = useState([]);

  useEffect(() => {
    const getUserProfiles = async () => {
      const res = await fetch(
        `http://127.0.0.1:8090/user/`
      );

      const data = await res.json();
      console.log(data);
      setUserd(data);
    };
    getUserProfiles();
  }, []);

  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <MDBContainer fluid className="p-5">
        <h2>User Profiles</h2>
        <br />
        <table class="table">
          <thead class="table-dark">
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Mobile No</td>
              <td>NIC No</td>
              <td>Credit Amount</td>
              <td>Join Date</td>
            </tr>
          </thead>
          <tbody>
            {userd.map((userd) => (
              <tr key={userd._id}>
                <td>{userd.name}</td>
                <td>{userd.email_address}</td>
                <td>{userd.mobile}</td>
                <td>{userd.nic}</td>
                <td>{userd.credit_amount}</td>
                <td>{userd.createdAt.toString().substring(0, 10)}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </MDBContainer>
      <Footer />
    </div>
  );
}
