//messageRoutes
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({message: 'Get messages'});
});


router.post('/', (req, res) => {
    res.status(200).json({message: 'Add message'});
});


router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update message ${req.params.id}`});
});


router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete message ${req.params.id}`});
});

module.exports = router;