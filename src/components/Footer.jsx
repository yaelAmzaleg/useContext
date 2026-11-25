import { useTheme } from "../ThemeContext";
export default function Footer() {
const { theme } = useTheme();
  return (
    <footer>
      <p>Theme: {theme}</p>
    </footer>
  );
}