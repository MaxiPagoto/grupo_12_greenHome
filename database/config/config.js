module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "greenhome",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },  
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USERNAM,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_USERNAME,
    "dialect": "mysql"
  }
}
