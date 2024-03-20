const asyncHandler = require('express-async-handler');
const Messages = require('../models/messagesModel');

//@description Get messages
//@route GET /api/messages
//@access private

const getMessages = asyncHandler(async (req, res) => {
    const messages = await Messages.find({ user: req.user.id });
    res.status(200).json({ messages });
});

//@description Add messages
//@route POST /api/messages
//@access private

const addMessage = asyncHandler(async (req, res) => {
    if (!req.body.title) {
        res.status(400);
        throw new Error('Please add a text field');
    }
    const message = await Messages.create({
        title: req.body.title,
        author: req.body.author,
        body: req.body.body,
        user: req.user.id,
    });
    res.status(200).json({ message });
});

//@description update messages
//@route PUT /api/messages/id
//@access private

const updateMessage = asyncHandler(async (req, res) => {
    const message = await Messages.findById(req.params.id);

    if (!message) {
        res.status(400);
        throw new Error('Message not found');
    }

    const updatedMessage = await Messages.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        }
    );

    res.status(200).json(updatedMessage);
});

//@description Delete messages
//@route DELETE /api/messages/id
//@access private

const deleteMessage = asyncHandler(async (req, res) => {
    const message = await Messages.findById(req.params.id);

    if (!message) {
        res.status(400);
        throw new Error('Message not found');
    }

    await message.deleteOne();

    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getMessages,
    addMessage,
    updateMessage,
    deleteMessage,
};
