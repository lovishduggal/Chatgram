import { Grid } from '@mui/material';
import TopBar from '../features/stream/components/nav/TopBar';
import Navigation from '../features/stream/components/nav/Navigation';
import Feed from '../features/stream/components/feed/Feed';
import LeftNavigation from '../features/stream/components/nav/LeftNavigation';

function Home() {
    return (
        <Grid container>
            <TopBar></TopBar>
            <LeftNavigation></LeftNavigation>
            <Feed></Feed>
            <Navigation></Navigation>
        </Grid>
    );
}

export default Home;
