import React from 'react';
import Slidebar from '../components/Slidebar';
import Header from "../components/Header";
import "../assets/addroute.css";

export default function ViewAllRoute() {
  return (
    <div>
        <Header/>

    <div class="row">
            <Slidebar/>
        <div className='addrouteArea'>

            <h1>Routes</h1>
            <hr/>

            <div className='addroutecontainer'>

            <div class="RouteItem">


              <table class="table tb">
                <thead>
                  <tr>
                    <th scope="col">Route Number</th>
                    <th scope="col">Start Location</th>
                    <th scope="col">End Location</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>177</td>
                    <td>Kaduwela</td>
                    <td>Kollupitiya</td>
                    <td>
                    <button class='btn btn-primary m-1'>Update</button>
                    <button class='btn btn-danger m-1'>Remove</button>
                    </td>
                  </tr>
                  
                  
                </tbody>
              </table>

              </div>

            </div>

            </div>
    </div>
    </div>
  )
}
