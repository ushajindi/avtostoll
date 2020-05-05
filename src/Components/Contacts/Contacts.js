import React, {useEffect} from "react";
import {Card} from "antd";
import PhoneOutlined from "@ant-design/icons/lib/icons/PhoneOutlined";
import MailOutlined from "@ant-design/icons/lib/icons/MailOutlined";
import FieldTimeOutlined from "@ant-design/icons/lib/icons/FieldTimeOutlined";

const Contacts=()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <div>
            <Card title='Контакты'>
                <h3>В данный момент мы работаем по четерём адресам, приезжайте, мы ждём Вас!</h3>
                <div><PhoneOutlined /><a href='tel:8495 7446831'> 8 495 7446831</a></div>
                <div><PhoneOutlined /><a href='tel:+7 (926) 544-73-01'>+7 (926) 544-73-01</a></div>
                <div><PhoneOutlined /><a href='tel:+7 (968) 417-36-34'>+7 (968) 417-36-34</a></div>
                <div><MailOutlined /><a href='mailto:ushajindi@gmail.com'> ushajindi@gmail.com</a></div>
                <div style={{display:"flex",padding:'2px'}}><FieldTimeOutlined />
                <div ><h4 style={{marginRight:'5px'}}>Режим работы 24 часа без входных</h4></div>
                </div>
            </Card>
        </div>
    )
}
export default Contacts