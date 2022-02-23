const bot = require('./bot');
const guild = require('./guild');
const guild_events = require('./guild_events');
const members = require('./members');
const messages = require('./messages');
const moderation = require('./moderation');
const voice = require('./voice');

const events_categories = [
    bot,
    guild,
    guild_events,
    members,
    messages,
    moderation,
    voice
];

var to_export = [];
for(const events_categorie of events_categories) {
    for(const event of events_categorie) {
        to_export.push(event);
    };
};

module.exports = to_export;