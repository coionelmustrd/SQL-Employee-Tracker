const {Pool} = require('pg');

const db = new Pool({
    host: 'localhost',
    port: 5432,
})

module.exports = db