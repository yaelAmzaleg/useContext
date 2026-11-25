import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AppContext from './AppContext'
import UserName from './components/UserName'
import UserProfile from './components/UserProfile'
import ThemeContext from "./ThemeContext";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
function App() {
  const name="Alice"
  const UserGreeting="Y32498"
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <>
    {
    /* <AppContext.Provider value={{name,UserGreeting}}>
    <UserName/>
      <UserProfile/>
    </AppContext.Provider> */}
<ThemeContext.Provider value={{ theme, toggleTheme }}>
      <section className={`app ${theme}`}>
        <Header />
        <Content />
        <Footer />
      </section>
    </ThemeContext.Provider>
    </>
  )
}
export default App
