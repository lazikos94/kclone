import { Button } from '@mui/material';
import React from 'react';
import useEngine from '../../context/pages/EngineContext';
function LeftBar({width, AddQuestion,EditQuestion}) {
  const {state, questions, setState, setQuestions} = useEngine();



  return (
    <div className="d-flex a-i-center  f-col sp-4 bg-1" style={{width: "300px", height: "100%",overflow:'auto', position: "sticky", top: 0, borderRight: "1px solid var(--background-5)", boxShadow: "0px 1.4px 6.9px 0.14px rgba(0,0,0,0.14)"}}>
      <Button type='submit' onClick={AddQuestion} variant='outlined'>Add Question</Button>
      {questions.length  === 0 ? <div >No questions</div>:
        questions.map((q, i) => 
        <div key={i} onClick={()=>EditQuestion(q,i)}  style={{backgroundColor:"#EAF4FC",width:'60%',height:'auto',maxHeight:'20%',margin:'5px',overflow:'auto'}}>
          <span>{i}</span>
           <span>{q.currentQuestionInfo.title}</span>
          {/*<div className='d-flex'> 
         { q.currentQuestionAnswers.map((q,i)=>
          <span key={i}>{i}. {q.label}</span>
         )}</div> */}
        </div>)
      }
    </div>
  );
}

export default LeftBar;