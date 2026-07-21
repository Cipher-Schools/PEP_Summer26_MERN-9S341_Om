// const express = require('express');
import express from "express";
import "dotenv/config";
import path from 'path';
import { fileURLToPath } from "url";
import authRoutes from './routes/authRoutes.js';
import courseRoutes from './routes/courseRoutes.js';
// const fs = require('fs/promises');
// require('dotenv').config();
// const path = require('path');


const port = process.env.PORT;

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname =  path.dirname(__filename);

export const coursePath = path.join(__dirname, '../data/courses.json');
export const userPath = path.join(__dirname, '../data/users.json');

app.use('/auth', authRoutes);

app.use('/courses', courseRoutes);

// console.log('directory path',__dirname);
// console.log('file path',__filename);

// app.get('/',(req, res) => {
//     res.json({ message: 'Hello' });
//     return;
// })




app.get('my-courses', (req, res) => {
    // complete this
})


app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})