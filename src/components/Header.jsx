import React from 'react';
import Typography from '@mui/material/Typography'
import { TextField, Button } from '@mui/material';

const Header = () => {
  return (
    <header className="d-flex a-i-center j-c-between bg-1 h-4 sp-5" style={{zIndex: 100, boxShadow: "1px 1px 6.9px 0.14px rgba(0, 0, 0, 0.14)", position: "relative"}}>
      <section className="d-flex a-i-center">
        <strong style={{marginRight: "1.4rem"}}>Kahoot</strong>
        <TextField name={"title"}  style={{padding: "0.1rem"}} placeholder="Enter your title" size="small" />
      </section>
      <div>
        <Button>asdsad</Button>
      </div>
    </header>
  );
};

export default Header;