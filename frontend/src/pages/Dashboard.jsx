import React from 'react';
import "../assets/admin.css";
import Slidebar from '../components/Slidebar';
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <div>
        <Header/>

        <div class="row">
            <Slidebar/>

            <div className='dashboardArea'>

                <h1>Dashboard</h1>
                <hr/>

                <div className='Dsahboardcontainer'>

                  <div class="row">

                    <div class="col item">

                    </div>

                    <div class="col item">

                    </div>

                    <div class="col item">

                    </div>

                  </div>

                </div>

            </div>

            
        </div>



    </div>
  )
}
