const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            username: "John",
            age: 26
        }, 
        {
            username: "Earl",
            age: 30
        }
    ])
});

modules.exports = router; 
