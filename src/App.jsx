import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLanding from './pages/HomeLanding'
import LoginPage from './pages/Login';
import DashboardPage from './pages/DashboardPage';
import CursosPage from './pages/CursosPage';
import CursoPage from "./pages/CursoPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dash" element={<DashboardPage />} />
        <Route path="/cursos" element={<CursosPage />} />
        <Route path="/curso" element={<CursoPage />} />
      </Routes>
    </Router>
  );
}

export default App
