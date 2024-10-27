
const assistent=  (socket,io)=>{
    let assistent=null
    socket.on('assistent',async (req)=>{
       
    })

    socket.on('changeRoom',(req)=>{
        socket.leave(req.oldRoom)
        socket.join(req.newRoom)
        io.to(req.newRoom).emit('@getMessages')
    })

    socket.on('assistentMessage',(req)=>{
        io.to(req.socketId).emit('answer',{message:req.message})
    })
    socket.on('getMessagesClient',(req)=>{
        io.to(socket.id).emit('@allMessagesClient',req)
    })



}


module.exports={assistent}