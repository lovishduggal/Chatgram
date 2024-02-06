import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './features/auth/components/SignUp.jsx';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme.jsx';
const router = createBrowserRouter([
    {
        path: '/',
        element: <SignUp></SignUp>,
    },
]);
function App() {
    return (
        <>
            {' '}
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    );
}

export default App;
