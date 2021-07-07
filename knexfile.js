module.exports = {
    client: "sqlite3",
    useNullAsDefault: true,
    connection:{
        filename: "./database/auth.db3",
    },
    migrations:{
        directory: "./database/migrations",
    },
    seeds: {
        director: "./database/seeds",
    },
    pool: {
        afterCreate: (conn, done) => {
            conn.run("PRAGMA foreign_keys = on", done)
        },
    },
}