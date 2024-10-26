import { useState } from "react";
import base from "../utils/stores/base.ts";
import axios from 'axios'
import { config } from "../utils/config.ts";
const { observer } = require("mobx-react-lite");

const Base = observer(()=>{
    const [value, setValue] = useState('')
    return <div className="base">
        <div className="search">
            <input type="text" value={value} placeholder="Поиск" onChange={async (e)=>{
                setValue(e.target.value)
                
            }}
            onKeyDown={async (e)=>{
                if(e.key=='Enter'&& !e.shiftKey){
                    const list = await axios.get(config.base+config.analyze,{body:value})
                    console.log(list)
                }
            }}/>
        </div>
        <div className="list">
            {base.map(v=>{
                console.log(v)
            })}
        </div>
    </div>
})

export default Base