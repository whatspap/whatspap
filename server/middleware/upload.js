import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.MONGO_URI;

const storage = new GridFsStorage({
    url,
    options: { useUnifiedTopology: true, useNewUrlParser: true,dbName:"whatspap" },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];
        if (match.indexOf(file.mimeType) === -1) {
            return `${Date(Date.now())}-file-${file.originalname}`;
        }
        // If file type is an image
        return {
            bucketName: "photos",
            filename: `${Date(Date.now())}-file-${file.originalname}`
        };
    }
});

// Add the dbName option to the storage configuration

const uploadMiddleware = multer({ storage });

export default uploadMiddleware;
