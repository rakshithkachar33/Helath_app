import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgetPassword from './components/Auth/ForgetPassword';
import ChangePassword from './components/Auth/ChangePassword';
import Dashboard from './components/Auth/Dashboard'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route path="/change-password" element={<ChangePassword />} />
            </Routes>
        </Router>
    );
}

export default App;
