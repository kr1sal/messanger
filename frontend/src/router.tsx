import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./pages/home/Page";
import LoginPage from "./pages/login/Page";


function AppRouter() {
    return <Router>
        <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />

            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
    </Router>
}


export default AppRouter;