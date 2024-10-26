import client from '../stores/client.ts'
import socketStore from '../stores/socket.ts'
import { actions } from './actions.ts'
const clientLine=(socket)=>{
    
    if(socket){
        const sessionid= localStorage.getItem('sessionid');
     
        socket.emit(actions.question,{message: client.getMessage(), sessionid});
        client.setmessagesChat(1,client.getMessage())
    }
}
export default clientLine