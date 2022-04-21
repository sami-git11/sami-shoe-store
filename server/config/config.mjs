import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('shoe_store', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
