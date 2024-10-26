const { getValue, setValue } = require("node-global-storage");
const { Assistent } = require("../models/model");
const assistent=  (socket,io)=>{
    let assistent=null
    socket.on('assistent',async (req)=>{
        const c= await Assistent.count()
        if(c>0){
            const user= await Assistent.findAll({limit:1})

            Assistent.update({socketId:socket.id},{where:{id:user[0].id}})
            
        }else{
           Assistent.create({socketId:socket.id})
        }
       
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