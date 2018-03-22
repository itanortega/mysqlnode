const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '181.62.161.249',
    user: 'root',
    password: 'YlMA124JUV33RiO',
    database: 'news_portal'
  });
}