import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Box, CircularProgress } from '@mui/material';
import axiosInstance from '../../../app/utils/axiosInstance';

function RequireAuth({ children }) {
    const [accessible, setAccessible] = useState(null);
    useEffect(() => {
        axiosInstance
            .get('/auth/check')
            .then(({ data }) => {
                setAccessible(data?.success);
            })
            .catch(({ response }) => {
                setAccessible(response?.data?.success);
                toast.error(response?.data?.message);
            });
    }, []);
    switch (accessible) {
        case true:
            return children;
        case false:
            return <Navigate to="/login" />;
        default:
            return (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                    }}>
                    <CircularProgress />
                </Box>
            );
    }
}

export default RequireAuth;
