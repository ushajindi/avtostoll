import React, {useEffect, useState} from "react";
import {Button, Spin} from "antd";
import axios from 'axios'

const Time=(props)=>{
    const [tim,setTime]=useState([])
    const times=[]
    for (let i=7;i<=23;++i){
        times.push(`${i}:00`)
        for (let j=20;j<=20;j++){
            times.push(`${i}:${j}`)
        }
        for (let j=40;j<=40;j++){
            times.push(`${i}:${j}`)
        }
    }
    const [loadindg,setLoading]=useState(true)
    useEffect(()=>{
        axios.get('api').then((promise)=>{
            setLoading(false)
            promise.data.map(el=>{
               if (el.data===props.data){
                   el.info.map(info=>{
                       if (info.service===props.service && info.address === props.address){
                           setTime(times.filter(t=>t!=info.time))
                       }
                   })
               }else {
                   setTime(times)
               }
            })
            }
        ).catch(e=>{
            props.setEmodal(true)
        })
        }
    ,[])

        const onTime=(el)=>{
            props.setTime({time:el,vis:false})
        }

    return(
        <div style={{display:'flex',flexWrap:'wrap',overflow:'scroll',height:'300px',justifyContent:'center'}}>
            {loadindg?<Spin style={{marginTop:'50px'}}/> : <>{tim.map(el=><>
                <div style={{width:'30%',margin:'5px'}}>
                   <Button onClick={()=>onTime(el)} style={{width:'80px'}} type='primary'>{el}</Button>
                </div>
            </>)}</>}
        </div>
    )
}
export default Time