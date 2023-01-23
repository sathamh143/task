import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Form from 'react-bootstrap/Form';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function SelectLabels() {
  const [form,setForm]= useState({
    name:"",
    email :"",
    password : "",
    device : "",
  })

 const onChangeName = (event) =>{
  setForm((currentState) => {
    return {...currentState, name : event.target.value}
  })
 }

 const onChangeEmail = (event) =>{
  setForm((currentState) => {
    return {...currentState, email : event.target.value}
  })
 }

 const onChangePassword = (event) =>{
  setForm((currentState) => {
    return {...currentState, password : event.target.value}
  })
 }
 const onChangeDevice = (event) =>{
  setForm((currentState) => {
    return {...currentState, device : event.target.value}
  })
 }
  
    const onSubmit = (event) => {
    event.preventDefault();
    alert(
      JSON.stringify(form,null,4)
    )
   }
  return (
    <>
    <div>    
    <Container maxWidth="sm" className='border m-6 mt-4'>
      <Form  onSubmit={onSubmit} >
      <FormControl sx={{ m: 2, minWidth : 250, }} >
        <InputLabel id="demo-simple-select-helper-label">Device</InputLabel>
        <Select
          value={form.device}
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Age"
          onChange={onChangeDevice }>
          <MenuItem value={"Mobile"}>Mobile</MenuItem>
          <MenuItem value={"Keyboard"}>Keyboard</MenuItem>
          <MenuItem value={"Laptop"}>Laptop</MenuItem>
          <MenuItem value={"Mouse"}>Mouse</MenuItem>
          <MenuItem value={"CPU"}>CPU</MenuItem>
        </Select>
            <TextField 
            id="outlined-basic-" 
            label="Enter Your Name"
             variant="outlined"
             onChange={ onChangeName }
             value={form.name}
              className='m-2-p-1' />
            <TextField 
            id="outlined-basic" 
            label="Enter Your Email"
            onChange={ onChangeEmail  }
            value={form.email}
             variant="outlined" 
             className='m-2-p-1' />
            <TextField 
            id="outlined-password-input"
             label="Enter Your Password"
             value ={form.password}
             onChange={ onChangePassword }
              type="password"
               autoComplete="current-password"/>
        <Button
         variant="contained" 
         size="medium" 
         type='submit'
         className='m-2'>
          Submit
        </Button>
     </FormControl>
     </Form>
    </Container>
    </div>
    </>
  );
}
