//messageRoutes
const express = require('express');
const router = express.Router();

const { protect } = require('../middleware/authMiddleware');

const {
    getMessages,
    addMessage,
    updateMessage,
    deleteMessage,
} = require('../controller/messageController');

router
    .route('/')
    .get(protect, getMessages)
    .post(protect, addMessage);
router
    .route('/:id')
    .delete(protect, deleteMessage)
    .put(protect, updateMessage);

module.exports = router;
