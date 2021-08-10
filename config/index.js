require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` })

module.exports = {
    username: process.env.DB_SMS_USER,
    password: process.env.DB_SMS_PASSWORD,
    database: process.env.DB_SMS_DATABASE,
    host: process.env.DB_SMS_HOST,
    dialect: process.env.DB_SMS_TYPE,
    // seed
    seederStorage: 'sequelize',
    seederStorageTableName: 'seeds',
    // migrations
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'migrations',
    define: {
        timestamps: false,
    },
}
