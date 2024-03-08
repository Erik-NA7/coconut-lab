import { useTheme } from "../themeContext/context";
import '../App.css';


export default function Header() {

  // Get the context values
  const { theme, changeTheme  } = useTheme();
  
  // Use the theme value to apply different colors accros elements
  const contentClassName = `${theme} App-header`;
  
  // For more complex UI these components should be splitted into different files
  
  // Stats component
  const Stats = ({ number, label }) => {
    return (
      <div>
        <p className="text-s">{ number }</p>
        <p className="text-xs text-secondary">{ label }</p>
      </div>
    )
  }

  // Theme toggle button component
  // Use the changeTheme context function on the button
  const ThemeButton = () => {
    const buttonThemeText = theme === 'light' ? 'DARK' : 'LIGHT'
    return (
      <button
        className="toggle-btn"
        onClick={changeTheme}
        data-testid="toggle"
      >
        {`TOGGLE ${buttonThemeText} MODE`}
      </button>
    )
  }

  const MainContent = () => {
    return (
      <div className="text-content">
        <p className="text-s">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
        </p>
        <p className="text-l">
          Consectetur, <span>adipisci velit</span>, sed <span>quia non</span>
        </p>
        <ThemeButton/>
      </div>
    )
  }

  return (
    <div className="App">
      <header className={contentClassName} data-testid="header">
        <div className="banner">
          <MainContent/>
          <div className="stats-container">
            <div className="stats">
              <Stats number="2m+" label="nisi ut aliquid"/>
              <div className="hr"></div>
              <Stats number="100m+" label="autem quibusdam"/>
            </div>
            <div className="stats">
              <Stats number="1k+" label="rerum facilis"/>
              <div className="hr"></div>
              <Stats number="120k+" label="libero tempore"/>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}