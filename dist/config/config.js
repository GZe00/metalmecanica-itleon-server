"use strict";

require("dotenv").config();

module.exports = {
  development: {
    username: process.env.CF_USERNAME,
    password: process.env.CF_PASSWORD,
    database: process.env.CF_DATABASE,
    host: process.env.CF_HOST,
    dialect: process.env.CF_DIALECT
  },
  test: {
    username: "postgres",
    password: "root",
    database: "postgres",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "postgres",
    password: "root",
    database: "postgres",
    host: "127.0.0.1",
    dialect: "postgres"
  }
};