import { gallery } from '../database/db.js';
import responseHelper from '../helpers/responseHelper.js';

const galleryController = {
  addGallery: async (req, res) => {
    try {
      const data = {
        title: req.body.title,
        photo: `http://localhost:3000/${req.file.filename}`,
      };

      const newGallery = await gallery.create(data);
      if (newGallery) {
        responseHelper(res, 200, newGallery, 'Add Gallery Success');
      }
    } catch (error) {
      responseHelper(res, 500, null, error);
    }
  },

  getGallery: async (req, res) => {
    try {
      const galleries = await gallery.findAll();
      responseHelper(res, 200, galleries, 'Get Gallery Success');
    } catch (error) {
      console.log(error);
      responseHelper(res, 500, null, error);
    }
  },
};

export default galleryController;
