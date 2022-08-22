const config = require("config");

const { USER_NAME, NAME, HOST, PASSWORD, PORT } = config.DATA_BASE;
module.exports = {
  type: "mysql",
  username: USER_NAME,
  database: NAME,
  host: HOST,
  password: PASSWORD,
  port: PORT,
  synchronize: false,
  logging: false,
  extra: { charset: "utf8mb4" },
  entities: ["entities/**/*.entity.ts"],
  migrations: ["migrations/**/*.ts"],
  cli: { entitiesDir: "entities", migrationsDir: "migrations" },
};
