
const { assistent } = require("./assistent");
const { question } = require("./question");

function onConnection(socket,io){
    socket.heartbeatTimeout =20
    //инициализация сокетов
    question(socket,io)
    assistent(socket,io)
    // //обработчики обычной переписки
    // joinRoom(socket,io)
    
    // //обработчики чата
    // joinChat(socket,io)
}
module.exports={onConnection}