const Message = require('../../../models/Message');

const getAllMessages = (req, res) => {
    Message.find({}, (err, docs) => {
        if (!err) {
            res.json({
                "status": "succes",
                "message": docs
            });
        }
    });
}
const getIdMessage = (req, res) => {
    Message.find({ _id: req.params.id }, (err, docs) => {
        if (!err) {
            res.json({
                "status": "succes",
                "message": docs
            });
        }
    });
}
const create = (req, res) => {
    let message = new Message();
    message.text = req.body.text;
    message.user = req.body.user;
    message.save((err, doc) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not save this message"
            });
        }
        if (!err) {
            res.json({
                "status": "succes",
                "message": doc
            });
        }
    });
}
const update = (req, res) => {
    res.json({
        "message": "UPDATING a message with ID " + req.params.id
    });
}
const remove = (req, res) => {
    res.json({
        "message": "DELETING a message with ID " + req.params.id
    });
}
const getUserMessages = (req, res) => {
    Message.find({ "user": req.params.username }, (err, docs) => {
        if (!err) {
            res.json({
                "status": "succes",
                "message": docs
            });
        }
    });
}

module.exports.getAllMessages = getAllMessages;
module.exports.getIdMessage = getIdMessage;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;
module.exports.getUserMessages = getUserMessages;