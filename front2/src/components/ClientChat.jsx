import { useEffect, useState } from "react";
import initionClient from "../utils/socket/initialClient.ts";
import socket from "../utils/stores/socket.ts";
import t from '../assets/Frame 6.png'
import { io } from "socket.io-client";
import client from '../utils/stores/client.ts'
import { socketConfig } from "../utils/socket/config.ts";
const { observer } = require("mobx-react-lite");
const { default: clientLine } = require("../utils/socket/clientLine.ts");

const ClientChat = observer(()=>{
    const [socket, setSocket]=useState(null)
    useEffect(()=>{
        const yt = io(socketConfig.host)
        setSocket(yt)
        yt.on('answer',(res)=>{
            client.setmessagesChat(2,res.message)
        })
    },[])
    return <div className="mini-chat">
        <div className="chat">
            {client.getmessagesChat()!=undefined?
            (client.getmessagesChat().map(r=>{
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
            value={client.getMessage()} 
            onChange={(e)=>{client.setMessage(e.target.value)}}
            onKeyDown={(e)=>{
                if(e.key=='Enter'&& !e.shiftKey){
                    clientLine(socket)
                    client.setMessage('')
                }
                }}
            type="text"
            id=""></textarea>
            <img src={t} alt="" />
        </div>
    </div>
})
export default ClientChat