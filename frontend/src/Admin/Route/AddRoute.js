import React from 'react';
import Slidebar from '../Slidebar';
import Header from '../../Header/Header';
import './addroute.css'

export default function AddRoute() {
  return (
    <div>
        <Header/>

    <div class="row">
            <Slidebar/>
        <div className='addrouteArea'>

            <h1>Add Route</h1>
            <hr/>

            <div className='addroutecontainer'>

            <div className='tableItem'>

            <div className='tableItem'>

            <table class="table tb">
              <thead>
                <tr>
                    <th scope="col">Route Number</th>
                  <th scope="col">Start Location</th>
                  <th scope="col">End Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="text"/></td>
                  <td><input type="text"/></td>
                  <td><input type="text"/></td>
                </tr>
                
              </tbody>
            </table>

            </div>

            <button class="btn btn-primary">Add Route</button>

            </div>

            </div>

            </div>
    </div>
    </div>
  )
}
