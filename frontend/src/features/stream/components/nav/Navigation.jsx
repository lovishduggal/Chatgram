import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react';
import { Add, Home, Search, Notifications, Padding } from '@mui/icons-material';
import { Avatar, Container, Grid } from '@mui/material';

function Navigation() {
    const [value, setValue] = useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid
            item
            xs={12}
            sx={{
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
                        label="Recents"
                        value="recents"
                        icon={<Home />}
                        alt="Home"
                    />
                    <BottomNavigationAction
                        label="Favorites"
                        value="favorites"
                        icon={<Search />}
                    />
                    <BottomNavigationAction
                        label="Nearby"
                        value="nearby"
                        icon={<Add />}
                    />
                    <BottomNavigationAction
                        label="Folder"
                        value="folder"
                        icon={<Notifications />}
                    />
                    <BottomNavigationAction
                        label="Profile"
                        value="profile"
                        icon={
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 24, height: 24 }}
                            />
                        }
                    />
                </BottomNavigation>
            </Container>
        </Grid>
    );
}

export default Navigation;
