import { useTheme } from "../ThemeContext";
export default function Header() {
    const { toggleTheme } = useTheme();
  return (
    <>
      <h1>My App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}
