import React from "react";
import {Button, Form, Input, InputNumber} from "antd";


const Oform=(props)=>{
    const onFinish=(e)=>{
        props.setForm({name:e.name,tel:e.tel})
    }
    return(
        <div>
            <Form
                name="basic"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Ваша имя"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Введите вашу имя!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Телефон"
                    name="tel"
                    rules={[
                        {
                            required: true,
                            message: 'Введите номер телефона',
                        }
                    ]}

                ><Input style={{width:'100%'}} placeholder='+7 *** *** ** **'/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Записываться
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Oform