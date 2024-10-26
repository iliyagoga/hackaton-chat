import { useEffect, useState } from "react";
import t from '../assets/Frame 6.png'
import assistent from "../utils/stores/assistent.ts";
import socket from "../utils/stores/socket.ts";
const { observer } = require("mobx-react-lite");


const AdminChat = observer(()=>{
    useEffect(()=>{

        if(socket.getSocket()){
            const yt=socket.getSocket()
            yt.emit('assistent','ttt')
            yt.on('@clientMessage',(req)=>{
                assistent.setmessagesChat(2, req)
            })
            yt.on('@allMessagesClient',(req)=>{
                for(let message of req){
                    if(message.c==1){
                        message.c=2
                    }else{
                        message.c=1
                    }
                    console.log(message)
                    assistent.setmessagesChat(message.c, message.messageChat)
                }
            })
        }
        

    },[socket.getSocket()])
    return <div className="mini-chat">
        <div className="chat">
        {assistent.getmessagesChat()!=undefined?
            (assistent.getmessagesChat().map(r=>{
               if(r.c==2){
                return <div className="left">
                    <p>{r.messageChat}</p>
                </div>
               }else{
                return <div className="right">
                    <p>{r.messageChat}</p>
                </div>
               }
            }))
            :""}
        </div>
        <div className="textarea">
            <textarea 
            name="" 
            value={assistent.getMessage()} 
            onChange={(e)=>{assistent.setMessage(e.target.value)}}
            onKeyDown={(e)=>{
                if(e.key=='Enter'&& !e.shiftKey){
                    if(assistent.getMessage().length>0){
                        if(assistent.getRoom()){
                            if(socket.getSocket()){
                                const yt=socket.getSocket()
                                yt.emit('assistentMessage',{socketId:assistent.getRoom(),message:assistent.getMessage()})
                                assistent.setmessagesChat(1,assistent.getMessage())
                            }
                        }
                        assistent.setMessage('')
                    }
                }
                }}
            type="text"
            id=""></textarea>
            <img src={t} alt="" onClick={(e)=>{
                if(assistent.getMessage().length>0){
                    if(assistent.getRoom()){
                        if(socket.getSocket()){
                            const yt=socket.getSocket()
                            yt.emit('assistentMessage',{socketId:assistent.getRoom(),message:assistent.getMessage()})
                            assistent.setmessagesChat(1,assistent.getMessage())
                        }   
                    }
                    assistent.setMessage('')
             }
            }} />
        </div>
    </div>
})
export default AdminChat