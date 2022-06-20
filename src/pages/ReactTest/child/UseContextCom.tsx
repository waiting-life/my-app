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
// UseContextCom -》 ToolBar -》 ThemeButton
export default function UseContextCom() {
  return (
   <ThemeContext.Provider value={themes.dark}>
     <ToolBar/>
   </ThemeContext.Provider>
  )
}

// ThemeButton和ToolBar
function ThemeButton() {
  // useContext接受一个context对象（React.createContext 的返回值），并且返回该context对象的当前值
  // 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。
  
  // 当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，
  // 并使用最新传递给 MyContext provider 的 context value 值。
  // 即使祖先使用 React.memo 或 shouldComponentUpdate，也会在组件本身使用 useContext 时重新渲染。
  const theme = useContext(ThemeContext)
  return <button style={{background: theme.background, color: theme.foreground}}>thmeme</button>
}
function ToolBar() {
  return <ThemeButton/>
}


