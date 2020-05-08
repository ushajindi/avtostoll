import React, {useEffect, useState} from "react"
import {Avatar, Button, Card, DatePicker, Form, Input, List, Radio, Select, Spin, TimePicker} from "antd";
import axios from 'axios'
import metro from './../media/img/metro.png'
import uslug from './../media/img/uslug.png'
import tim from './../media/img/time.jpg'
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";
import Calen from "./Calen";
import Time from "./Time";
import Oform from "./Oform";
import {NavLink} from "react-router-dom";
const { Option } = Select

const OnlineZ=()=> {
    const [address,setAddress]=useState({add:'',vis:true})
    const [usluga,setUsluga]=useState({usluga:'',vis:true})
    const [sdata,setSdata]=useState({data:'',vis:true})
    const [time,setTime]=useState({time:'',vis:true})
    const [form,setForm]=useState({name:'',tel:'',vis:true})
    const [load,setLoad]=useState(false)
    const [modal,setModal]=useState(false)
    const [emodal,setEmodal]=useState(false)
    const [suc,setSuc]=useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [suc])
    useEffect(()=>{
        if (form.name){
            setLoad(true)
            setSuc(true)
            const fvalue={
                'data': sdata.data,
                'time': time.time,
                'service':usluga.usluga,
                'name':form.name,
                'tel':form.tel,
                'address':address.add
            }
            axios.post('api',{fvalue},{headers:{"Content-Type" : "application/json"}}).then(promise=>{
                setLoad(false)
                setModal(true)
            }).catch(e=>{
                const fun=()=>{
                    setEmodal(true)
                    setLoad(false)
                }
                if (e){
                   fun()
                }
            })
        }
    },[form])
    const onDelete=()=>{
        setAddress({add:'',met:'',vis: true})
    }
    const onDeleteUs=()=>{
        setUsluga({usluga: '',vis: true})
    }
    const onDeletedata=()=>{
        setSdata({data: '',vis: true})
    }
    const onDeleteTm=()=>{
        setTime({time: '',vis: true})
    }


        const dataChange=(e,m)=>{
            setAddress({add:e,met:m,vis:false})
        }
        const dataChangeUs=(e)=>{
            setUsluga({usluga: e,vis: false})
        }
    const data = [
        {
            title: 'метро Баумнская',
            add:'Спартковская площад дом 1/7 стр 1'
        },
        {
            title: 'метро Проспект Вернадского',
            add:'Москва Ленинский проспект 99'
        },
        {
            title: 'метро Владыкино',
            add:'Москва Алтуфьевское шоссе д 27 стр 1'
        },
        {
            title: 'метро Братиславская',
            add:'Москва, ул Братиславская д 19 к 1'
        },
    ];
    const uslugi = [
        {
            title: 'Шиномонтаж',
        },
        {
            title: 'Химчистка',
        },
        {
            title: 'Полировка',
        },

    ];
        return (<>{load?<div style={{marginTop:'50%',marginBottom:'50%'}}><Spin size="large" /></div>:<Card title='Онлайн Запись'>
                    <>{address.vis?<h2>Выбырайте адресс</h2>:<List itemLayout="horizontal">
                        <List.Item className='animated slideInDown faster' >
                            <div>
                                <List.Item.Meta
                                    avatar={<Avatar src={metro} />}
                                    title={address.add}
                                    description={address.met}
                                />
                            </div>
                            <div onClick={onDelete}><DeleteOutlined /></div>
                        </List.Item>
                    </List> }

                        {address.vis?<List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item >
                                    <div>
                                        <List.Item.Meta
                                            avatar={<Avatar src={metro} />}
                                            title={item.title}
                                            description={item.add}
                                            onClick={()=>dataChange(item.add,item.title)}
                                        />
                                    </div>
                                </List.Item>
                            )}
                        />:<div>
                            {usluga.vis?<List
                                itemLayout="horizontal"
                                dataSource={uslugi}
                                renderItem={item => (
                                    <List.Item >
                                        <List.Item.Meta
                                            avatar={<Avatar src={uslug} />}
                                            title={item.title}
                                            onClick={()=>dataChangeUs(item.title)}
                                            style={{width:'100%'}}
                                        />
                                    </List.Item>
                                )}
                            />:<><List itemLayout="horizontal">
                                <List.Item className='animated slideInDown faster' style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                                    <div >
                                        <List.Item.Meta
                                            avatar={<Avatar src={uslug} />}
                                            title={usluga.usluga}
                                        />
                                    </div>
                                    <div style={{paddingRight:'10px'}} onClick={onDeleteUs}><DeleteOutlined /></div>
                                </List.Item>
                            </List>
                                {sdata.vis?<div className='animated slideInLeft faster'><Calen setData={setSdata}/></div>:<div>{time.vis?<div>
                                    <div style={{display:'flex',justifyContent:'space-between'}}><div>{sdata.data}</div><div style={{paddingRight:'10px'}} onClick={onDeletedata}><DeleteOutlined /></div></div> <div className='animated slideInLeft faster'><Time setEmodal={setEmodal} data={sdata.data} address={address.add} service={usluga.usluga} setTime={setTime}/></div>
                                </div>:<div>
                                    <List itemLayout="horizontal">
                                        <List.Item className='animated slideInDown faster' style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                                            <div >
                                                <List.Item.Meta
                                                    avatar={<Avatar src={tim} />}
                                                    title={`${sdata.data} \n${time.time}`}
                                                />
                                            </div>
                                            <div style={{paddingRight:'10px'}} onClick={onDeleteTm}><DeleteOutlined /></div>
                                        </List.Item>
                                    </List>
                                    <div className='animated slideInDown faster'><Oform setForm={setForm}/></div>
                                </div>}</div>

                                }
                            </>
                            }
                        </div>}


                    </>
            {modal&&<div style={{position:'absolute',top:'0',left:'0',width:'100%',paddingTop:"150px",paddingBottom:'250px',background:'white'}}>Вы записались успешно<div>
                <Button style={{marginTop:'50px'}}  type='primary'><NavLink to='/'>Главная</NavLink></Button>
            </div> </div>}
            {emodal&&<div style={{position:'absolute',top:'0',left:'0',width:'100%',paddingTop:"150px",paddingBottom:'250px',background:'white'}}>Произошло ошибка попобуйте позвонить по телефону<div>
                <Button style={{marginTop:'50px'}}  type='primary'><a href="tel:+7 (926) 544-73-01">tel:+7 (926) 544-73-01</a></Button>
            </div> </div>}

                </Card>}

        </>)
}
export default OnlineZ