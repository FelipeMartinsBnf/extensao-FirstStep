import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import HomeLanding from './pages/HomeLanding'
import LoginPage from './pages/Login';
import DashboardPage from './pages/DashboardPage';
import CursosPage from './pages/CursosPage';
import CursoPage from "./pages/CursoPage";
import Header from './components/Header';
import { useState } from 'react';

function App() {

  const [userName, setUserName] = useState("Logar");

  return (
    <Router>
      <Header userName={userName} setUserName={setUserName} />
      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route
          path="/login"
          element={<LoginPage setUserName={setUserName} />}
        />
        <Route
          path="/dash"
          element={
            <RequireAuth>
              <DashboardPage />
            </RequireAuth>
          }
        />
        <Route
          path="/cursos"
          element={
            <RequireAuth>
              <CursosPage />
            </RequireAuth>
          }
        />
        <Route
          path="/curso"
          element={
            <RequireAuth>
              <CursoPage />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
