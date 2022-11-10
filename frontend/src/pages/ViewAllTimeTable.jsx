import React from 'react';
import { useState, useEffect } from "react";
import Slidebar from '../components/Slidebar';
import Header from "../components/Header";
import "../assets/addtimetable.css";


export default function ViewAllTimeTable() {

  const [timetdata, setTimetdata] = useState([]);

  useEffect(() => {
    const getTimetable = async () => {
      const res = await fetch(
        "http://127.0.0.1:8090/timetable/"
      );

      const data = await res.json();
      console.log(data);
      setTimetdata(data);
    };
    getTimetable();
  }, []);

  
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

           

            <table class="table tb">
              <thead>
                <tr>
                  <th scope="col">Route No</th>
                  <th scope="col">Bus No</th>
                  <th scope="col">Start Location</th>
                  <th scope="col">End Location</th>
                  <th scope="col">Start Time</th>
                  <th scope="col">End Time</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
               
              {timetdata.map((timetdata) => (

                <tr>
                  <td>{timetdata.route_no}</td>
                  <td>{timetdata.bus_no}</td>
                  <td>{timetdata.start_location}</td>
                  <td>{timetdata.end_location}</td>
                  <td>{timetdata.start_time}</td>
                  <td>{timetdata.end_time}</td>
                  <td>
                    <button class='btn btn-primary m-1'>Update</button>
                    <button class='btn btn-danger m-1'>Remove</button>
                    </td>
                </tr>

                  ))}
                
              </tbody>
            </table>

            </div>

            

            </div>

            </div>
    </div>
    </div>
  )
}
