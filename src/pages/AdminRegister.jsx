import React, { useCallback, useState } from 'react';
import { Button, IconButton, TextField, FormControlLabel, Checkbox} from '@mui/material';
import useRegister from '../context/pages/AdminRegisterContext';
const AdminRegister = () => {
    const {state,setState} = useRegister();
    const w2 = "calc(100vw - 570px)";
    const ChangeState =(e)=>{
        setState(pr=>{
            return {...pr,[e.target.name]:e.target.value}
        })
    }

    const SubmitRegister =(e)=>{
        e.preventDefault();
        console.log(state)
    }

    return ( <div className="d-flex j-c-center a-i-start bg0" style={{height: "calc(100vh - var(--height-4))", overflowY: "auto"}}>

        <form onSubmit={SubmitRegister} className='d-flex a-i-center j-c-between f-wrap' style={{width: w2,padding:'30px',height:'50%' }}>
            <label style={{fontSize:'2rem'}}>Register</label>
            <TextField variant='standard' type='email' name={'email'} onChange={ChangeState} fullWidth placeholder='Enter Email' />
            <TextField variant='standard' name={'username'} onChange={ChangeState} fullWidth placeholder='Enter Username' />
            <TextField variant='standard' name={'password'} onChange={ChangeState} fullWidth placeholder='Enter Password' />
            <Button type='submit' variant='outlined'>Register</Button>
        </form>
       
    </div> );
}
 
export default AdminRegister;