import { Button, TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import AnswerEdit from '../layout/component/AnswerEdit';
import LeftBar from '../layout/component/LeftBar';
import RightBar from '../layout/component/RightBar';
import useEngine from '../context/pages/EngineContext';
function EnginePage() {
  const {state, questions, setState, setQuestions} = useEngine();

  const w1 = "256px";
  const w2 = "calc(100vw - 570px)";
  const w3 = "314px";

  const [currentQuestionInfo, setCurrentQuestionInfo] = useState({
    title: "",
  })

  const [currentQuestionAnswers, setCurrentQuestionAnswers] = useState([
    {  value:'',
      label: "Add Answer 1",
      color: "#D01937",
      correct: false
    },
    { value:'',
      label: "Add Answer 2",
      color: "#1368CE",
      correct: false
    },
    { value:'',
      label: "Add Answer 3",
      color: "#D89E00",
      correct: false
    },
    { value:'',
      label: "Add Answer 4",
      color: "#26890C",
      correct: false
    }
  ])
  const ChangeTitle = (e)=>{
    setCurrentQuestionInfo({[e.target.name]:e.target.value})
    console.log(currentQuestionInfo)
  }
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
      return [...pr, { label: "Add Answer", color: "#0AA3A3", correct: false }, { label: "Add Answer", color: "#864CBF", correct: false }]
    })
  }, [currentQuestionAnswers])

  const AddQuestion = (e)=>{
    e.preventDefault();
    setQuestions(pr=>{
      return [...pr,{currentQuestionInfo,currentQuestionAnswers}]
    })
    setCurrentQuestionAnswers([ {
      value:'',
      label: "Add Answer 1",
      color: "#D01937",
      correct: false
    },
    { value:'',
      label: "Add Answer 2",
      color: "#1368CE",
      correct: false
    },
    { value:'',
      label: "Add Answer 3",
      color: "#D89E00",
      correct: false
    },
    { value:'',
      label: "Add Answer 4",
      color: "#26890C",
      correct: false
    }])
    setCurrentQuestionInfo({
      title:''
    })
  }

  const EditQuestion = (q,i)=>{
    console.log(q)
    setCurrentQuestionAnswers(()=>{
    return q.currentQuestionAnswers
    })
    setCurrentQuestionInfo(()=>{
      return q.currentQuestionInfo
    })
  }
  return (
    <div className="d-flex j-c-between bg0" style={{height: "calc(100vh - var(--height-4))", overflowY: "auto"}}>
      <LeftBar width={w1} AddQuestion={AddQuestion} EditQuestion={EditQuestion} />
      <div style={{width: w2, }}>
        <div className="sp-1 w-f">
          <TextField placeholder="Start typing your question..." name='title' value={currentQuestionInfo.title} onChange={ChangeTitle} fullWidth />
        </div>
        {/* <div className="sp-1 w-f d-flex a-i-center j-c-center">
            <div style={{width: "34vw", height: 300}} className="bg-1">
              something for media
            </div>
        </div> */}
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