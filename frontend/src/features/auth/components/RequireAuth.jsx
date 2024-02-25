import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectLoggedInUser } from '../authSlice';

function RequireAuth({ children }) {
    const isLoggedIn = useSelector(selectLoggedInUser);
    if (!isLoggedIn) return <Navigate to={'/login'} replace={true}></Navigate>;
    return children;
}

export default RequireAuth;
