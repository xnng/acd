const Sequelize = require('sequelize');
const sequelize = require('./config');

const AppVersion = sequelize.define(
  'app_version',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    updateText: {
      type: Sequelize.STRING,
      comment: '更新信息',
    },
    packageName: {
      type: Sequelize.STRING,
      notNull: true,
      comment: '包名',
    },
    fileName: {
      type: Sequelize.STRING,
      notNull: true,
      comment: '文件名',
    },
    downLoadCount: {
      type: Sequelize.BIGINT,
      defaultValue: 0,
      comment: '下载次数',
    },
    size: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      comment: '大小，单位MB',
    },
    versionCode: {
      type: Sequelize.BIGINT,
      notNull: true,
      comment: '版本号',
    },
    versionName: {
      type: Sequelize.STRING,
      notNull: true,
      comment: '版本名称',
    },
  },
  { timestamps: true, underscored: false, comment: '版本信息' },
);

module.exports = AppVersion;
