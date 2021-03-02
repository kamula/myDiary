const sequelize = require('sequelize')

const connectDB = async() => {
    const { DB_NAME, USERNAME, PASSWORD } = process.env
    const conn = await new sequelize(DB_NAME, USERNAME, PASSWORD, {
        host: 'localhost',
        dialect: 'postgres'
    })
    console.log(`database connected successfully`.blue.underline)
}
module.exports = connectDB