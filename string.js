const client = require("./Client");

async function init() {
  // await client.set('msg:3' , "hey from node.js redis")

//   await client.expire("msg:3", 10);
  const result = await client.get("msg:3");

  console.log(result);
}

init();
