import { Button, TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import AnswerEdit from '../layout/component/AnswerEdit';
import LeftBar from '../layout/component/LeftBar';
import RightBar from '../layout/component/RightBar';

function EnginePage() {

  const w1 = "256px";
  const w2 = "calc(100vw - 570px)";
  const w3 = "314px";

  const [currentQuestionInfo, setCurrentQuestionInfo] = useState({
    title: "",
    type: ""
  })

  const [currentQuestionAnswers, setCurrentQuestionAnswers] = useState([
    {
      label: "Add Answer 1",
      color: "#212121",
      correct: false
    },
    {
      label: "Add Answer 2",
      color: "#212121",
      correct: false
    },
    {
      label: "Add Answer 3",
      color: "#212121",
      correct: false
    },
    {
      label: "Add Answer 4",
      color: "#212121",
      correct: false
    }
  ])

  const ChangeAnswerByIndex = useCallback((index, newanswer) => {
    setCurrentQuestionAnswers(pr => {
      pr[index] = newanswer;
      return [...pr];
    })
  }, [])

  const RemoveAnswerByIndex = useCallback((index) => {
    if(currentQuestionAnswers.length < 5) return alert("Minimum questions 4")
    setCurrentQuestionAnswers(pr => {
      pr = pr.filter((f, ind) => ind !== index);
      return [...pr];
    })
  }, [currentQuestionAnswers]);

  const AddTwoAnswers = useCallback((e) => {
    setCurrentQuestionAnswers(pr => {
      return [...pr, { label: "Add Answer", color: "#212121", correct: false }, { label: "Add Answer", color: "#212121", correct: false }]
    })
  }, [currentQuestionAnswers])


  return (
    <div className="d-flex j-c-between bg0" style={{height: "calc(100vh - var(--height-4))", overflowY: "auto"}}>
      <LeftBar width={w1} />
      <div style={{width: w2, }}>
        <div className="sp-1 w-f">
          <TextField placeholder="Start typing your question..." fullWidth />
        </div>
        <div className="sp-1 w-f d-flex a-i-center j-c-center">
            <div style={{width: "34vw", height: 300}} className="bg-1">
              something for media
            </div>
        </div>
        <div className="sp-1 w-f d-flex a-i-center j-c-between f-wrap">
          {currentQuestionAnswers.map((a, i) => <AnswerEdit ChangeAnswerByIndex={ChangeAnswerByIndex} RemoveAnswerByIndex={RemoveAnswerByIndex} answer={a} index={i} key={i} />)}
        </div>
        <div className="sp-1 w-f d-flex a-i-center j-c-center" style={{marginBottom: "128px"}}>
          <Button style={{textTransform: "none"}} onClick={AddTwoAnswers}>Add more answers</Button>
        </div>
      </div>
      <RightBar width={w3}  />
    </div>
  );
}

export default EnginePage;