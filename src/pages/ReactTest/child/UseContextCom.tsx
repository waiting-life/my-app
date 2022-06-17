import React, {useContext} from 'react'

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
const ThemeContext = React.createContext(themes.light)

export default function UseContextCom() {
  return (
   <ThemeContext.Provider value={themes.dark}>
     <ToolBar/>
   </ThemeContext.Provider>
  )
}

function ToolBar() {
  return <ThemeButton/>
}

function ThemeButton() {
  const theme = useContext(ThemeContext)
  return <button style={{background: theme.background, color: theme.foreground}}>thmeme</button>
}
