import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LogInPage from './pages/LogInPage.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkLoggedIn } from './features/auth/authSlice.js';
import RequireAuth from './features/auth/components/RequireAuth.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <RequireAuth>
                <h1>Home Page</h1>
            </RequireAuth>
        ),
    },
    {
        path: '/signup',
        element: <SignUpPage></SignUpPage>,
    },
    {
        path: '/login',
        element: <LogInPage></LogInPage>,
    },
]);
function App() {
    const dispatch = useDispatch();
    const getloggedInValue = localStorage.getItem('isLoggedIn');
    useEffect(() => {
        dispatch(checkLoggedIn({ getloggedInValue }));
    }, []);
    return (
        <div className="app">
            {' '}
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
                <Toaster />
            </ThemeProvider>
        </div>
    );
}

export default App;
