import { Avatar, Box, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserNotifications,
    getUserProfile,
    selectUserNotifications,
} from '../userSlice';
import { selectUserId } from '../../auth/authSlice';

function Notification() {
    const dispatch = useDispatch();
    const userId = useSelector(selectUserId);
    const userNotifications = useSelector(selectUserNotifications);
    useEffect(() => {
        if (userId) {
            (async () => {
                await dispatch(getUserNotifications({ userId }));
                dispatch(getUserProfile({ userId }));
            })();
        }
    }, []);
    return (
        <Box sx={{ width: 1, height: '100vh' }}>
            <Stack justifyContent={'center'} flexDirection={'row'}>
                <Box sx={{ width: '100%' }}>
                    {userNotifications.map((notification) => (
                        <Stack
                            sx={{
                                marginY: 2,
                                bgcolor: `${
                                    notification?.saw
                                        ? 'none'
                                        : 'secondary.main'
                                }`,
                                padding: 1,
                                borderRadius: 2,
                            }}
                            key={notification._id}
                            flexDirection={'row'}
                            alignItems={'center'}>
                            <Avatar
                                alt={notification?.user?.fullName}
                                src={notification?.user?.profilePicture?.url}
                                sx={{
                                    bgcolor: 'text.primary',
                                    width: 56,
                                    height: 56,
                                    border: 2,
                                    borderColor: '#E43D90',
                                    marginRight: 2,
                                }}>
                                {' '}
                                {notification?.fullName &&
                                    notification.fullName[0]}
                            </Avatar>
                            <Typography variant="body1" color="text.primary">
                                {notification?.user?.fullName}{' '}
                                {notification?.action}
                            </Typography>
                        </Stack>
                    ))}
                </Box>
            </Stack>
        </Box>
    );
}

export default Notification;
