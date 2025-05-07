import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLanding from './pages/HomeLanding'
import LoginPage from './pages/Login';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
