const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    password: 'lenin_zhiv',
    host: 'localhost',
    port: 5432,
    database: 'node_postgres'
});

module.exports = pool;