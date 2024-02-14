import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from 'react';
import { Add, Home, Search, Notifications } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import {
    Link,
    unstable_HistoryRouter,
    useLocation,
    useSearchParams,
} from 'react-router-dom';
const drawerWidth = 240;

function ProfileAvatar() {
    return (
        <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 24, height: 24 }}
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
                </Box>
            </Toolbar>
        </AppBar>
    );
}

function LeftDrawer() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        console.log(event, index);
        setSelectedIndex(index);
    };
    const drawer = (
        <div>
            <Toolbar />

            <List
                component="nav"
                aria-label="main mailbox folders"
                sx={{ padding: 0 }}>
                <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}>
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}>
                    <ListItemIcon>
                        <Search />
                    </ListItemIcon>
                    <ListItemText primary="Search" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}>
                    <ListItemIcon>
                        <Add />
                    </ListItemIcon>
                    <ListItemText primary="New Post" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}>
                    <ListItemIcon>
                        <Notifications />
                    </ListItemIcon>
                    <ListItemText primary="Notifications" />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}>
                    <ListItemIcon>
                        <ProfileAvatar />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
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

    console.log(location.pathname);
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
                        label="Home"
                        value="home"
                        icon={<Home />}
                        alt="Home"
                    />
                    <BottomNavigationAction
                        label="Search"
                        value="search"
                        icon={<Search />}
                    />
                    <BottomNavigationAction
                        label="New Post"
                        value="newPost"
                        icon={<Add />}
                    />
                    <BottomNavigationAction
                        label="Notification"
                        value="notification"
                        icon={<Notifications />}
                    />

                    <BottomNavigationAction
                        label="Profile"
                        value="profile"
                        icon={<ProfileAvatar />}
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
