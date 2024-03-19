//messageRoutes
const express = require('express');
const router = express.Router();

const { getMessages, addMessage, updateMessage, deleteMessage } = require('../controller/messageController');

router.route('/').get(getMessages).post(addMessage);
router.route('/:id').delete(deleteMessage).put(updateMessage);


module.exports = router;