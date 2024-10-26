import { useEffect, useState } from "react";
import initionClient from "../utils/socket/initialClient.ts";
import socket from "../utils/stores/socket.ts";
import t from '../assets/Frame 6.png'
import { io } from "socket.io-client";
import { socketConfig } from "../utils/socket/config.ts";
const { observer } = require("mobx-react-lite");
const {default: client} =require( "../utils/stores/client.ts");
const { default: clientLine } = require("../utils/socket/clientLine.ts");

const AdminChat = observer(()=>{
    useEffect(()=>{
        const yt = io(socketConfig.host)
        yt.on('answer',(res)=>{
            client.setmessagesChat(2,res.message)
        })
    },[])
    return <div className="mini-chat">
        <div className="chat">
            <div className="left">
                <p>text</p>
            </div>
            <div className="right">
                <p>text1</p>
            </div>
        </div>
        <div className="textarea">
            <textarea 
            name="" 
            value={client.getMessage()} 
            onChange={(e)=>{client.setMessage(e.target.value)}}
            onKeyDown={(e)=>{
                if(e.key=='Enter'&& !e.shiftKey){
                    clientLine(socket)
                }
                }}
            type="text"
            id=""></textarea>
            <img src={t} alt="" />
        </div>
    </div>
})
export default AdminChat