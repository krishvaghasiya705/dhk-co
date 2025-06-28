import { RouterProvider } from 'react-router-dom';
import './global.scss';
import "./styles/styles.scss"
import router from './routes';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;