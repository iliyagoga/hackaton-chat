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
                    const list = await fetch(config.base+config.analyze, {
                        method: 'POST',
                        
                        body:value})
                    const res= await list.json()
                        base.setBase(res)
                }
            }}/>
        </div>
        <div className="list">
          {base.getBase().length>0?base.getBase().map(v=>{
            return <div className="base-label">
                <span>{v.issue_answer}</span>
            </div>
          }):''}
        </div>
    </div>
})

export default Base