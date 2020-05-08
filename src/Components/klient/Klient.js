import React, {useEffect, useState} from "react";
import {Button, Card, Form, Input, List} from "antd";
import axios from 'axios'


const Klient=()=>{
    const [state,setState]=useState([])
    const [update,setUpdate]=useState(true)
    const [modal,setModal]=useState(false)
    const [logi,setLogi]=useState({name:'fraze',vis:true,err:false})

    useEffect(() => {
        window.scrollTo(0, 0)
        if (localStorage.getItem("name")==="fraze") {
            setLogi({vis: false, err: false, name: 'fraze'})
        }else {
            setLogi({vis:true,err: true,name: 'fraze'})
        }
    }, [])
    useEffect(()=>{
        axios.get('api').then(promise=>{
            if (state===promise.data){

            }else {
                setState(promise.data)
            }
        }).catch(e=>{
            setModal(true)
        })
    },[update])
    setTimeout(()=>{
        setUpdate(!update)
    },60000)
    const onFinish=(e)=>{
        if (e.name===logi.name){
            setLogi({vis: false,err: false,name:'api'})
            localStorage.setItem("api",e.name)
        }else {
            setLogi({vis:true,err: true,name: 'api'})
        }
    }
    return(
        <Card title='Список клиентов'>
            {!logi.vis?  <div>{modal?<div><h2>Ошибка позвоните</h2>
                <h2><a href="tel:+79299977584">+79299977584</a></h2></div>
                :<div>
                    {state.map(el=>{
                        return (
                            <><div className='klientborder'><div><h2>{el.data}</h2>
                                <h3>Всего заказов {el.info.length}</h3></div>
                            <div>{el.info.map(info=>{
                                return(
                                    <div>
                                        <div>{info.address}</div>
                                        <div>{info.service}</div>
                                        <div>{info.name}</div>
                                        <div><a href={`tel:${info.tel}`}>{info.tel}</a></div>
                                        <div className='klientbor'><span style={{marginRight:'10px'}}>{info.data}</span><span>{info.time}</span></div>
                                    </div>
                                )
                            })}</div></div></>
                        )
                    })}
                </div>}</div>:<div> <Form
                name="basic"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Ваша имя"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Введите фразу',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Проверить
                    </Button>
                </Form.Item>
            </Form></div>}
            {logi.err&&<div style={{color:"red"}}>Ошибка</div>}
        </Card>
    )
}
export default Klient