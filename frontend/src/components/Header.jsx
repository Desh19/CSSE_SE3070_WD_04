import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import "../assets/style.css";
import {Link} from 'react-router-dom';

//Implementation of the footer component

export default function Header() {
  return (


      <div>
        <nav class="navbar navbar-expand-lg  navbar fixed-top">
        <div class="container-fluid">
        {localStorage.getItem("accesstoken") ? (
            <a><Link className="navbar-brand bar" aria-current="page" to="/homepage">SL PUBLIC TRANSPORT</Link></a>
            ) : (
              <a><Link className="navbar-brand bar" aria-current="page" to="/">SL PUBLIC TRANSPORT</Link></a>
            )}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="d-flex justify-content-end" id="navbarSupportedContent">

            {localStorage.getItem("accesstoken") ? (
              <MDBBtn href="/logout" className="btn-secondary">
                Logout
              </MDBBtn>
            ) : (
              <>
                <MDBBtn href="/register" className="btn-secondary me-2">
                  Register
                </MDBBtn>
                <MDBBtn href="/login" className="btn-secondary">
                  Login
                </MDBBtn>
              </>
            )}

            
            </div>
        </div>
        </nav>
    </div>

  );
}
