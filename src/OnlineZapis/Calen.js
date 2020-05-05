import React from "react";
import {Calendar} from "antd";


const Calen=(props)=>{
    const onSelect=(e)=>{
        props.setData({data:e.format("DD-MM-YYYY"),vis:false})
        console.log(e.format("DD-MM-YYYY"))
    }
    return(
        <div>
            <div className="site-calendar-demo-card">
                <Calendar fullscreen={false}
                          disabledDate={(e)=>{
                              let dat=new Date()
                              if (e.$M==dat.getMonth()||e.$M+1<=dat.getMonth()){
                                  return e.$D<dat.getDate() || e.$M+1<=dat.getMonth()

                              }

                          }}
                          onSelect={onSelect}
                />
            </div>
        </div>
    )
}
export default Calen
