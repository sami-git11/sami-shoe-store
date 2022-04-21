import { Sequelize } from 'sequelize';
import sequelize from '../config/config.mjs';

const { DataTypes } = Sequelize;

const { STRING, BOOLEAN } = DataTypes;

const User = sequelize.define('User', {
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
});

export default User;
