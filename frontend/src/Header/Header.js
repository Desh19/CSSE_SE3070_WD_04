import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light navbar fixed-top">
        <div class="container-fluid">
            <a><Link className="navbar-brand bar" aria-current="page" to="/">SL PUBLIC TRANSPORT</Link></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse rightheder" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                <Link className="nav-link barlink" aria-current="page" to="#">Routes</Link>
                </li>
                <li class="nav-item">
                <Link className="nav-link barlink" aria-current="page" to="#">Complains</Link>
                </li>
                <li class="nav-item">
                <Link className="nav-link barlink" aria-current="page" to="/FirstHome" onClick={localStorage.clear} >Sign out</Link>
                </li>
                
            </ul>
            
            </div>
        </div>
        </nav>
    </div>
  )
}
