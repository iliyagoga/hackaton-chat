import { observer } from "mobx-react-lite";
import r from '../assets/Icons_sibintek 1.png'
import m from '../assets/Vector (1).png'
import AdminChat from "../components/AdminChat";
import { useEffect, useState } from "react";
import socket from "../utils/stores/socket.ts";
import assistent from "../utils/stores/assistent.ts";
import { socketConfig } from "../utils/socket/config.ts";
import { io } from "socket.io-client";
import Profile from "../components/Profile.jsx";
import Base from "../components/Base.jsx";
const Chat = observer(()=>{
    useEffect(()=>{
        const yt = io(socketConfig.host)
        socket.setSocket(yt)
        yt.on('@clientLabel',(req)=>{
            assistent.setLabel(req.message, req.client)
        })
        
       
    },[])
    const [profile,setProfile]=useState(false)
    const [base,setBase]=useState(false)
    return <div className="chat-admin">
        <div className="sidebar">
            <div className="logo">
                <img src={r} alt="" />
            </div>
            <div className="labels">
                {assistent.getLabels().map(v=>{
                    return <div className="label" onClick={()=>{
                        const yt=socket.getSocket()
                        yt.emit('changeRoom',{oldRoom: assistent.getRoom(), newRoom: v.socketId})
                        assistent.setRoom(v.socketId)
                        assistent.clearMessages()
                    }}>
                        <span>#{v.socketId.substring(0,5)}</span>
                        <p>{v.message}</p>
                    </div>
                })}
            </div>
        </div>
        <div className="middle">
            <div className="header">
                <img src={m} alt="" onClick={()=>{
                    setProfile(!profile)
                    setBase(false)
                    }}/>
            </div>
            <AdminChat></AdminChat>
        </div>
        {profile?
            <Profile base={base} setBase={setBase} setProfile={setProfile}></Profile>
        :''}
        {base?
            <Base></Base>
        :''}
        
    </div>

})

export default Chat