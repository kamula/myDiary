const sequelize = require('sequelize')

const connectDB = async() => {
    const { DB_NAME, USER_NAME, PASSWORD } = process.env


    // const url = `postgres://${USER_NAME}:${PASSWORD}@127.0.0.1:5432/${DB_NAME}`.replace(/\s/g, '')
    // const conn = await new sequelize(url)
    const conn = await new sequelize(DB_NAME, USER_NAME, PASSWORD, {
        host: 'localhost',
        dialect: 'postgres'
    });

    try {
        await conn.authenticate()
        console.log(`database connected successfully`.blue.underline)
    } catch (error) {
        console.error('Unable to connect to the database:', error);

    }
}
module.exports = connectDB