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
    async closeDb(db) {
        db
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

    async getGuildPrefix(guild_id) {
        var result = await this.getOne(`SELECT prefix FROM settings WHERE guild_id = ?`, [guild_id]);
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
        var result = await this.getOne(`SELECT * FROM lang WHERE text_id = ?`, [text_id])
        return result[langage];
    }
}

const database = new mydatabase('./src/data/database.sqlite3');
module.exports = database;