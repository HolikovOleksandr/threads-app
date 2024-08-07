export default () => ({
  port: +process.env.PORT || 2999,
  db: {
    port: +process.env.DB_PORT || 5432,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: process.env.DB_NAME,
    url: process.env.DB_URL,
  },
});
