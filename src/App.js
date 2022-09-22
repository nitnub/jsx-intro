import Routes from './Routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AppStyle } from './App.style';
import { useContext } from 'react';
import { DarkModeContext } from './Contexts/DarkModeContext';

export function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <AppStyle darkMode={darkMode} />
      <Routes />
    </>
  );
}

export default App;
