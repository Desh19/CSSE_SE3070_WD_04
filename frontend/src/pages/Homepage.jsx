import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {Link} from 'react-router-dom';
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

//Implementation of the landing page after login

export default function Homepage() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />

      <div class="row homemain">

        <div class="col">

      <div class="slider">
      <div class="slides">

        <input type="radio" name="radio-btn" id="radio1"/>
        <input type="radio" name="radio-btn" id="radio2"/>
        <input type="radio" name="radio-btn" id="radio3"/>
        <input type="radio" name="radio-btn" id="radio4"/>

        <div class="slide first">
          <img src="imageh1.jpg" alt=""/>
        </div>
        <div class="slide">
          <img src="imageh2.jpg" alt=""/>
        </div>
        <div class="slide">
          <img src="imageh3.jpg" alt=""/>
        </div>
        <div class="slide">
          <img src="imageh4.png" alt=""/>
        </div>
  
        <div class="navigation-auto">
          <div class="auto-btn1"></div>
          <div class="auto-btn2"></div>
          <div class="auto-btn3"></div>
          <div class="auto-btn4"></div>
        </div>

      </div>

      <div class="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
        <label for="radio4" class="manual-btn"></label>
      </div>

    </div>

    </div>

    <div class="col">
    <div class="about">
          <div class="main">
          <div class="about-text">
            <h1 ><span>A</span>bout <span>U</span>s</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
              It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
              The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            <button type="button">Read More</button>
          </div>
          </div>
        </div>

        </div>

        </div>

    <div className="section-containeradmin">
            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Top Up Card</h3>
                  <MDBBtn href="/credbal" className="btn btn-primary btn-lg">
                    Top Up
                  </MDBBtn>
                </div>
              </div>
            </div>
            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Time Tables</h3>
                  <Link aria-current="page" to={"/ApproveCourses"}>Click Here</Link>
                </div>
              </div>
            </div>
            <div className="sec-card">
              <div className="card-box">
                <div className="card-content">
                  <h3>Routes</h3>
                  <MDBBtn href="/qr" className="btn btn-primary btn-lg">
                    Bus Location
                  </MDBBtn>
                </div>
              </div>
            </div>
        
          </div> 
      <Footer />
    </div>
  );
}
