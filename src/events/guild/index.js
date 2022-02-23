const channels = require('./channels');
const emojis = require('./emojis');
const invites = require('./invites');
const others = require('./others');
const roles = require('./roles');
const stages = require('./stages');
const stickers = require('./stickers');
const threads = require('./threads');

const events_categories = [
    channels,
    emojis,
    invites,
    others,
    roles,
    stages,
    stickers,
    threads
];

var to_export = [];
for(const events_categorie of events_categories) {
    for(const event of events_categorie) {
        to_export.push(event);
    };
};

module.exports = to_export;