import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLanding from './pages/HomeLanding'
import LoginPage from './pages/Login';
import DashboardPage from './pages/DashboardPage';
import CursosPage from './pages/CursosPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dash" element={<DashboardPage />} />
        <Route path="/cursos" element={<CursosPage />} />
      </Routes>
    </Router>
  );
}

export default App
