import { useNavigate } from 'react-router-dom';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@emotion/react';
import { themeSettings } from './theme.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LogInPage from './pages/LogInPage.jsx';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    checkLoggedInUser,
    selectCheckLoggedIn,
    selectLoggedInUser,
    selectUserId,
} from './features/auth/authSlice.js';
import RequireAuth from './features/auth/components/RequireAuth.jsx';
import Home from './pages/Home.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import ProfilePage from './pages/ProfilePage.jsx';
import NotificationPage from './pages/NotificationPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import { Box, CircularProgress, createTheme } from '@mui/material';
import { getUserProfile, selectMode } from './features/user/userSlice.js';
import CreatePostPage from './pages/CreatePostPage.jsx';
import { getAllPost } from './features/post/postSlice.js';
import OtherUserProfilePage from './pages/OtherUserProfilePage.jsx';

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
        path: '/profile/:id',
        element: <OtherUserProfilePage></OtherUserProfilePage>,
    },
    {
        path: '/create-post',
        element: <CreatePostPage></CreatePostPage>,
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
    const isLoggedIn = useSelector(selectLoggedInUser);
    const userId = useSelector(selectUserId);
    const checkLoggedIn = useSelector(selectCheckLoggedIn);

    useEffect(() => {
        (async () => {
            await dispatch(checkLoggedInUser());
        })();
    });

    useEffect(() => {
        if (isLoggedIn && userId) {
            dispatch(getAllPost());
            dispatch(getUserProfile({ userId }));
        }
    }, [dispatch, isLoggedIn, userId]);

    return (
        <div className="app">
            {' '}
            <ThemeProvider theme={theme}>
                <Box bgcolor={'background.default'} color={'text.primary'}>
                    <CssBaseline />
                    {checkLoggedIn ? (
                        <>
                            <RouterProvider router={router} />
                            <Toaster />
                        </>
                    ) : (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100vh',
                            }}>
                            <CircularProgress />
                        </Box>
                    )}
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default App;
