const messages = require('./messages');
const reactions = require('./reactions');

const events_categories = [
    messages,
    reactions
];

var to_export = [];
for(const events_categorie of events_categories) {
    for(const event of events_categorie) {
        to_export.push(event);
    };
};

module.exports = to_export;