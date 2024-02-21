import { Favorite, FavoriteBorder } from '@mui/icons-material';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    CircularProgress,
    IconButton,
    Modal,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, getAllPost, updatePost } from '../postSlice';
import {
    createComment,
    getAllComments,
    selectComments,
    setComments,
} from '../../comment/commentSlice';
import { selectUserId } from '../../auth/authSlice';

const options = ['Edit', 'Delete'];
const ITEM_HEIGHT = 40;

function MenuLong({
    setIsEditing,
    setOpenCommentDialog,
    reset,
    data,
    setValue,
}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        console.log('API call', anchorEl, e.currentTarget.dataset.myValue);
        if (e.currentTarget.dataset.myValue === 'Edit') {
            setValue('caption', data.content);
            setIsEditing(true);
            setOpenCommentDialog(false);
            // reset(); Later we will see this is required or not.
        }

        if (e.currentTarget.dataset.myValue === 'Delete') {
            dispatch(deletePost({ postId: data._id }));
            // reset(); Later we will see this is required or not.
        }

        //* I can perform delete operation here directly (API)
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                sx={{ color: 'text.primary' }}>
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '100px',
                        translate: '-50px 0px',
                    },
                }}>
                {options.map((option) => (
                    <MenuItem
                        sx={{ color: 'text.primary' }}
                        key={option}
                        data-my-value={option}
                        selected={option === 'Pyxis'}
                        onClick={handleClose}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

function ListOfComments() {
    const comments = useSelector(selectComments);
    const userId = useSelector(selectUserId);
    function handleDelete() {}
    return (
        <List
            sx={{
                padding: '0px',
                width: '100%',
                maxWidth: '400px',
                bgcolor: 'background.paper',
                overflowY: 'auto',
                minHeight: '100px',
                maxHeight: 400,
                '& ul': { padding: 0 },
            }}>
            <ListSubheader>{`Post's comments`}</ListSubheader>
            {comments && comments.length > 0 ? (
                comments.map((comment) => (
                    <ListItem key={comment?._id}>
                        <Stack
                            sx={{ width: '100%' }}
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            gap={'5px'}>
                            <Stack flexDirection={'row'} alignItems={'center'}>
                                <Avatar
                                    alt={comment?.user?.fullName}
                                    src={comment?.user?.profilePicture}
                                    sx={{
                                        width: 24,
                                        height: 24,
                                        marginRight: '5px',
                                    }}
                                />{' '}
                                <ListItemText
                                    sx={{
                                        display: 'block',
                                        wordBreak: 'break-all',
                                    }}
                                    primary={comment?.content}
                                />
                            </Stack>
                            {userId === comment.user._id && (
                                <Button
                                    variant="text"
                                    size="small"
                                    onClick={handleDelete}>
                                    Delete
                                </Button>
                            )}
                        </Stack>
                    </ListItem>
                ))
            ) : (
                <CircularProgress
                    sx={{ translate: '110px 0px' }}
                    variant="indeterminate"
                />
            )}
        </List>
    );
}

function Post({ postId, data, allowed }) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { isDirty, isValid },
        reset,
    } = useForm();
    const [isEditing, setIsEditing] = useState(false);
    const [openCommentDialog, setOpenCommentDialog] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    function handleOpen() {
        dispatch(getAllComments({ postId }));
        setOpenModal(true);
    }
    function handleClose() {
        dispatch(setComments({}));
        setOpenModal(false);
    }

    function handleLike(e) {
        console.log('Handle like API here', e.target.checked);
        setChecked(e.target.checked);
    }

    function handleCommentDialog() {
        setOpenCommentDialog(!openCommentDialog);
        setIsEditing(false);
        reset();
    }

    function onCancel(data) {
        console.log('oncancel', data);
        setIsEditing(false);
        reset();
    }

    async function handleSubmitted(data) {
        const { addComment, caption } = data;

        if (addComment) {
            console.log('comment', data);
            await dispatch(createComment({ content: data.addComment, postId }));
            dispatch(getAllPost());
            setOpenCommentDialog(false);
            reset();
        } else if (caption) {
            console.log('caption', data.caption);
            dispatch(updatePost({ content: data.caption, postId }));
            setIsEditing(false);
            reset();
        }
    }

    return (
        <Card
            component={'form'}
            noValidate
            onSubmit={handleSubmit((data) => handleSubmitted(data))}
            sx={{
                marginY: 3,
                maxWidth: '400px',
                boxShadow: 4,
                position: 'relative',
            }}>
            <CardHeader
                avatar={
                    <Avatar
                        sx={{ bgcolor: 'text.primary', width: 54, height: 54 }}
                        aria-label="profile-pic"
                        src={data?.user?.profilePicture?.url}>
                        {data?.user?.fullName[0]}
                    </Avatar>
                }
                action={
                    allowed && (
                        <MenuLong
                            setIsEditing={setIsEditing}
                            setOpenCommentDialog={setOpenCommentDialog}
                            setValue={setValue}
                            data={data}
                            reset={reset}></MenuLong>
                    )
                }
                title={
                    <Typography variant="subtitle1">
                        {data?.user?.fullName}
                    </Typography>
                }
                subheader={
                    <Typography variant="caption">
                        {new Date(data.createdAt).toDateString()}
                    </Typography>
                }
            />
            <CardMedia
                width="100%"
                component="img"
                height="20%"
                image={data?.image?.url}
                alt={data?.user?.name}
                loading="lazy"
            />

            <CardContent>
                {isEditing ? (
                    <>
                        <TextField
                            sx={{
                                width: '100%',
                                border: 'none',
                                outline: 'none',
                                '& fieldset': { border: 'none' },
                            }}
                            id="caption"
                            multiline
                            placeholder="Caption"
                            variant="standard"
                            {...register('caption', {
                                required: true,
                            })}
                        />
                        <Stack
                            flexDirection={'row'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            sx={{ marginTop: '5px' }}>
                            <Button variant="text" onClick={onCancel}>
                                Cancel
                            </Button>
                            <Button
                                disabled={!isDirty || !isValid}
                                variant="contained"
                                type="submit"
                                size="small">
                                Save
                            </Button>
                        </Stack>
                    </>
                ) : (
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ wordBreak: 'break-word' }}>
                        {data?.content}
                    </Typography>
                )}
            </CardContent>
            <CardActions
                sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <Stack flexDirection={'row'} alignItems={'center'}>
                    <Checkbox
                        onClick={handleLike}
                        checked={checked}
                        icon={<FavoriteBorder sx={{ color: 'text.primary' }} />}
                        checkedIcon={<Favorite />}
                    />
                    <IconButton
                        sx={{ marginLeft: '16px' }}
                        onClick={handleCommentDialog}>
                        <ModeCommentOutlinedIcon
                            sx={{
                                color: 'text.primary',
                                cursor: 'pointer',
                            }}
                        />
                    </IconButton>
                </Stack>
                <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    marginBottom={'5px'}>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            color: 'text.primary',
                            marginX: '10px',
                        }}
                        aria-label="likes-count">
                        {data?.likes?.length} likes {/* add modal for likes */}
                    </Typography>
                    <Typography
                        htmlFor="addComment"
                        color={'text.primary'}
                        sx={{
                            fontSize: '14px',
                            color: 'text.primary',
                            cursor: 'pointer',
                            position: 'relative',
                            opacity: `${
                                data?.comments?.length === 0 ? '0' : '1'
                            }`,
                            pointerEvents: `${
                                data?.comments?.length === 0 ? 'none' : 'auto'
                            }`,
                        }}
                        aria-label="comments-count"
                        onClick={handleOpen}>
                        View all {data?.comments?.length} comments
                    </Typography>
                    <Modal
                        open={openModal}
                        onClose={handleClose}
                        aria-labelledby="comments"
                        aria-describedby="list-of-comments">
                        <Box
                            sx={{
                                top: '50%',
                                left: '50%',
                                transform: {
                                    xs: 'translate(-52%, -50%)',
                                    sm: 'translate(-14%, -50%)',
                                },
                                width: 300,
                                bgcolor: 'background.paper',
                                position: 'absolute',
                                boxShadow: 24,
                                border: 'none',
                                p: 2,
                            }}>
                            <ListOfComments></ListOfComments>
                        </Box>
                    </Modal>
                </Stack>
                {openCommentDialog && (
                    <Stack
                        padding={'10px'}
                        flexDirection={'row'}
                        alignItems={'end'}
                        width={'100%'}
                        justifyContent={'space-between'}
                        sx={{ gap: '5px' }}>
                        <TextField
                            id="addComment"
                            variant="standard"
                            label="Add comment"
                            sx={{ width: '100%' }}
                            {...register('addComment', {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            size="small"
                            disabled={!isDirty || !isValid}>
                            Post
                        </Button>
                    </Stack>
                )}
            </CardActions>
        </Card>
    );
}

export default Post;
