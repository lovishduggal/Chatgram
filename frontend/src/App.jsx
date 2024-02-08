import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
const router = createBrowserRouter([
    {
        path: '/signup',
        element: <SignUpPage></SignUpPage>,
    },
    {
        path: '/login',
        element: <h1>Login</h1>,
    },
]);
function App() {
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
