import { useEffect } from "react";
import initSocket from "../utils/socket/initSOcket.ts";
import ClientChat from "../components/ClientChat.jsx";
import socket from "../utils/stores/socket.ts";
import y from '../assets/Frame 44 (1).png'
const { observer } = require("mobx-react-lite");

const Mean = observer(()=>{

    return <div >
        <ClientChat></ClientChat>
    </div>
})

export default Mean