import client from '../stores/client.ts'
import socketStore from '../stores/socket.ts'
import { actions } from './actions.ts'
const initionClient=()=>{
    const socket=  socketStore.getSocket();
    if(socket){
        const sessionid= localStorage.getItem('sessionid');
        console.log(localStorage.getItem('sessionid'))
        socket.emit('initialClient',{sessionid})
        socket.on('@initialClient',(r)=>{
            localStorage.setItem('sessionid',r.sessionid)
        })

    }}
export default initionClient