import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import useMain from '../../context/main';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router';

const MainLayout = ({ children }) => {
  const { gstate } = useMain();
  const n = useNavigate()
  const wd1 = "300px"
  const wdt3 = "56px"
  const wd2 = "calc(100vw - 356px)"

  return (
    <div className={"main-layout"}>
      <Header />
      <div className={"main-layout-in"}>
        <aside style={{width: wd1}}>
          <div className={"w-f d-flex f-col"}>
          {gstate.applications[0].pages.map((p, i) => {
            return <Button key={i} variant="text" color="primary" onClick={() => n(`/${gstate.applications[0].path}/${p.path}`)}>
              {p.label}
            </Button>
          })}
          </div>
        </aside>
        <main style={{width: wd2}}> {children} </main>
        <aside style={{width: wdt3}}>one</aside>
      </div>
    </div>
  );
};

export default MainLayout;


MainLayout.propTypes = {
  children: PropTypes.element.isRequired
};