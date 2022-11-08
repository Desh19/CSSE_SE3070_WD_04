import React from 'react';
import "../assets/slidebar.css";

import {NavLink} from 'react-router-dom';

export default function Slidebar() {
  return (
    <div>

        <div class="sidebar">
          <div className='slidebarArea'>
            <ul>
                <li><NavLink class="nav-link active" to={"/admin/dashboard"}>Dashboard</NavLink></li>
                <li><NavLink class="nav-link" to={"/admin/addtimetables"}>Add Time Table</NavLink></li>
                <li><NavLink class="nav-link" to={"/admin/timetables"}>Time Tables</NavLink></li>
                <li><NavLink class="nav-link" to={"/admin/addroute"}>Add Route</NavLink></li>
                <li><NavLink class="nav-link" to={"/admin/routes"}>All Route</NavLink></li>
            </ul>

            </div>

            <p className='fottertitle'>@SL Public Transport</p>

        </div>

    </div>
  )
}
