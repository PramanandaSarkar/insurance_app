const messageModel = require("../models/message.model")

exports.getAllMessages = (req, res) => {
    res.json(messageModel.getAllMessages());
  };
  
  exports.getMessageById = (req, res) => {
    const message = messageModel.getMessageById(parseInt(req.params.id));
    if (!message) return res.status(404).json({ error: 'Message not found' });
    res.json(message);
  };
  
  exports.createMessage = (req, res) => {
    const newMessage = messageModel.createMessage(req.body);
    res.status(201).json(newMessage);
  };
  
  exports.deleteMessage = (req, res) => {
    messageModel.deleteMessage(parseInt(req.params.id));
    res.status(204).send();
  };