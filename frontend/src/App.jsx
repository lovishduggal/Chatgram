import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@emotion/react';
import { themeSettings } from './theme.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LogInPage from './pages/LogInPage.jsx';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkLoggedIn } from './features/auth/authSlice.js';
import RequireAuth from './features/auth/components/RequireAuth.jsx';
import Home from './pages/Home.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import ProfilePage from './pages/ProfilePage.jsx';
import NotificationPage from './pages/NotificationPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import PostPage from './pages/PostPage.jsx';
import { Box, createTheme } from '@mui/material';
import { selectMode } from './features/user/userSlice.js';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <RequireAuth>
                <Home></Home>
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
    {
        path: '/profile',
        element: <ProfilePage></ProfilePage>,
    },
    {
        path: '/create-post',
        element: <PostPage></PostPage>,
    },
    {
        path: '/search',
        element: <SearchPage></SearchPage>,
    },
    {
        path: '/notifications',
        element: <NotificationPage></NotificationPage>,
    },
]);
function App() {
    const mode = useSelector(selectMode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const dispatch = useDispatch();
    const getloggedInValue = localStorage.getItem('isLoggedIn');
    useEffect(() => {
        dispatch(checkLoggedIn({ getloggedInValue }));
    }, []);
    return (
        <div className="app">
            {' '}
            <ThemeProvider theme={theme}>
                <Box bgcolor={'background.default'} color={'text.primary'}>
                    <CssBaseline />
                    <RouterProvider router={router} />
                    <Toaster />
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default App;
