const client = require('./client');


async function init() {
    // Use JSON.stringify to store an object as a string in Redis
    await client.set('user:2', JSON.stringify({
        name: 'John',
        age: 30
    }));

    // Retrieve the value and parse it back to an object
    const user = await client.get('user:2');
    const parsedUser = JSON.parse(user);

    console.log("result >>>>>>", parsedUser);
}

init().then(() => {
    console.log("Done");
    client.quit(); // Close the connection to Redis when done
}).catch(err => {
    console.error("Error:", err);
    client.quit(); // Ensure the connection is closed in case of error
});