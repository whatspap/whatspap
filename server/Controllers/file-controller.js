import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = 'http://localhost:5000';


let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});


export const uploadFile = (request, response) => {
    if (!request.file){

        return response.status(404).json("File not found");
    }
    console.log("uploading file...")
    const imageUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageUrl);
}

export const getFile = async (request, response) => {
    console.log("getting file..")
    try {
        const file = await gfs.files.findOne({ filename: request.params.filename });
        // const readStream = gfs.createReadStream(file.filename);
        // readStream.pipe(response);
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}