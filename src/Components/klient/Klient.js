import React, {useEffect, useState} from "react";
import {Button, Card, Form, Input, List} from "antd";
import axios from 'axios'


const Klient=()=>{
    const [state,setState]=useState()
    const [update,setUpdate]=useState(true)
    const [modal,setModal]=useState(false)
    const [logi,setLogi]=useState({name:'your_fraze',vis:true,err:false})

    useEffect(() => {
        window.scrollTo(0, 0)
        if (localStorage.getItem("name")){
            setLogi({vis: false,err: false,name:'your_fraze'})
        }
    }, [])
    useEffect(()=>{
        axios.get('your_api_url').then(promise=>{
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
            setLogi({vis: false,err: false,name:'your_fraze'})
            localStorage.setItem("your_fraze",e.name)
        }else {
            setLogi({vis:true,err: true,name: 'your_fraze'})
        }
    }
    return(
        <Card title='Список клиентов'>
            {!logi.vis?  <div>{modal?<div><h2>Ошибка позвоните</h2>
                <h2><a href="tel:+79299977584">+79299977584</a></h2></div>:<List
                itemLayout="horizontal"
                dataSource={state}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={<h3>{item.service}</h3>}
                        description={<div><h4>{item.address}<br/>{item.name}<br/><a href={`tel:${item.tel}`}>{item.tel}</a><br/>{item.data}  {item.time}</h4></div>}
                    />
                </List.Item>
            )}
            />}</div>:<div> <Form
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