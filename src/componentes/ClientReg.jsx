import { Button,TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'


const ClientReg = () => {

        var [inputs,setInputs]=useState({
          "jobtitle":'',
          "jobdes":'',
          "location":'',
          "name":'',
          "phonenumber":'',
        });
      
  const inputHandler =(event) =>{
    const {name,value}=event.target
    setInputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }
  const addHandler=() =>{
    axios.post("http://localhost:3005/new",inputs)
    .then((Response)=>{
      alert("record saved")
    })
      .catch(err=>console.log(err))
    }
  return (
    <div>
       <TextField 
        label="Job Title" 
        name="jobtitle"
         variant="outlined" 
         value={inputs.jobtitle}
          onChange={inputHandler} /> <br />
       <TextField
        id="outlined-basic"
        label="job description" 
        name="jobdes" 
        variant="outlined" 
        value={inputs.jobdes} 
        onChange={inputHandler} /><br />
     <TextField 
     id="outlined-basic"
      label="Location"
       name="location"
        variant="outlined"
        value={inputs.location}
         onChange={inputHandler}/><br />
            <TextField 
     id="outlined-basic"
      label="Name"
       name="name"
        variant="outlined"
        value={inputs.name}
         onChange={inputHandler}/><br />
          <TextField 
     id="outlined-basic"
      label="Phone number"
       name="phonenumber"
        variant="outlined"
        value={inputs.phonenumber}
         onChange={inputHandler}/><br />
       
           
     



     <Button variant="contained" onClick={addHandler}>OK</Button>
    </div>
  )
}

export default ClientReg
