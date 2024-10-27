

function question(socket,io){
    socket.on('question',(req)=>{
       io.emit('@clientLabel',{message: req, client: socket.id})
       io.to(socket.id).emit('@clientMessage',req)
    })

    socket.on('joinRoom',async (req)=>{
       
    })
}
module.exports={question}