const stageInstanceCreate = require('./stageInstanceCreate');
const stageInstanceDelete = require('./stageInstanceDelete');
const stageInstanceUpdate = require('./stageInstanceUpdate');

module.exports = [
    stageInstanceCreate,
    stageInstanceDelete,
    stageInstanceUpdate
]