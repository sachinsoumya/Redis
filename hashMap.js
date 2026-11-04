const client = require("./Client");

// console.log(client);

async function init() {
  const res1 = await client.hset("bike:1", {
    model: "Deimos",
    brand: "Ergonom",
    type: "Enduro bikes",
    price: 4972,
  });
  console.log(res1);

  const res2 = await client.hget("bike:1", "model");

  console.log(res2);

  const res3 = await client.hget("bike:1", "brand");

  console.log(res3);

  const resDel = await client.del("bike:1");

  console.log(resDel);

  const resNew = await client.hset("bike:1", {
    name: "Activa",
    brand: "Honda",
    price: 100000,
  });

  console.log(resNew);

  const resInr = await client.hincrby("bike:1", "price", 10000);

  console.log(resInr);

  const resDcr = await client.hincrby("bike:1", "price", -20000);

  console.log(resDcr);

  const res4 = await client.hgetall("bike:1");

  console.log(res4);

  const res5 = await client.hincrby("bike:1:stat", "rides", 1);
  const res6 = await client.hincrby("bike:1:stat", "rides", 1);
  const res7 = await client.hincrby("bike:1:stat", "rides", 1);

  const res8 = await client.hincrby("bike:1:stat", "owner", 1);

  const res9 = await client.hmget("bike:1", ["price", "brand"]);

  console.log(res9);

  console.log(res8);

  console.log(res5);

  // const res10 = await client.hpexpire("bike:1", 30, "FIELDS", 1, "brand");

  // console.log(res10);

  const res11 = await client.hset("bike:1", "color", "red");

  console.log(res11);

  const res12 = await client.hget("bike:1", "color");

  console.log(res12);

  const res14 = await client.hpexpire(
    "bike:1",
    30 * 1000,
    "FIELDS",
    1,
    "color",
  );

  console.log(res14);

  const res15 = await client.httl("bike:1", "FIELDS", 1, "brand");

  console.log(res15);

  const res16 = await client.hpttl("bike:1", "FIELDS", 1, "color");

  console.log(res16);

  const expireAt = Math.floor(Date.now() / 1000) + 0.5 * 60 * 60;

  const res17 = await client.hexpireat(
    "bike:1",
    expireAt,
    "FIELDS",
    1,
    "color",
  );

  console.log(res17);

  const res18 = await client.hexpiretime("bike:1", "FIELDS", 1, "color");

  console.log(res18);

  // const res13 = await client.hexpire("bike:1" , 30 , "FIELDS" , 2 , "color" , "price");

  // console.log(res13);

  // await client.hset("hfoo", "hbar", "hfoobar");

  // await client.hexpire("hfoo", 60, "FIELDS", 1, "hbar");
}

init();
