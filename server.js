const express = require('express');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');

// Load environment variables

const app = express()
const PORT = process.env.PORT || 5000

dotEnv.config();
 app.use(bodyParser.json());

 mongoose.connect(process.env.MONGO_URI) 
 .then(() => {
    console.log("Mongo connection established");
})
.catch((error) => {
    console.log("Error connecting to MongoDB:", error);
});


app.use('/employees', employeeRoutes)

// // Middleware

// app.use('/employees', employeeRoutes); // Uncomment this line if you want to use employeeRoutes

app.listen(PORT, () => {
    console.log(`Server started and running on port ${PORT}`);
});

// app.get('/home', (req, res) => {
//     res.send('Welcome to the home route');
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
// });
