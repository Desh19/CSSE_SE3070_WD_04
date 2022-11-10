import React from 'react';
import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import Slidebar from '../components/Slidebar';
import Header from "../components/Header";
import "../assets/addtimetable.css";

export default function AddTimetable() {

  const [route_no, setRoute_no] = useState("");
  const [bus_no, setBus_no] = useState("");
  const [start_location, setStart_location] = useState("");
  const [end_location, setEnd_location] = useState("");
  const [start_time, setStart_time] = useState("");
  const [end_time, setEnd_time] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const TimetableData = {
    route_no,
    bus_no,
    start_location,
    end_location,
    start_time,
    end_time,
  };

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const url = "http://127.0.0.1:8090/timetable/";
      const { data: res } = await axios.post(url, TimetableData);

      swal({
        title: "Success!",
        text: "Time table added Successfully",
        icon: "success",
        timer: 2000,
        button: false,
      }).then(() => {
        setRoute_no("");
        setBus_no("");
        setStart_location("");
        setEnd_location("");
        setStart_time("");
        setEnd_time("");
        window.location.href = `/admin/timetables`;
      });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setMsg("");
        setError(error.response.data.message);
      }
    }
  };


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

            

            <table class="table tb">
              <thead>
                <tr>
                  <th scope="col">Route No</th>
                  <th scope="col">Bus No</th>
                  <th scope="col">Start Location</th>
                  <th scope="col">End Location</th>
                  <th scope="col">Start Time</th>
                  <th scope="col">End Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                  <input 
                  type="text" value={route_no} 
                  onChange={(e) => {setRoute_no(e.target.value);
                      }} 
                  />
                  </td>
                  <td>
                  <input 
                  type="text" value={bus_no} 
                  onChange={(e) => {setBus_no(e.target.value);
                      }} 
                  />
                  </td>
                  <td>
                  <input 
                  type="text" value={start_location} 
                  onChange={(e) => {setStart_location(e.target.value);
                      }} 
                  />
                  </td>
                  <td>
                  <input 
                  type="text" value={end_location} 
                  onChange={(e) => {setEnd_location(e.target.value);
                      }} 
                  />
                  </td>
                  <td>
                  <input 
                  type="time" value={start_time} 
                  onChange={(e) => {setStart_time(e.target.value);
                      }}
                  />
                  </td>
                  <td>
                  <input 
                   type="time" value={end_time} 
                   onChange={(e) => {setEnd_time(e.target.value);
                       }}
                  />
                  </td>
                </tr>
                
              </tbody>
            </table>

            <button class="btn btn-primary" onClick={sendData}>Add Time Table</button>

            {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}
                  {msg && (
                    <div className="alert alert-success" role="alert">
                      {msg}
                    </div>
                  )}

            </div>

            </div>

            </div>
    </div>
    </div>
  )
}
