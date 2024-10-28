


import express from 'express';
const app = express();
const PORT = 3000;

import data from '../src/data.js';
import Corn_allData from './Corn_allData.js';
import CornProduct from './CornProduct.js';

// GET route

app.get('/', (req, res) => {
    res.status(200).json("Welcome To Bindu Agro API Data");
});


app.get('/all', (req, res) => {
    res.status(200).json(Corn_allData);
});

app.get('/corn', (req, res) => {
    res.status(200).json(CornProduct);
});

// GET Product data 
app.get('/product', (req, res) => {
    res.status(200).json(data);
});



// Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });



const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(`Listening at port ${port}`));
