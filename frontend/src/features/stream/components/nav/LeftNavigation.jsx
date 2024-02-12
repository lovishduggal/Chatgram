import { Draw } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';

import {
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material';

function LeftNavigation() {
    return (
        <Grid
            item
            xs={0}
            sm={3.5}
            md={2.5}
            sx={{
                display: { xs: 'none', sm: 'block' },
                borderRight: 1,
                borderColor: 'grey.300',
                width: { lg: '240px' },
            }}>
            <div>
                <Toolbar />
                <List>
                    {[
                        'Home',
                        'Search',
                        'Create',
                        'Notification',
                        'Profile',
                    ].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <MailIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </div>
        </Grid>
    );
}

export default LeftNavigation;
