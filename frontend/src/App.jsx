import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUp from './features/auth/components/Signup.jsx';
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
            <RouterProvider router={router} />
        </>
    );
}

export default App;
