import { observer } from "mobx-react-lite";
import r from '../assets/Icons_sibintek 1.png'
import { io } from "socket.io-client";
import AdminChat from "../components/AdminChat";
const Chat = observer(()=>{
    return <div className="chat-admin">
        <div className="sidebar">
            <div className="logo">
                <img src={r} alt="" />
            </div>
            <div className="labels">
                <div className="label">21212</div>
                <div className="label">21212</div>
                <div className="label">21212</div>
                <div className="label">21212</div>
                <div className="label">21212</div>
            </div>
        </div>
        <AdminChat></AdminChat>
    </div>

})

export default Chat