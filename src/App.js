import { RouterProvider } from 'react-router-dom';
import './global.scss';
import "./styles/styles.scss"
import router from './routes';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProjectFilterProvider } from './contexts/ProjectFilterContext';

function App() {
  return (
    <ThemeProvider>
      <ProjectFilterProvider>
        <RouterProvider router={router} />
      </ProjectFilterProvider>
    </ThemeProvider>
  );
}

export default App;