//--Create's server on a local port
const WebSocket = require('ws')
const wss = new WebSocket.Server({port: 8080}, ()=>{
    console.log('Server started')
})


//--When the server sends a message this sends the message to all clients
wss.on('connection', (ws)=>{
    ws.on('message', (data)=>{
        console.log('data received %o', data.toString())
        
        wss.clients.forEach((client) =>{
            if (client.readyState === WebSocket.OPEN) {
                client.send(data.toString())
            }
        })
        })
    })

//Sends a message that the Server is up
wss.on('listening', ()=>{
    console.log('Server is listening on port 8080')
})