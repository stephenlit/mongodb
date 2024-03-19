const asyncHandler = require('express-async-handler');

//@description Get messages
//@route GET /api/messages
//@access private

const getMessages = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get all messages'});
});

//@description Add messages
//@route POST /api/messages
//@access private

const addMessage = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field');
    }
    res.status(200).json({message: 'Add message'});
});

//@description update messages
//@route PUT /api/messages/id
//@access private

const updateMessage = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update message ${req.params.id}`});
});

//@description Delete messages
//@route DELETE /api/messages/id
//@access private

const deleteMessage = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete message ${req.params.id}`});
});

module.exports = {
    getMessages,
    addMessage,
    updateMessage,
    deleteMessage,
}