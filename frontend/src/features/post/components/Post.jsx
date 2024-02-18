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

const options = ['Edit', 'Delete'];
const ITEM_HEIGHT = 40;

function MenuLong({ setIsEditing, setOpenCommentDialog, reset }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        console.log('API call', anchorEl, e.currentTarget.dataset.myValue);
        if (e.currentTarget.dataset.myValue === 'Edit') {
            setIsEditing(true);
            setOpenCommentDialog(false);
            reset();
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
    return (
        <List
            sx={{
                padding: '0px',
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                overflowY: 'auto',
                maxHeight: 400,
                '& ul': { padding: 0 },
            }}>
            <ListSubheader>{`Post's comments`}</ListSubheader>
            <ListItem key={`1`}>
                <ListItemText primary={`Item`} />
            </ListItem>
            <ListItem key={`1`}>
                <ListItemText primary={`Item`} />
            </ListItem>
            <ListItem key={`1`}>
                <ListItemText primary={`Item`} />
            </ListItem>
            <ListItem key={`1`}>
                <ListItemText primary={`Item`} />
            </ListItem>
            <ListItem key={`1`}>
                <ListItemText primary={`Item`} />
            </ListItem>
            <ListItem key={`1`}>
                <ListItemText primary={`Item`} />
            </ListItem>
            <ListItem key={`1`}>
                <ListItemText primary={`Item`} />
            </ListItem>
            <ListItem key={`1`}>
                <ListItemText primary={`Item`} />
            </ListItem>
            <ListItem key={`1`}>
                <ListItemText primary={`Item`} />
            </ListItem>
        </List>
    );
}

function Post() {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { isDirty, isValid },
        reset,
    } = useForm();
    const [isEditing, setIsEditing] = useState(false);
    const [openCommentDialog, setOpenCommentDialog] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [checked, setChecked] = useState(false);

    function handleOpen() {
        setOpenModal(true);
    }
    function handleClose() {
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

    function handleSubmitted(data) {
        const { addComment, caption } = data;

        if (addComment) {
            console.log('comment', data);
            setOpenCommentDialog(false);
        } else if (caption) {
            console.log('caption', data);
            setIsEditing(false);
        }
        reset();
    }

    return (
        <Card
            component={'form'}
            noValidate
            onSubmit={handleSubmit((data) => handleSubmitted(data))}
            sx={{
                marginY: 3,
                maxWidth: '500px',
                boxShadow: 4,
                position: 'relative',
            }}>
            <CardHeader
                avatar={
                    <Avatar //* Here provide user pic and name
                        sx={{ bgcolor: 'text.primary' }}
                        aria-label="profile-pic">
                        L
                    </Avatar>
                }
                action={
                    <MenuLong
                        setIsEditing={setIsEditing}
                        setOpenCommentDialog={setOpenCommentDialog}
                        reset={reset}></MenuLong>
                }
                title="Lovish Duggal"
                subheader={new Date().toDateString()} //* Here, provide time when post created(use db)
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://pbs.twimg.com/profile_images/1605145946274160640/kgPFhFbm_400x400.jpg" //* Put User profile here
                alt="Lovish Duggal" //* Put User name here
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
                        {getValues('caption')}
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
                        sx={{ marginLeft: '24px' }}
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
                        12 likes {/* add modal for likes */}
                    </Typography>
                    <Typography
                        htmlFor="addComment"
                        color={'text.primary'}
                        sx={{
                            fontSize: '14px',
                            color: 'text.primary',
                            cursor: 'pointer',
                            position: 'relative',
                        }}
                        aria-label="comments-count"
                        onClick={handleOpen}>
                        View all 20 comments
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
