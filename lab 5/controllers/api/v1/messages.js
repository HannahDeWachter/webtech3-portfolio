const getAllMessages = (req, res) => {
    res.send('{ “message”: “GETTING messages” }');
}
const getIdMessage = (req, res) => {
    res.send('{ “message”: “GETTING message with ID ” }' + req.params.id);
}
const create = (req, res) => {
    res.send('{“message”: “POSTING a new message for user Pikachu”}');
}
const update = (req, res) => {
    res.send('{“message”: “UPDATING a message with ID ”}' + req.params.id);
}
const remove = (req, res) => {
    res.send('{“message”: “DELETING a message with ID ”}' + req.params.id);
}
const getUserMessages = (req, res) => {
    res.send('{“message”: “GETTING message for username ”}' + req.params.username);
}

module.exports.getAllMessages = getAllMessages;
module.exports.getIdMessage = getIdMessage;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;
module.exports.getUserMessages = getUserMessages;