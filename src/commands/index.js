const admin = require('./admin');
const info = require('./info');
const owner = require('./owner');
const logging = require('./logging');

const events_categories = [
    admin,
    info,
    owner,
    logging
];

var to_export = [];
for(const events_categorie of events_categories) {
    for(const event of events_categorie) {
        to_export.push(event);
    };
};

module.exports = to_export;