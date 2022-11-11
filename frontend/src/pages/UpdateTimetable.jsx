import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import Slidebar from '../components/Slidebar';
import Header from "../components/Header";
import "../assets/addtimetable.css";

export default function UpdateTimetable() {

    const navigate = useNavigate();

    const [timed, setTimed] = useState([]);
    const id =useParams().id;

  const [route_no, setRoute_no] = useState("");
  const [bus_no, setBus_no] = useState("");
  const [start_location, setStart_location] = useState("");
  const [end_location, setEnd_location] = useState("");
  const [start_time, setStart_time] = useState("");
  const [end_time, setEnd_time] = useState("");
//   const [error, setError] = useState("");
//   const [msg, setMsg] = useState("");
    

    useEffect(() => {
      const getTimetabled = async () => {
        const res = await fetch(
          `http://127.0.0.1:8090/timetable/${id}`
        );
        const data = await res.json();
        console.log(data);
        setTimed(data.data);
        setRoute_no(data.data.route_no);
        setBus_no(data.data.bus_no);
        setStart_location(data.data.start_location);
        setEnd_location(data.data.end_location);
        setStart_time(data.data.start_time);
        setEnd_time(data.data.end_time);
        

      };
      getTimetabled();
    }, [id]);

    const onUpdate = () => {
        const newItem = {
            route_no: route_no,
            bus_no: bus_no,
            start_location: start_location,
            end_location: end_location,
            start_time: start_time,
            end_time: end_time
        }
        axios.put(`http://127.0.0.1:8090/updatetime/${id}`, newItem).then((res) => {

            swal({
                title: "Success!",
                text: "Time Shedule Updated Successfully",
                icon: "success",
                timer: 2000,
                button: false,
              })
            navigate("/admin/timetables")
        })
    }


  return (
    <div>
        <Header/>

    <div class="row">
            <Slidebar/>
           
        <div className='timetableArea'>

            <h1>Update Time Shedule</h1>
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
                  type="text" value={route_no} onChange={(e) => {setRoute_no(e.target.value)}}
                  />
                  </td>
                  <td>
                  <input 
                  type="text" value={bus_no} onChange={(e) => {setBus_no(e.target.value)}}
                  />
                  </td>
                  <td>
                  <input 
                  type="text" value={start_location} onChange={(e) => {setStart_location(e.target.value)}}
                  />
                  </td>
                  <td>
                  <input 
                  type="text" value={end_location} onChange={(e) => {setEnd_location(e.target.value)}}
                  />
                  </td>
                  <td>
                  <input 
                  type="time" value={start_time} onChange={(e) => {setStart_time(e.target.value)}}
                  />
                  </td>
                  <td>
                  <input 
                   type="time" value={end_time} onChange={(e) => {setEnd_time(e.target.value)}}
                  />
                  </td>
                </tr>
                
              </tbody>
            </table>

            <button class="btn btn-primary" onClick={onUpdate}>Update Data</button>


            </div>

            </div>

            </div>
    </div>
    </div>
  )
}
