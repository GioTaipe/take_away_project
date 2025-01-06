import { s3Client } from '@aws-sdk/client-s3';
import {AWS_BUCKET_REGION, AWS_PUBLIC_KEY, AWS_SECRET_ACCES_KEY } from './config.js';
import fs from 'fs';

const client = new s3Client({ 
    region: AWS_BUCKET_REGION,
    credentials: {
        accessKeyId: AWS_PUBLIC_KEY,
        secretAccessKey: AWS_SECRET_ACCES_KEY
    }
});

export async function uploadFile(file) {
    const stream = fs.createReadStream(file.tempFilePath);
    const uploadParams = {
        Bucket: AWS_BUCKET_NAME,
        Key: file.name,
        Body: stream
    };
    const result = await client.send(new PutObjectCommand(params));
    return result;
}