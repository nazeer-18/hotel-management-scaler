const connectToMongo = require('./db');
const express = require('express');

connectToMongo();

const app = express();
const PORT = 7000;

// Middleware
app.use(express.json());

// Routes
// Define your routes here
app.get('/',(req,res)=>{
    res.send('Hellodscdvfbgnh ')
})
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
