import { Grid } from '@mui/material';
import NavBar from '../features/nav/NavBar';
import Navigation from '../features/nav/Navigation';
import Feed from '../features/stream/feed';

function Home() {
    return (
        <Grid container>
            <NavBar></NavBar>
            <Feed></Feed>
            <Navigation></Navigation>
        </Grid>
    );
}

export default Home;
