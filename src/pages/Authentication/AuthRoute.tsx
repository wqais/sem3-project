import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute: React.FC = () => {

    const isAuthenticated = Boolean(localStorage.getItem('access_token'));

    if (!isAuthenticated) {
        return <Navigate to="/auth/signin" replace />;
    }

    return <Outlet />;
};

export default AuthRoute;
