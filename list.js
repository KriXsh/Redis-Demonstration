const client = require('./client');

async function init() {
     
    await client.lpush("message","helloword");
    await client.lpush("message", "hello from node.js");
    await client.lpush("message", "hello from redis");
    await client.lpush("message", "hello from ioredis");
    
    const result = await client.rpop("message")
    console.log("result >>>>>>", result, result.length, typeof result);

    const len = await client.llen("message");
    console.log("len >>>>>>", len);
    const blockmode = await client.blpop("message", 10);
    console.log("len >>>>>>", blockmode);
}

init().then(() => {
    console.log("Done");
    client.quit(); // Close the connection to Redis when done
}).catch(err => {
    console.error("Error:", err);
    client.quit(); // Ensure the connection is closed in case of error
});