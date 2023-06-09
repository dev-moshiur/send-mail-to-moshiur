


const express = require('express');
const router = express.Router();
const Message = require('../models/Message');


//cREATE

//Update
router.put('/:id', 

async (req, res) => {
try {
const updateMessage = await Message.findByIdAndUpdate(
req.params.id,
{ $set: req.body },
{ new: true }
);
res.status(200).json('Message Has Been Updated');
} catch (error) {
res.status(500).json(error);
}
});
//Get Some
router.get('/', async (req, res) => {
try {
const result = await Message.find({ ...req.query });
res.status(200).json(result);
} catch (error) {
res.status(500).json(error);
}
});
//Get All
router.get('/', async (req, res) => {
try {
const result = await Message.find();
res.status(200).json(result);
} catch (error) {
res.status(500).json(error);
}
});
//Get one
router.get('/:id', async (req, res) => {
try {
const result = await Message.findById(req.params.id);
res.status(200).json(result);
} catch (error) {
res.status(500).json(error);
}
});
//delete
router.delete('/:id', async (req, res) => {
try {
await Message.findByIdAndDelete(req.params.id);
res.status(200).json('Message Has Been Deleted');
} catch (error) {
res.status(500).json(error);
}
});
module.exports = router;