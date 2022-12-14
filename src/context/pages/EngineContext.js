import { createContext, useContext, useEffect, useState } from "react";
import useRichFetch from "../../hooks/useRichFetch";
import EngineLayout from "../../layout/page/EngineLayout";

const engineContext = createContext();

export const EngineContextProvider = ({children, application}) => {
  const [state, setState] = useState([]);
  const [questions, setQuestions] = useState([]);

  return (
    <engineContext.Provider value={{ state, questions,setState,setQuestions }}>
      <EngineLayout>
        {children}
      </EngineLayout>
    </engineContext.Provider>
  )
}

export default function useEngine () {
  return useContext(engineContext);
}