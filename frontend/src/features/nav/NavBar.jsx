import { Grid, Typography, Box, CssBaseline } from '@mui/material';

function NavBar() {
    return (
        <Grid
            component={'nav'}
            item
            xs={12}
            sx={{
                borderBottom: 1,
                borderColor: 'grey.500',
                position: 'fixed',
                left: 0,
                right: 0,
                top: 0,
            }}>
            <CssBaseline />
            <Box sx={{ textAlign: 'center', marginY: '1rem' }}>
                <Typography
                    variant="h4"
                    component={'h1'}
                    fontWeight={'700'}
                    fontFamily={'Dancing Script'}>
                    Pictogram
                </Typography>
            </Box>
        </Grid>
    );
}

export default NavBar;
