const threadCreate = require('./threadCreate');
const threadDelete = require('./threadDelete');
const threadMemberUpdate = require('./threadMemberUpdate');
const threadUpdate = require('./threadUpdate');

module.exports = [
    threadCreate,
    threadDelete,
    threadMemberUpdate,
    threadUpdate
]