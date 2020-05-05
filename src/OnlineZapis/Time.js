import React from "react";
import {Button} from "antd";

const Time=(props)=>{
    let times=[]
        for (let i=7;i<=23;++i){
            times.push(`${i}:00`)
            for (let j=20;j<=20;j++){
                times.push(`${i}:${j}`)
            }
            for (let j=40;j<=40;j++){
                times.push(`${i}:${j}`)
            }
        }
        const onTime=(el)=>{
            props.setTime({time:el,vis:false})
        }


    return(
        <div style={{display:'flex',flexWrap:'wrap',overflow:'scroll',height:'300px',justifyContent:'center'}}>
            {times.map(el=><>
                <div style={{width:'30%',margin:'5px'}}>
                   <Button onClick={()=>onTime(el)} style={{width:'80px'}} type='primary'>{el}</Button>
                </div>
            </>)}
        </div>
    )
}
export default Time