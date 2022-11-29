import React from 'react';
import { Button, IconButton, TextField, FormControlLabel, Checkbox } from '@mui/material';

function AnswerEdit({ answer, index, ChangeAnswerByIndex, RemoveAnswerByIndex }) {

  const handleChangeString = (e) => {
    ChangeAnswerByIndex(index, { ...answer, [e.target.name]: e.target.value })
  }


  return (
        <div div style={{width: "46%", height: "100%", boxShadow: "1px 1px 6.9px 0.14px rgba(0,0,0,0.14)"}} className="bg-1 d-flex j-c-between m-3">
          <div className="d-flex a-i-center j-c-center f-col" style={{background: answer.color, width: 34}}>
            <IconButton color={"primary"}>I</IconButton>
            <IconButton color={"primary"} onClick={() => RemoveAnswerByIndex(index)}>R</IconButton>
          </div>
          <div className="d-flex f-col a-i-center j-c- sp-1" style={{width: "calc(100% - 23px)"}}>
            <TextField variant="standard" name={"label"} value={answer.label} fullWidth placeholder={answer.label + " " + index} onChange={handleChangeString} />
            <div className="d-flex a-i-center j-c-between w-f">
              <input type="color" name={"color"} style={{width: "50%"}} value={answer.color} onChange={handleChangeString} />
              <FormControlLabel
                label="Correct"
                control={
                  <Checkbox
                    value=""
                    checked={true}
                    onChange={() => {

                    }}
                    color="primary"
                  />
                }
              />
            </div>
          </div>
        </div>
  );
}

export default AnswerEdit;