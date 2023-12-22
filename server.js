const express = require("express");
const app = express();

// Export Mongo DB
const dbConfig = require('./mongodb')
// Export room API to Postman App 
const roomsRoute = require('./routes/roomsRoute')
// Export user API
const usersRoute = require('./routes/userRoute')
// Export booking room API
const bookingsRoute = require('./routes/bookingsRoute')

app.use(express.json())
app.use('/api/rooms', roomsRoute)
app.use('/api/users', usersRoute)
app.use('/api/bookings', bookingsRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Node server started using nodemon"));