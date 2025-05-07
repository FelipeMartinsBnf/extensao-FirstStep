import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLanding from './pages/HomeLanding'
import LoginPage from './pages/Login';
import DashboardPage from './pages/DashboardPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/dash' element={<DashboardPage />} />
      </Routes>
    </Router>
  )
}

export default App
