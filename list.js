const client = require("./Client");

async function init() {
  const responseBack =await client.lpush("bike:reapair" , "bike:2569" , "bike:3456" , "bike:67888");

  console.log(responseBack);

  const result2 = await client.lpop("bike:reapair");

  console.log(result2);

  // const result3 = await client.rpop("bike:reapair");

  // console.log(result3);

//   const result4 = await client.ltrim("bike:reapair", 0, 2);
//   console.log(result4);

  

  const resultLength = await client.llen("bike:reapair");

  console.log(resultLength);

 console.log(await client.type("bike:reapair"));
 console.log(await client.exists("bike:reapair"));

//  console.log(await client.del("bike:reapair"));

 const result1 = await client.lrange("bike:reapair", 0, -1);

  console.log(result1);
}

init();
