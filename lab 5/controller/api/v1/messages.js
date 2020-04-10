const getAllMessages = (req, res) => {
    res.json({
        "message": "GETTING messages"
    });
}
const getIdMessage = (req, res) => {
    res.json({
        "message": "GETTING message with ID " + req.params.id
    });
}
const create = (req, res) => {
    res.json({
        "message": "POSTING a new message for user Pikachu"
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
    res.json({
        "message": "GETTING message for username " + req.params.username
    });
}

module.exports.getAllMessages = getAllMessages;