const itemsModel = require('../models/itemsModel');

exports.getAllItems = (req, res) => {
  res.json(itemsModel.getAll());
};

exports.getItemById = (req, res) => {
  const item = itemsModel.getById(req.params.id);
  item ? res.json(item) : res.status(404).json({ error: 'Item not found' });
};

exports.createItem = (req, res) => {
  const { id, apartment } = req.body;

  if (!apartment) {
    return res.status(400).json({ error: 'Apartment is required' });
  }

  const newItem = {
    id: id || Date.now().toString(),
    apartment,
  };

  res.status(201).json(itemsModel.create(newItem));
};

exports.updateItem = (req, res) => {
  const updated = itemsModel.update(req.params.id, req.body);
  updated ? res.json(updated) : res.status(404).json({ error: 'Item not found' });
};

exports.deleteItem = (req, res) => {
  const deleted = itemsModel.delete(req.params.id);
  deleted ? res.json(deleted) : res.status(404).json({ error: 'Item not found' });
};
