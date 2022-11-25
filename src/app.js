import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import './assets/css/app.css';
import './assets/css/index.css';
import './assets/css/lib.css';
import { ContextProvider } from "./context/main";
import config from "./data/config";
import Button from '@mui/material/Button'
import MainLayout from "./layout/page/MainLayout";
import useMain from "./context/main"
import { SolpageContextProvider } from "./context/pages/SolpageContext";
import Solpage from "./pages/primary/Solpage";

const Lala = () => <div style={{minHeight: "2000px"}}>Admin something 
<Button variant="contained" color="primary" style={{textTransform: "none"}}>
  Save
</Button> 

</div>

function App() {
  const { gstate } = useMain();

  console.log(gstate)

  const obj = useMemo(() => { return {}}, [])


  return (
      <Routes>
        {
          gstate.applications.map((application, aindex) => {
            return (
              <Route path={application.path} key={aindex}>
                {
                  application.pages.map((page, pindex) => {
                    return (
                      <Route path={page.path} key={pindex} element={
                        <MainLayout><SolpageContextProvider application={application} page_prop={page}><Solpage /></SolpageContextProvider></MainLayout>
                      } />
                    )
                  })
                }
              </Route>
            )
          })
        }
        {/* <Route path={"do.admin"}>
          <Route index element={<div>Admin</div>} />
          <Route path={"something"} element={<MainLayout hello={"ohhhe"}>
            <SolpageContextProvider pagename={"page something"} nav={"/do.admin/wow"} objec={obj}><Solpage /></SolpageContextProvider>
          </MainLayout>} />
          <Route path={"wow"} element={<MainLayout hello={"ohhhe"}>
            <SolpageContextProvider pagename={"page wow"} nav={"/do.admin/something"} objec={obj}><Solpage /></SolpageContextProvider>
          </MainLayout>} />
        </Route> */}
        <Route path={"do.page"}>
          <Route index element={<div>Admin</div>} />
          <Route path={"something"} element={<div>Admin something</div>} />
        </Route>
        <Route path={"do.public"}>
          <Route index element={<div>Admin</div>} />
          <Route path={"something"} element={<div>Admin something</div>} />
        </Route>
        <Route path={"/*"} element={<div>global not found</div>} /> 
      </Routes>
  );
}

export default App;