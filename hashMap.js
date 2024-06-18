const client = require('./client');

async function init() {
     
    const field = await client.hset(
        'bike:1',
        {
            model: 'ninja',
            name :'kawasaki',
            color: 'red',
            price: 1000,
        },
        'bike:2',
        {
            model: 'ktmNinja2',
            name :'kawasaki2',
            color: 'blue',
            price: 2000,
        }, 

    )
    console.log("field >>>>>>", field);

    const model = await client.hget('bike:1','model');
    console.log("model >>>>>>", model);

    const name = await client.hget('bike:1','name');
    console.log("name >>>>>>", name);

    const color = await client.hget('bike:1','color');
    console.log("color >>>>>>", color);

    const price = await client.hget('bike:1','price');
    console.log("price >>>>>>", price);
}

init().then(() => {
    console.log("Done");
    client.quit(); // Close the connection to Redis when done
}).catch(err => {
    console.error("Error:", err);
    client.quit(); // Ensure the connection is closed in case of error
});