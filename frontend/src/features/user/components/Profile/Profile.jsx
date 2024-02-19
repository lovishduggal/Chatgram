import {
    Avatar,
    Box,
    Button,
    Stack,
    Typography,
    Link,
    CardMedia,
    TextField,
    Tooltip,
} from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Add, Remove } from '@mui/icons-material';
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];

function ImagesList() {
    return (
        <>
            {itemData.map((item) => (
                <ImageListItem
                    component={RouterLink}
                    sx={{ width: 300 }}
                    key={item.img}
                    to="posts/1">
                    <img
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </>
    );
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

//* This can be a common comp
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function EditProfileDialog({ open, handleClose }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [previewImage, setPreviewImage] = useState('');

    function uploadImage(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
            setPreviewImage(reader.result);
        };
    }

    function onSubmit(data) {
        const formData = new FormData();
        console.log('API', data);
        handleClose();
        reset();
    }
    return (
        <BootstrapDialog
            spacing={1}
            component={'form'}
            noValidate
            onClose={handleClose}
            onSubmit={handleSubmit((data) => onSubmit(data))}
            aria-labelledby="customized-dialog-title"
            open={open}>
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Edit Profile
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}>
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <Stack
                    alignItems={'center'}
                    spacing={1}
                    sx={{ marginBottom: 2 }}>
                    <CardMedia
                        sx={{
                            borderRadius: '50%',
                            width: '150px',
                            height: '150px',
                        }}
                        component="img"
                        height="auto"
                        image={
                            previewImage
                                ? previewImage
                                : 'https://pbs.twimg.com/profile_images/1605145946274160640/kgPFhFbm_400x400.jpg'
                        }
                        alt="change image"
                    />
                    <Stack justifyContent={'center'} alignItems={'center'}>
                        {' '}
                        <Button
                            size="small"
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={<CloudUploadIcon />}
                            onChange={uploadImage}>
                            Change Image
                            <VisuallyHiddenInput
                                {...register('image')}
                                type="file"
                            />
                        </Button>
                    </Stack>
                </Stack>
                <TextField
                    sx={{
                        width: '100%',
                        border: 'none',
                        outline: 'none',
                        '& fieldset': { border: 'none' },
                        marginBottom: 2,
                    }}
                    id="name"
                    multiline
                    placeholder="Name"
                    variant="standard"
                    {...register('name', {
                        required: 'Name is required',
                    })}
                    error={errors?.name?.message ? true : false}
                    helperText={errors?.name?.message}
                />
                <TextField
                    sx={{
                        width: '100%',
                        border: 'none',
                        outline: 'none',
                        '& fieldset': { border: 'none' },
                        marginBottom: 2,
                    }}
                    id="bio"
                    multiline
                    placeholder="Bio"
                    variant="standard"
                    {...register('bio')}
                />
                <TextField
                    sx={{
                        width: '100%',
                        border: 'none',
                        outline: 'none',
                        '& fieldset': { border: 'none' },
                        marginBottom: 2,
                    }}
                    id="website"
                    multiline
                    placeholder="Website"
                    variant="standard"
                    {...register('website')}
                />
            </DialogContent>
            <DialogActions>
                <Button type="submit" variant="contained">
                    Save changes
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
}

function Profile() {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    function handleFollow(e) {
        console.log('Handle follow API here', e.currentTarget.dataset.myValue);
        setChecked(!checked);
    }
    return (
        <Box bgcolor={'background.default'} color={'text.primary'}>
            <Stack
                sx={{
                    margin: 2,
                    gap: { xs: 5, md: 10 },
                    flexDirection: { md: 'row' },
                }}
                flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}>
                <Avatar
                    sx={{ width: '150px', height: '150px' }}
                    alt="Lovish Duggal"
                    src="https://pbs.twimg.com/profile_images/1605145946274160640/kgPFhFbm_400x400.jpg"></Avatar>
                <Stack sx={{ width: 1 }}>
                    <Stack
                        sx={{
                            marginBottom: 3,
                            gap: '5px',
                            flexDirection: { md: 'row' },
                            alignItems: { md: 'center' },
                        }}
                        // flexDirection={'row'}
                        // alignItems={'center'}
                        justifyContent={'space-between'}>
                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: '500',
                                fontSize: { md: '20px' },
                            }}>
                            Lovish Duggal
                        </Typography>
                        <Stack flexDirection={'row'} alignItems={'center'}>
                            {checked ? (
                                <Button
                                    sx={{ marginRight: '5px' }}
                                    data-my-value="unfollow"
                                    onClick={handleFollow}
                                    size="small"
                                    variant="contained"
                                    color="primary">
                                    Unfollow
                                </Button>
                            ) : (
                                <Button
                                    sx={{ marginRight: '5px' }}
                                    data-my-value="unfollow"
                                    onClick={handleFollow}
                                    size="small"
                                    variant="contained"
                                    color="primary">
                                    Follow
                                </Button>
                            )}
                            <Button
                                color="primary"
                                size="small"
                                variant="outlined"
                                onClick={handleClickOpen}>
                                Edit Profile
                            </Button>
                            <EditProfileDialog
                                open={open}
                                handleClose={handleClose}></EditProfileDialog>
                        </Stack>
                    </Stack>
                    <Typography variant="body2" sx={{ marginBottom: 1 }}>
                        Lovish Duggal is a software engineer and a student at
                        University of Toronto. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                    </Typography>
                    <Stack flexDirection={'row'} flexWrap={'wrap'}>
                        <Stack
                            sx={{ marginRight: '20px' }}
                            flexDirection={'row'}
                            alignItems={'center'}
                            alignContent={'center'}>
                            {' '}
                            <CalendarMonthIcon
                                sx={{
                                    width: '18px',
                                    marginRight: '4px',
                                }}></CalendarMonthIcon>
                            <Typography variant="body2">
                                {' '}
                                Joined {new Date().toDateString()}
                            </Typography>
                        </Stack>
                        <Stack flexDirection={'row'} alignItems={'center'}>
                            {' '}
                            <InsertLinkIcon
                                sx={{
                                    width: '18px',
                                    marginRight: '4px',
                                }}></InsertLinkIcon>
                            <Typography variant="body2">
                                {' '}
                                <Link
                                    component={RouterLink}
                                    to="https://t.co/tHBDZAWKvl"
                                    target="_blank">
                                    {' '}
                                    https://t.co/tHBDZAWKvl
                                </Link>{' '}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-around'}
                sx={{
                    paddingY: { xs: 1, md: 2 },
                    borderTop: 1,
                    borderBottom: 1,
                    margin: 2,
                }}>
                <Stack
                    alignItems={'center'}
                    sx={{ flexDirection: { md: 'row' } }}>
                    <Typography
                        sx={{ marginRight: { md: '5px' }, fontWeight: '500' }}>
                        1500
                    </Typography>
                    <Typography>posts</Typography>
                </Stack>
                <Stack
                    alignItems={'center'}
                    sx={{ flexDirection: { md: 'row' } }}>
                    {' '}
                    <Typography
                        sx={{ marginRight: { md: '5px' }, fontWeight: '500' }}>
                        1500
                    </Typography>
                    <Typography>followers</Typography>
                </Stack>
                <Stack
                    alignItems={'center'}
                    sx={{ flexDirection: { md: 'row' } }}>
                    {' '}
                    <Typography
                        sx={{ marginRight: { md: '5px' }, fontWeight: '500' }}>
                        1500
                    </Typography>
                    <Typography>following</Typography>
                </Stack>
            </Stack>
            <Stack
                justifyContent={'center'}
                flexDirection={'row'}
                flexWrap={'wrap'}
                sx={{ gap: 1 }}>
                <ImagesList></ImagesList>
            </Stack>
        </Box>
    );
}

export default Profile;
