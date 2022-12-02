import React, { useState } from 'react';
import Typography from '@mui/material/Typography'
import { TextField, Button } from '@mui/material';
import useEngine from '../../context/pages/EngineContext';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const {state, questions, setState, setQuestions} = useEngine();
  const [title,setTitle] = useState();

  const navigate = useNavigate();

  const RedirectLanding = ()=>{
    let path='/'
    navigate(path)
  }

  const SaveQuestionaire =(e)=>{
   e.preventDefault()
    console.log("here")

    setState(pr=>{
      return[{title,questions}]})
    console.log(state)
  }

  const ChangeTitle = (e)=>{
    setTitle({[e.target.name]:e.target.value})
    console.log(title)
  }


  return (
    <header className="d-flex a-i-center j-c-between bg-1 h-4 sp-5" style={{zIndex: 100, boxShadow: "1px 1px 6.9px 0.14px rgba(0, 0, 0, 0.14)", position: "relative"}}>
      <section className="d-flex a-i-center">
        <strong style={{marginRight: "1.4rem"}}  onClick={RedirectLanding}>Kahoot</strong>
        <TextField name={"questionaireTitle"}  style={{padding: "0.1rem"}} onChange={ChangeTitle} placeholder="Enter your title" size="small" />
      </section>
      <div>
        <Button variant="outlined" onClick={RedirectLanding}>Cancel</Button>
        <Button type='submit' onClick={SaveQuestionaire} variant="outlined">Save</Button>
      </div>
    </header>
  );
};

export default Header;