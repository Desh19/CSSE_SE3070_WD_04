import React from 'react';
import Slidebar from '../Slidebar';
import Header from '../../Header/Header';
import './addtimetable.css'

export default function AddTimetable() {
  return (
    <div>
        <Header/>

    <div class="row">
            <Slidebar/>
        <div className='timetableArea'>

            <h1>Add Time Table</h1>
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="text"/></td>
                  <td><input type="text"/></td>
                  <td><input type="time"/></td>
                  <td><input type="time"/></td>
                </tr>
                
              </tbody>
            </table>

            <button class="btn btn-primary">Add Time Table</button>

            </div>

            </div>

            </div>
    </div>
    </div>
  )
}
