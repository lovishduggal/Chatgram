import { Navigate } from 'react-router-dom';

function RequireAuth({ children }) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) return <Navigate to={'/login'} replace={true}></Navigate>;
    return children;
}

export default RequireAuth;
