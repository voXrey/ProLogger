const { Database } = require('sqlite3')
const { open } = require('sqlite')


class mydatabase {

    constructor(filepath) {
        this.filepath = filepath
    }

    async openDb() {
        return open({
          filename: this.filepath,
          driver: Database
        })
    }

    async request(request, args) {
        var db = await this.openDb();
        await db.run(request, args);
        await db.close();
    }
    async getOne(request, args) {
        var db = await this.openDb();
        const result = await db.get(request, args);
        await db.close();
        return result;
    }
    async getAll(request, args) {
        var db = await this.openDb();
        const result = await db.all(request, args);
        await db.close();
        return result;
    }

    async checkGuild(guild_id) {
        await this.request('INSERT OR IGNORE INTO logging(guild_id) VALUES(?)', [guild_id]);
        await this.request('INSERT OR IGNORE INTO settings(guild_id) VALUES(?)', [guild_id]);
    }

    async getGuildPrefix(guild_id) {
        const result = await this.getOne(`SELECT prefix FROM settings WHERE guild_id = ?`, [guild_id]);
        return result.prefix;
    }
    async setGuildPrefix(guild_id, prefix) {
        await this.request(`UPDATE settings SET prefix = ? WHERE guild_id = ?`, [prefix, guild_id]);
    }

    async getGuildLangage(guild_id) {
        var result = await this.getOne(`SELECT langage FROM settings WHERE guild_id = ?`, [guild_id]);
        return result.langage;
    }
    async setGuildLangage(guild_id, langage) {
        await this.request(`UPDATE settings SET langage = ? WHERE guild_id = ?`, [langage, guild_id]);
    }

    async getText(langage, text_id) {
        const result = await this.getOne(`SELECT * FROM lang WHERE text_id = ?`, [text_id]);
        return result[langage];
    }

    async getLogger(guild_id, logger_name) {
        const result = await this.getOne(`SELECT ${logger_name} FROM logging WHERE guild_id = ?`, [guild_id]);
        return JSON.parse(result.messages);
    }
    async setLogger(guild_id, logger_object) {
        const logger_string = JSON.stringify(logger_object);
        await this.getOne(`UPDATE logging SET ${logger_object.name} = ? WHERE guild_id = ?`, [logger_string, guild_id]);
    }
    async addChannelToLogger(guild_id, channel_id, logger_name) {
        var logger = await this.getLogger(guild_id, logger_name);
        if(logger.channels.includes(channel_id)) return;
        else {
            logger.channels.push(channel_id);
            await this.setLogger(guild_id, logger);
        };
    }
    async removeChannelFromLogger(guild_id, channel_id, logger_name) {
        var logger = await this.getLogger(guild_id, logger_name);
        if(!logger.channels.includes(channel_id)) return;
        else {
            const filtered = logger.channels.filter(function(value, index, arr){ 
                return value !== channel_id;
            });
            logger.channels = filtered;
            await this.setLogger(guild_id, logger);
        };
    };
}

const database = new mydatabase('./src/data/database.sqlite3');
module.exports = database;