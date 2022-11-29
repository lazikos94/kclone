import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/app.css";
import "./assets/css/index.css";
import "./assets/css/lib.css";
import { ContextProvider } from "./context/main";
import config from "./data/config";
import Button from "@mui/material/Button";
import MainLayout from "./layout/page/MainLayout";
import useMain from "./context/main";
import { SolpageContextProvider } from "./context/pages/SolpageContext";
import Solpage from "./pages/primary/Solpage";
import { EngineContextProvider } from "./context/pages/EngineContext";
import EnginePage from "./pages/EnginePage";


function App() {
  const { gstate } = useMain();

  return (
    <Routes>
       <Route path={"admin"} >
        <Route
          path={"questionaire-engine"}
          element={
            <MainLayout>
              <EngineContextProvider>
                <EnginePage />
              </EngineContextProvider>
            </MainLayout>
          }
        />
      </Route>
      <Route path={"/*"} element={<div>global not found</div>} />
    </Routes>
  );
}

export default App;
