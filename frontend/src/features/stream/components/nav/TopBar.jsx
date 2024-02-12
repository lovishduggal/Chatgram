import { Grid, Typography, Box, CssBaseline, AppBar } from '@mui/material';

function NavBar() {
    return (
        <Grid
            component={'nav'}
            item
            xs={12}
            sx={{
                paddingY: '1rem',
                zIndex: 9999,
            }}>
            <AppBar
                color="default"
                sx={{
                    textAlign: 'center',
                    margin: 0,
                    boxShadow: 'none',
                    borderBottom: 1,
                    borderColor: 'grey.300',
                    paddingY: '5px',
                }}
                enableColorOnDark>
                <Typography
                    variant="h4"
                    component={'h1'}
                    fontWeight={'700'}
                    fontFamily={'Dancing Script'}>
                    Pictogram
                </Typography>
            </AppBar>
        </Grid>
    );
}

export default NavBar;
