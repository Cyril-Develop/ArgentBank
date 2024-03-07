const mongoose = require('mongoose')
require('dotenv').config()
const databaseUrl = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster1.cqdio0o.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DATABASE_NAME}`

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
