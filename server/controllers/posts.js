import express from 'express';
import mongoose from 'mongoose';

import PostTransaction from '../models/postTransactions.js';

const router = express.Router();

export const getTransaction = async (req, res) => { 
    const { page, id } = req.query;  // get the transaction ID and page no. requested
    
    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
    
        const total = await PostTransaction.findById(id).countDocuments();
        const posts = await PostTransaction.findById(id).sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

        res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}


export default router;