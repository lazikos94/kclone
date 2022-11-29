import { createContext, useContext, useState, useEffect } from "react"
import { LightStyle } from "../data/Styles";
import useRichFetch from "../hooks/useRichFetch";
import Login from "../pages/public/Login";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const mainContext = createContext();

export const ContextProvider = ({children}) => {

  const [gstate, loading, error, refech, setGstate] = useRichFetch("api/v1/server.do/build-app");

  const [theme, setTheme] = useState(LightStyle);


  if(loading) return <p>loading...</p>
  // if(!gstate && error && error.status === 401) return <div className="AppWrapper" style={createStyle(theme?.css)}><Login /></div>
  // if(!gstate) return <p>error...{JSON.stringify(error)}</p>
  // if(error) return <p>error...</p>
  return (
    <mainContext.Provider value={{ theme, gstate, setGstate }}>
      <ThemeProvider theme={createTheme(theme.mui)}>
        <div className="App bg-2" style={createStyle(theme?.css)}>{children}</div>
      </ThemeProvider>
    </mainContext.Provider>
  )
}

export default function useMain () {
  const smth = useContext(mainContext);
  return smth;
}

function createStyle(style) {
  let obj = {};
  if(!style) return {};
  for (const key in style) {
    if (Object.hasOwnProperty.call(style, key)) {
      obj[`--${key}`] = style[key];
    }
  }

  return obj;
}