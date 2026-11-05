const client = require("./Client");

async function init() {
  const res1 = await client.zadd("myset", 60, "Oneis");

  const res2 = await client.zadd("myset", 20, "Twois");

  const res3 = await client.zadd("myset", 30, "Threeis");

  const resRange = await client.zrange("myset", 0 , -1);

  console.log(resRange);

  console.log(res1);
  console.log(res2);
  console.log(res3);
}

init();
