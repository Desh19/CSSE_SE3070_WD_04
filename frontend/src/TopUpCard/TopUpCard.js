import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import './topupcard.css';


const Payment =() => {

    const [input, setInput]=useState({});
    const id = localStorage.getItem("id");
    console.log(id);
    const history = useNavigate();
    useEffect(()=>{ 
        const fetchHandler = async()=>{
            await axios.get(`http://localhost:8090/User/get/${id}`)
            .then((res)=> res.data )
            .then((data)=>setInput(data.User));
            console.log(fetchHandler)
        }
        fetchHandler()
        .then((data)=>setInput(data.User));
    },[id])

    const [fireRedirect, setFireRedirect] = useState(false);

    const [cardholdername, setCardholdername] = useState("");
    const [cardNum, setCardNum] = useState("");
    const [cardexpiryDate, setCardexpiryDate] = useState("");
    const [cvc, setCvc] = useState("");
    const [ammount, setAmmount] = useState("");
  
    const sendData = async (AccountantName)=>{
      const newForm={
      
      AccountantName: AccountantName,
      AccountantId: localStorage.getItem("id"),
      cardholdername: cardholdername,
      cardNum: cardNum,
      cardexpiryDate: cardexpiryDate,
      cvc: cvc,
      ammount: ammount,
      date: new Date().toISOString()
  
    }
    console.log(newForm)
  
    if( cardholdername==='' && cardNum === '' && cardexpiryDate === '' && cvc === '' && ammount === '') {
      swal("All Fields are empty");
  }else if(cardholdername === ''){
      swal("Card Holder Name Field is empty");
  }else if(cardNum === ''){
      swal("Card Number Field is empty");
  }else if(cardexpiryDate === ''){
      swal("Card Expire Date Field is empty");
  }else if(cvc === ''){
      swal("CVC Number Field is empty");
  }else if(ammount === ''){
    swal("Ammount Field is empty");
}
  
  else {
  
    await axios.post('http://localhost:8090/Payment/add',newForm).then(()=>{
    
      swal({
        title: "Success!",
        text: "Card Top Up Successfully",
        icon: 'success',
        timer: 2000,
        button: false,
      });
  
      // setFireRedirect(true);                                  
  }).catch((e)=>{
    alert(e);
  })
  
  }
  
    }
    
  return (
    <div>
       <Header/>
     <div class='payArea'>
        <h1>Top Up Your Crad</h1>
        <form class="row g-3">
       
        <div class="col-12">
            <label for="inputAddress" class="form-label">Account Name</label>
            <input type="text" class="form-control"  value={input.firstName+" "+ input.lastName} id="inputAddress" />
        </div>   

        <div class="col-12">
            <label for="inputAddress" class="form-label">Card Holder Name</label>
            <input type="text" class="form-control" onChange={(e) => (setCardholdername(e.target.value))} value={input.cardholdername} id="inputAddress" placeholder="Enter Name"/>
        </div>    

        <div class="col-12">
            <label for="inputAddress2" class="form-label">Card Number</label>
            <input type="text" class="form-control" onChange={(e) => (setCardNum(e.target.value))} value={input.cardNum} id="inputAddress2" placeholder="Card Number"/>
        </div>
        <div class="col-md-6">
            <label for="inputCity" class="form-label">Expiry Date</label>
            <input type="Date" class="form-control" onChange={(e) => (setCardexpiryDate(e.target.value))} value={input.cardexpiryDate} id="inputCity" placeholder="DD/MM/YY"/>
        </div>
      
        <div class="col-md-6">
            <label for="inputZip" class="form-label">CVC</label>
            <input type="text" class="form-control" onChange={(e) => (setCvc(e.target.value))} value={input.cvc} id="inputZip" placeholder="CVC"/>
        </div>
        <div class="col-12">
            <label for="inputAddress" class="form-label">Ammount</label>
            <input type="text" class="form-control" onChange={(e) => (setAmmount(e.target.value))} value={input.ammount} id="inputAddress" placeholder="Rs 0000.00" />
        </div>


       
        <div class="col-12">
            <center><button type="submit" class="btn btn-primary" onClick={() => sendData(input.AccountantName, input._id, input.cardholdername, input.cardNum, input.cardexpiryDate, input.cvc, input.cardNum, input.ammount)}><Link to ="/FirstHome" style={{textDecoration:'none', color:'white'}}>Top Up</Link></button></center>
            
        </div>
        </form>
     </div>

  </div>
  )
};
export default Payment;

