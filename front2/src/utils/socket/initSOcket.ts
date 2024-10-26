import { io } from "socket.io-client";
import { socketConfig } from "./config.ts";
import  socketStore  from '../stores/socket.ts' 
const initSocket =()=>{
    const socket=io(socketConfig.host)
    socket.connect()
    socketStore.setSocket(socket);
}
export default initSocket