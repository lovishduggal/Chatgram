import { CircularProgress, Stack } from '@mui/material';
import Post from './Post';
import { useSelector } from 'react-redux';
import { selectPosts } from '../postSlice';
import { selectUserId } from '../../auth/authSlice';

function Posts() {
    const posts = useSelector(selectPosts);
    const loggedInUserId = useSelector(selectUserId);

    function search(loggedInUserId, arrOfObjsLikes) {
        for (let i = 0; i < arrOfObjsLikes.length; i++) {
            if (arrOfObjsLikes[i].user === loggedInUserId) {
                return true;
            }
        }
        return false;
    }
    return (
        <Stack justifyContent="center" alignItems="center">
            {posts && posts?.length > 0 ? (
                posts.map((post) => (
                    <Post
                        key={post._id}
                        postId={post._id}
                        data={post}
                        allowed={loggedInUserId === post.user._id}
                        isLikedByUser={search(loggedInUserId, post.likes)}></Post>
                ))
            ) : (
                <CircularProgress
                    sx={{
                        position: 'relative',
                        top: '50%',
                        translate: '0 200px',
                    }}
                    variant="indeterminate"
                />
            )}
        </Stack>
    );
}

export default Posts;
