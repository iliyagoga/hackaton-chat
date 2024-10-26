import socket from "../utils/stores/socket.ts";
import d from '../assets/icons8-папка-96 1.svg'
import c from '../assets/icons8-чат-96 1.svg'
const { observer } = require("mobx-react-lite");

const Profile = observer(({base, setBase, setProfile})=>{
    return <div className="profile">
       <div className="header">
        <h1>Профиль</h1>
       </div>
       <div className="middle">
            <div className="avatar">
                <span>{socket.getSocket().id[0]}</span>
            </div>
            <div className="name">
                <span>{socket.getSocket().id.substr(0,10)}</span>
            </div>
            <div className="buttons">
                <div className="base" onClick={()=>{
                    setBase(!base)
                    setProfile(false)
                    }}>
                    <img src={d} alt="" />
                    <span>База знаний</span>
                </div>
                <div className="base">
                    <img src={c} alt="" />
                    <span>Чаты</span>
                </div>
            </div>
       </div>
    </div>
})

export default Profile