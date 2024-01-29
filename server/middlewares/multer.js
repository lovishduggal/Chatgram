import multer from 'multer';
import pkg from 'multer-storage-cloudinary';
const { CloudinaryStorage } = pkg;
import cloudinary from 'cloudinary';

const storage = new CloudinaryStorage({
    cloudinary: cloudinary.v2,
    params: {
        folder: 'Pictogram',
        format: (req, file) => {
            const ext = file.mimetype.split('/')[1];
            return ext;
        },
        public_id: (req, file) => {
            const name = `${Date.now()}-${file.originalname}`;
            return name;
        },
        transformation: {
            quality: 'auto',
        },
    },
});
export const upload = multer({ storage });
