import React from 'react';
import useEngine from '../../context/pages/EngineContext';

function LeftBar({width}) {
  const {state, questions} = useEngine();

  return (
    <div className="sp-4 bg-1" style={{width: "300px", height: "100%", position: "sticky", top: 0, borderRight: "1px solid var(--background-5)", boxShadow: "0px 1.4px 6.9px 0.14px rgba(0,0,0,0.14)"}}>
      {questions.length  === 0 && <div>No questions</div>}
      {
        questions.map((q, i) => <div key={i}>
          {q.question}
        </div>)
      }
    </div>
  );
}

export default LeftBar;