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
    "username": "freedbtech_greenHomeDB",
    "password": "process.env.DB_PASSWORD",
    "database": "freedbtech_greenHomeDB",
    "host": "freedb.tech",
    "dialect": "mysql"
  }
}
