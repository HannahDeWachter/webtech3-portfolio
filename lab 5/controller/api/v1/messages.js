const Message = require('../../../models/Message');

const getAllMessages = (req, res) => {
    Message.find({}, (err, docs) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not messages"
            });
        }
        if (!err) {
            res.json({
                "message": docs
            });
        }
    });
}
const getIdMessage = (req, res) => {
    Message.findOne({ _id: req.params.id }, (err, docs) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not find the message with ID " + req.params.id
            });
        }
        if (!err) {
            res.json({
                "message": docs
            });
        }
    });
}
const create = (req, res) => {
    let message = new Message();
    message.text = req.body.message.text;
    message.user = req.body.message.user;
    message.save((err, doc) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not save this message"
            });
        }
        if (!err) {
            res.json({
                "message": doc
            });
        }
    });
}
// bron: https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate
const update = (req, res) => {
    Message.findOneAndUpdate({ _id: req.params.id }, { text: req.body.message.text }, (err, doc) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not update message with ID " + req.params.id
            });
        }
        if (!err) {
            res.json({
                "message": doc
            });
        }
    });
}
// bron: https://www.youtube.com/watch?v=GrKoJwJkBIg
const remove = (req, res) => {
    Message.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not delete message with ID " + req.params.id
            });
        }
        if (!err) {
            res.json({
                "message": "DELETED a message with ID " + req.params.id
            });
        }
    });
}
/* const getUserMessages = (req, res) => {
    Message.find({ "user": req.params.username }, (err, docs) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Could not find messages from " + req.params.username
            });
        }
        if (!err) {
            res.json({
                "message": docs
            });
        }
    });
} */

module.exports.getAllMessages = getAllMessages;
module.exports.getIdMessage = getIdMessage;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;
// module.exports.getUserMessages = getUserMessages;