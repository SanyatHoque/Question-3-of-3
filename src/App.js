
import './App.css';
import React from 'react';
import Content from './Content'

export const ThemeContext = React.createContext();
function App() {
  const [theme,setTheme] = React.useState("dark");
  const switchTheme = () =>{
    theme ==='dark'? setTheme('light'):setTheme('dark');
  };
  return (
    <ThemeContext.Provider value={{theme:theme,switchTheme:switchTheme}}>
      <h3>Answer to Question 3 of 3</h3>
      <Content/>
    </ThemeContext.Provider>
  );
}

export default App;
