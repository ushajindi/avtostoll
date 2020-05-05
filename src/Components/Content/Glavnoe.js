import React from "react";
import SliderHeader from "../Corusel/Corusel";
import Usligu from "../Uslugi/Uslugi";
import {Layout} from "antd";
const { Header, Content, Footer, Sider } = Layout;


const Glavnoe=()=>{
    return(
        <>
            <SliderHeader/>
            <Content style={{ padding: '0 50px' }}>
                <div>
                    <h1>Наши услуги</h1>
                    <p>

                        Более 4 лет мы оказываем услуги по химчистке, полировке и шиномонтажу, за это время мы стали профессионалами в этом деле.
                    </p>
                    <p>

                        Профессионализм и ответственность — ключевые преимущества нашей компании.
                    </p>

                </div>
                <div className='uslugi'>
                    <Usligu/>
                </div>

            </Content>

        </>
    )
}
export default Glavnoe