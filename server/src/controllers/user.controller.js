const userModel = require("../models/user.model")

exports.getAllUsers = (req, res) => {
    res.json(userModel.getAllUsers());
  };
  
  exports.getUserById = (req, res) => {
    const user = userModel.getUserById(parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  };
  
  exports.createUser = (req, res) => {
    const newUser = userModel.createUser(req.body);
    res.status(201).json(newUser);
  };
  
  exports.deleteUser = (req, res) => {
    userModel.deleteUser(parseInt(req.params.id));
    res.status(204).send();
  };