import { CircularProgress, Stack } from '@mui/material';
import Post from './Post';
import { useSelector } from 'react-redux';
import { selectPosts } from '../postSlice';
import { selectUserId } from '../../auth/authSlice';

function Posts() {
    const posts = useSelector(selectPosts);
    const userId = useSelector(selectUserId);

    function search(userId, arrOfObjsLikes) {
        for (let i = 0; i < arrOfObjsLikes.length; i++) {
            if (arrOfObjsLikes[i].user === userId) {
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
                        allowed={userId === post.user._id}
                        isLikedByUser={search(userId, post.likes)}></Post>
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
