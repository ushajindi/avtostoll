import React, {useEffect} from "react";
import {Button, Card} from "antd";
import shino from '../../media/img/schinomontazh.jpg'
import s from './style.module.css'
import {NavLink} from "react-router-dom";
const Shino=()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <>
        <Card  title="Шиномонтаж" bordered={false} >
            <h1>Шиномонтаж автомобиля</h1>
            <div className={s.card}><img src={shino} alt="Шиномонтаж"/></div>
            <h3>Профессиональный шиномонтаж до 24 радиуса на немецком оборудовании trommelberg.</h3>
            Почему стоит обратить на нас внимание?

            1) Опыт, нашей компании более 7 лет, последние 5 лет мы оказываем услугу шиномонтажа, наши специалисты без проблем справятся с данной задачей.

            2) Оборудование Trommelberg:
            перед каждым сезоном балансировочные станки проходят калибровку.
            шиномонтажные станки Trommelberg выпускаются в различных модификациях, включая самые передовые модели. Например, станок суперавтомат  подходит для бортировки и разбортировки дисков с диаметром до 30 дюймов. Работа агрегата исключает повреждение колеса.
            3) На каждом посту шиномонтажа у нас работает 3 специалиста, каждый отвечает за свой этап:
            съемка\установка колёс с обязательной протяжкой динамометрическим ключом!
            перебортировка резины на диске.
            балансировка
            <div style={{marginTop:'10px',marginBottom:'10px'}}><Button type='primary'><NavLink to='/onlinez'>Записатся онлайн</NavLink></Button></div>
        </Card>
            </>
    )
}
export default Shino