/* eslint-disable no-console */

const { startServer } = require("next/dist/server/lib/start-server");

const port = Number(process.env.PORT || 3010);
const hostname = process.env.HOST || "127.0.0.1";

startServer({
  dir: process.cwd(),
  isDev: true,
  hostname,
  port,
  allowRetry: true
})
  .then(() => console.log("READY"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

