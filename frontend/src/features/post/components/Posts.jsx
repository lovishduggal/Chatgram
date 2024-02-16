import { Stack } from '@mui/material';
import Post from './Post';

function Posts() {
    return (
        <Stack justifyContent="center" alignItems="center">
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </Stack>
    );
}

export default Posts;
