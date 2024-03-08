import ThemeProvider from './themeContext/context';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider>
      <Header/>
    </ThemeProvider>
  );
}

export default App;
