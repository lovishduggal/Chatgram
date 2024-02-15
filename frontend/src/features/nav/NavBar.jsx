import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, Link } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from 'react';
import { Add, Home, Search, Notifications } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Switcher from './Switcher';
const drawerWidth = 240;

function ProfileAvatar({ color }) {
    return (
        <Avatar
            src="/broken-image.jpg"
            sx={{ width: 24, height: 24, bgcolor: color }}
        />
    );
}

function TopBar() {
    return (
        <AppBar
            color="inherit"
            position="fixed"
            sx={{
                boxShadow: 'none',
                borderBottom: 1,
                borderColor: 'grey.300',
                zIndex: 9999,
            }}
            enableColorOnDark>
            <Toolbar>
                <Box>
                    {' '}
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        fontFamily={'Dancing Script'}
                        fontWeight={'700'}>
                        Pictogram
                    </Typography>
                    <Switcher></Switcher>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

function LeftDrawer() {
    const location = useLocation();
    const [value, setValue] = useState(
        location.pathname === '/' ? 'home' : location.pathname.slice(1)
    );
    const handleListItemClick = (event, newValue) => {
        setValue(newValue);
    };
    const drawer = (
        <div>
            <Toolbar />

            <List
                component="nav"
                aria-label="main mailbox folders"
                sx={{ padding: 0 }}>
                <Link
                    component={RouterLink}
                    to="/"
                    underline="none"
                    color={value === 'home' ? 'primary' : 'inherit'}>
                    <ListItemButton
                        selected={value === 'home'}
                        onClick={(event) => handleListItemClick(event, 'home')}>
                        <ListItemIcon>
                            <Home
                                color={value === 'home' ? 'primary' : 'inherit'}
                            />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </Link>
                <Link
                    component={RouterLink}
                    to="/search"
                    underline="none"
                    color={value === 'search' ? 'primary' : 'inherit'}>
                    <ListItemButton
                        selected={value === 'search'}
                        onClick={(event) =>
                            handleListItemClick(event, 'search')
                        }>
                        <ListItemIcon>
                            <Search
                                color={
                                    value === 'search' ? 'primary' : 'inherit'
                                }
                            />
                        </ListItemIcon>
                        <ListItemText primary="Search" />
                    </ListItemButton>
                </Link>
                <Link
                    component={RouterLink}
                    to="/create-post"
                    underline="none"
                    color={value === 'create-post' ? 'primary' : 'inherit'}>
                    <ListItemButton
                        selected={value === 'create-post'}
                        onClick={(event) =>
                            handleListItemClick(event, 'create-post')
                        }>
                        <ListItemIcon>
                            <Add
                                color={
                                    value === 'create-post'
                                        ? 'primary'
                                        : 'inherit'
                                }
                            />
                        </ListItemIcon>
                        <ListItemText primary="New Post" />
                    </ListItemButton>
                </Link>
                <Link
                    component={RouterLink}
                    to="/notifications"
                    underline="none"
                    color={value === 'notifications' ? 'primary' : 'inherit'}>
                    <ListItemButton
                        selected={value === 'notifications'}
                        onClick={(event) =>
                            handleListItemClick(event, 'notifications')
                        }>
                        <ListItemIcon>
                            <Notifications
                                color={
                                    value === 'notifications'
                                        ? 'primary'
                                        : 'inherit'
                                }
                            />
                        </ListItemIcon>
                        <ListItemText primary="Notifications" />
                    </ListItemButton>
                </Link>
                <Link
                    component={RouterLink}
                    to="/profile"
                    underline="none"
                    color={value === 'profile' ? 'primary' : 'inherit'}>
                    <ListItemButton
                        selected={value === 'profile'}
                        onClick={(event) =>
                            handleListItemClick(event, 'profile')
                        }>
                        <ListItemIcon>
                            <ProfileAvatar
                                color={
                                    value === 'profile'
                                        ? 'primary.main'
                                        : 'default'
                                }
                            />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </Link>
            </List>
        </div>
    );

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders">
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}
                open>
                {drawer}
            </Drawer>
        </Box>
    );
}

function BottomNav() {
    const location = useLocation();

    const [value, setValue] = useState(
        location.pathname === '/' ? 'home' : location.pathname.slice(1)
    );
    const handleChange = (event, newValue) => {
        console.log(event, newValue);
        setValue(newValue);
    };
    return (
        <Box
            sx={{
                width: 1,
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                borderTop: 1,
                borderColor: 'grey.300',
                display: { xs: 'block', sm: 'none' },
            }}>
            <Container>
                <BottomNavigation
                    sx={{
                        width: 1,
                    }}
                    value={value}
                    onChange={handleChange}>
                    <BottomNavigationAction
                        component={RouterLink}
                        to="/"
                        label="Home"
                        value="home"
                        icon={<Home />}
                        alt="Home"
                    />
                    <BottomNavigationAction
                        component={RouterLink}
                        to="/search"
                        label="Search"
                        value="search"
                        icon={<Search />}
                    />
                    <BottomNavigationAction
                        component={RouterLink}
                        to="/create-post"
                        label="New Post"
                        value="create-post"
                        icon={<Add />}
                    />
                    <BottomNavigationAction
                        component={RouterLink}
                        to="/notifications"
                        label="Notification"
                        value="notifications"
                        icon={<Notifications />}
                    />

                    <BottomNavigationAction
                        component={RouterLink}
                        to="/profile"
                        label="Profile"
                        value="profile"
                        icon={
                            <ProfileAvatar
                                color={
                                    value === 'profile'
                                        ? 'primary.main'
                                        : 'gray'
                                }
                            />
                        }
                    />
                </BottomNavigation>
            </Container>
        </Box>
    );
}

function NavBar({ children }) {
    return (
        <>
            <TopBar></TopBar>
            <Box sx={{ display: 'flex' }}>
                <LeftDrawer></LeftDrawer>
                <Container
                    component="main"
                    sx={{
                        flexGrow: 1,
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                    }}>
                    <Toolbar />
                    {children}
                </Container>
            </Box>
            <BottomNav></BottomNav>
        </>
    );
}

export default NavBar;
