const express = require ('express')
const axios = require ('axios')
const client = require('./client')

const app = express()


app.get('/krish-redis-implementation', async (req, res) => {
    
    const cacheResponse = await client.get('todo');
    if (cacheResponse) {
        console.log('cache hit')
        return res.status(200).json({ code: 200, message: "data found succesfully", result: JSON.parse(cacheResponse) })
    }
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
    await client.set('todo', JSON.stringify(data));
    await client.expire('todo', 30);

    return res.status(200).json({ code: 200, message: "data found succesfully", result: data })
})


app.get('/krish-redis-Demo', async (req, res) => {

    const cacheResponse = await client.get('todo');
    if (cacheResponse) {
        console.log('cache hit')
        return res.status(200).json({ code: 200, message: "data found succesfully", result: JSON.parse(cacheResponse) })
    }
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    await client.set('todo', JSON.stringify(data));
    await client.expire('todo', 30);

    return res.status(200).json({ code: 200, message: "data found succesfully", result: data })
})


app.listen(9000, () => {
    console.log('Server is running on port 9000')
})