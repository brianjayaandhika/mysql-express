import { DataTypes } from 'sequelize';

const galleryModel = (sequelize) =>
  sequelize.define('galleries', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

export default galleryModel;
