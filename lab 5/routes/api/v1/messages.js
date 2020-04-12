const express = require('express')
const router = express.Router();
const messagesController = require('../../../controller/api/v1/messages')

router.get('/', messagesController.getAllMessages); // "/api/v1/messages"
router.get('/:id', messagesController.getIdMessage); // "/api/v1/messages/:id"
router.post('/', messagesController.create); // "/api/v1/messages"
router.put('/:id', messagesController.update); // "/api/v1/messages/:id"
router.delete('/:id', messagesController.remove); // "/api/v1/messages/:id"
// router.get('/user/:username', messagesController.getUserMessages); // "/api/v1/messages/?user=username"

module.exports = router;