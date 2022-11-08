import React from 'react';
import Slidebar from '../components/Slidebar';
import Header from "../components/Header";
import "../assets/addtimetable.css";


export default function ViewAllTimeTable() {
  return (
    <div>
        <Header/>

    <div class="row">
            <Slidebar/>
        <div className='timetableArea'>

            <h1>Time Tables</h1>
            <hr/>

            <div className='timetablecontainer'>

            <div className='tableItem'>

            <h3>Route : route name</h3>

            <table class="table tb">
              <thead>
                <tr>
                  <th scope="col">Start Location</th>
                  <th scope="col">End Location</th>
                  <th scope="col">Start Time</th>
                  <th scope="col">End Time</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kaduwela</td>
                  <td>Kollupitiya</td>
                  <td>8.00 am</td>
                  <td>9.30 am</td>
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
