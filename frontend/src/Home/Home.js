import React, { Component } from 'react';
import './home.css';
import Header from '../Header/Header';

export default function Home() {

    return (
      <div>
        <Header/> 

        <div class='row homeArea'>
          <div class='col-sm-8 left'>

            <div className='item'>
            <h1>Kaduwela-Kollupitiya 177</h1>
              <div class='row prof'>
                <div class='col-sm-3 busN'>
                  <h2>ND-3246</h2>
                </div>

                <div class='col-sm-9 viewList'>
                  <button type="button" class="btn btn-success">View Passanger List</button>
                </div>

              </div>
              </div>

              <h1>Kaduwela-Kollupitiya 177</h1>
              <div class='row prof'>
                <div class='col-sm-3 busN'>
                  <h2>ND-3246</h2>
                </div>

                <div class='col-sm-9 viewList'>
                  <button type="button" class="btn btn-success">View Passanger List</button>
                </div>

              </div>

          </div>

          <div class='col-sm-4 right'>

            <input type='date' class='btn btn-success'/>
            

          </div>

          </div>

          

          


        </div>

    )
  
}