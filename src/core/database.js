import sqlite3 from 'sqlite3'
import { open } from 'sqlite'


class mydatabase {

    constructor(filepath) {
        this.filepath = filepath
    }

    async openDb () {
        return open({
          filename: this.filepath,
          driver: sqlite3.Database
        })
    }

    query(request, args) {
        db = await this.openDb();
        await db.exec(request, args);
        await db.close();
    }

    getOne(request, args) {
        db = await this.openDb();
        const result = await db.get(request, args);
        await db.close();
        return result;
    }

    getAll(request, args) {
        db = await this.openDb();
        const result = await db.all(request, args);
        await db.close();
        return result;
    }
}

const database = new mydatabase('./src/data/database.sqlite3');
module.exports = database;