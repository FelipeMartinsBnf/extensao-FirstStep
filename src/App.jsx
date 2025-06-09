import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import { AnimatePresence } from "framer-motion";
import HomeLanding from './pages/HomeLanding'
import LoginPage from './pages/Login';
import DashboardPage from './pages/DashboardPage';
import CursosPage from './pages/CursosPage';
import CursoPage from "./pages/CursoPage";
import Header from './components/Header';
import { useState } from 'react';
import DicasPage from './pages/DicasPage';
import VagasPage from './pages/VagasPage';

function App() {

  const [userName, setUserName] = useState("Logar");

  return (
    <Router>
      <AnimatePresence mode="wait">
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
          <Route
            path="/dicas"
            element={
              <RequireAuth>
                <DicasPage />
              </RequireAuth>
            }
          />
          <Route
            path="/vagas"
            element={
              <RequireAuth>
                <VagasPage />
              </RequireAuth>
            }
          />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App
