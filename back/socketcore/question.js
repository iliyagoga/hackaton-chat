const { clientCheck } = require("../api/utils/clientCheck")

function question(socket,io){
    socket.on('question',(req)=>{
       let api = [{
        "issue_answer":"text"
    }]

       socket.emit('answer',{message:api[0].issue_answer})
    })
}
module.exports={question}