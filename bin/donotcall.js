#!/usr/bin/env node
const yargs = require("yargs");
const { camelCase } = require("change-case");
const { DonotcallClient } = require("../");

(async () => {
  const command = camelCase(yargs.argv._[0]);
  delete yargs.argv._;
  const donotcall = new DonotcallClient();
  const result = await donotcall[command](Object.entries(yargs.argv).reduce((r, [ key, value ]) => {
    r[camelCase(key)] = value;
    return r;
  }, {}));
  console.log(require('util').inspect(result, { colors: true, depth: 15 }));
})().catch((err) => console.error(err));
