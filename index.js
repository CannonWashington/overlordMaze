const WebSocket = require('ws')
const wss = new WebSocket.Server({port: 8080}, ()=>{
    console.log('Server started')
})

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
    
//wss.on('connection', (ws)=>{
//    ws.on('message', (data)=>{
//        console.log('data received %o', data.toString())
//        ws.send(data.toString())
//        })
//    })



wss.on('listening', ()=>{
    console.log('Server is listening on port 8080')
})