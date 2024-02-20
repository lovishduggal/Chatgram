import { CircularProgress, Stack } from '@mui/material';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllPost, selectIsLoading, selectPosts } from '../postSlice';
import { AdbSharp } from '@mui/icons-material';

function Posts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const posts = useSelector(selectPosts);
    useEffect(() => {
        (async () => {
            dispatch(getAllPost());
        })();
    }, [dispatch]);
    return (
        <Stack justifyContent="center" alignItems="center">
            {isLoading ? (
                <CircularProgress
                    sx={{
                        position: 'relative',
                        top: '50%',
                        translate: '0 200px',
                    }}
                    variant="indeterminate"
                />
            ) : (
                posts.map((post) => <Post key={post._id} data={post}></Post>)
            )}
        </Stack>
    );
}

export default Posts;
