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
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const options = ['Edit', 'Delete'];
const ITEM_HEIGHT = 40;

function MenuLong() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        console.log('API call');
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
                        selected={option === 'Pyxis'}
                        onClick={handleClose}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

function Post() {
    const {
        register,
        handleSubmit,
        formState: { isDirty, isValid },
        reset,
    } = useForm({ mode: 'onChange' });
    console.log(isDirty, isValid);

    function onSubmit(data) {
        console.log('API call', data);
        reset();
    }

    return (
        <Card
            sx={{
                marginY: 3,
                maxWidth: '500px',
                boxShadow: 4,
            }}>
            <CardHeader
                avatar={
                    <Avatar
                        sx={{ bgcolor: 'text.primary' }}
                        aria-label="profile-pic">
                        L
                    </Avatar>
                }
                action={<MenuLong></MenuLong>}
                title="Lovish Duggal"
                subheader={new Date().toDateString()}
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://pbs.twimg.com/profile_images/1605145946274160640/kgPFhFbm_400x400.jpg" //* Put User profile here
                alt="Lovish Duggal" //* Put User name here
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facilis nisi distinctio animi voluptate tempore consequatur
                    totam ab numquam quisquam beatae optio cumque molestias quia
                    nemo ipsa, iure non pariatur porro.
                </Typography>
            </CardContent>
            <CardActions
                sx={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <Stack flexDirection={'row'} alignItems={'center'}>
                    <IconButton aria-label="add to favorites">
                        <Checkbox
                            icon={
                                <FavoriteBorder
                                    sx={{ color: 'text.primary' }}
                                />
                            }
                            checkedIcon={<Favorite />}
                        />
                    </IconButton>
                    <IconButton
                        aria-label="comments"
                        sx={{ width: 42, height: 42, marginLeft: '7px' }}>
                        <ModeCommentOutlinedIcon
                            sx={{ color: 'text.primary' }}
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
                        aria-label="comments-count">
                        12 likes
                    </Typography>
                    <Typography
                        color={'text.primary'}
                        sx={{
                            fontSize: '14px',
                            color: 'text.primary',
                        }}
                        aria-label="comments-count">
                        View all 20 comments
                    </Typography>
                </Stack>
                <Stack
                    component={'form'}
                    noValidate
                    onSubmit={handleSubmit((data) => onSubmit(data))}
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
            </CardActions>
        </Card>
    );
}

export default Post;
