const express=require('express')
require('dotenv').config()
const cors=require('cors')
const e = require('express')
const { onConnection } = require('./socketcore/mean')
const app=express()
app.use(express.json())
app.use(cors());
let io

async function start(){
    try {
        app.timeout = 20000
        let server=app.listen(5005,()=>{console.log('Сервер запущен')})
        io=require('socket.io')(server,{
            cors: {
              origin: '*'
            }
          })
        io.sockets.on('connection',(socket)=>onConnection(socket,io))
    } catch (error) {
        console.log(error)
    }
}
start()