import express from 'express';
import galleryController from '../controllers/galleryController.js';
import upload from '../helpers/multerHelper.js';

const galleryRouter = express.Router();

galleryRouter.post('/', upload.single('photo'), galleryController.addGallery);
galleryRouter.get('/', galleryController.getGallery);

export default galleryRouter;
