const { Pool } = require('pg');

// Replace these values with your PostgreSQL credentials
const pool = new Pool({
  user: 'whiteboard_user',
  host: 'localhost',
  database: 'collaborative_whiteboard',
  password: 'wupass',
  port: 5432,
});

module.exports = pool;