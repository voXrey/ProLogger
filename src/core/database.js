const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');


class mydatabase {

    constructor(filepath) {
        this.filepath = filepath
    }

    async openDb() {
        return sqlite.open({
          filename: this.filepath,
          driver: sqlite3.Database
        })
    }

    async closeDb(db) {
        db
    }

    async request(request, args) {
        const db = await this.openDb();
        await db.run(request, args);
        await db.close();
    }

    async getOne(request, args) {
        db = await this.openDb();
        const result = await db.get(request, args);
        await db.close();
        return result;
    }

    async getAll(request, args) {
        db = await this.openDb();
        const result = await db.all(request, args);
        await db.close();
        return result;
    }
}

const database = new mydatabase('./src/data/database.sqlite3');
module.exports = database;