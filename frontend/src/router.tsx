import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./pages/home/Page";
import LoginPage from "./pages/login/Page";
import { useFindUserQuery } from './graphql/generated/output';


function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { data, loading, error } = useFindUserQuery();

    if (loading) return <div>Loading...</div>;
    if (error || !data?.findUser) return <Navigate to="/login" replace />;

    return <>{children}</>;
}

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />

            {/* Nested protected routes */}
            <Route element={<ProtectedRoute />}>
                <Route path="/home" element={<HomePage />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<div>404</div>} />
        </Routes>
    );
}


export default AppRouter;