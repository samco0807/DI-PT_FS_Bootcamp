const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'alliance',
        database: 'fitnessclub',
        port: 5432
    }
});

export default knex