import React, { useCallback, useState } from 'react';
import { Button, IconButton, TextField, FormControlLabel, Checkbox} from '@mui/material';
import useLogin from '../context/pages/AdminLoginContext';
const AdminLogin = () => {
    const {state,setState} = useLogin();
    const w2 = "calc(100vw - 570px)";
    const ChangeState =(e)=>{
        setState(pr=>{
            return {...pr,[e.target.name]:e.target.value}
        })
    }

    const SubmitLogin =(e)=>{
        e.preventDefault();
        console.log(state)
    }

    return ( <div className="d-flex j-c-center a-i-start bg0" style={{height: "calc(100vh - var(--height-4))", overflowY: "auto"}}>

        <form onSubmit={SubmitLogin} className='d-flex a-i-center j-c-between f-wrap' style={{width: w2,padding:'30px',height:'50%' }}>
            <label style={{fontSize:'2rem'}}>Login</label>
            <TextField variant='standard' name={'email'} onChange={ChangeState} fullWidth placeholder='Enter Email' />
            <TextField variant='standard' name={'password'} onChange={ChangeState} fullWidth placeholder='Enter Password' />
            <Button type='submit' variant='outlined'>Login</Button>
        </form>
       
    </div> );
}
 
export default AdminLogin;