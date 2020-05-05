import React, {useEffect} from "react";
import s from './style.module.css'
import i1 from './../../media/img/khim/ceed1.jpg'
import i2 from './../../media/img/khim/ceed2.jpg'
import {Button, Card} from "antd";
import {NavLink} from "react-router-dom";
const Khimchistka=()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <Card title="Химчистка" bordered={false} >
            <h1>Химчистка автомобиля</h1>
            <div>
                Большой популярностью среди автовладельцев пользуется комплексная химчистка салона автомобиля. Данную услугу предоставляет наша компания, по весьма доступной тарификации. Поездки в чистом автомобиле более комфорты, а если судить о презентабельности – чистый транспорт вызывает уважение со стороны окружающих, да и самому водителю будет гораздо приятней проводить время в салоне без грязи и пыли.<br></br>

                Химчистка позволяет не только привести в идеальный порядок салон автотранспортного средства, но и создать более безопасную атмосферу для водителя. Каждая поверхность авто обрабатывается антисептическими средствами, обеспечивающими защиту от ультрафиолетовых лучей, и параллельно создавая качественную дезинфекцию, полезную для человеческого организма.<br></br>
            <div className={s.result}>
                <img height='300px' src={i1} alt="химчистка москва"/>
                <img height='300px' src={i2} alt="химчистка москва"/>
            </div>

                Профессиональная химчистка салона автомобиля предусматривает полнометражную очистку внутреннего пространства: удаление пыли с панели авто, тщательная чистка от пятен, приведение в порядок ковриков и других аксессуаров транспортного средства. Благодаря приобретенному годами опыту и навыкам, задействованные в компании специалисты, производят комплексную уборку в салоне автомобиля в самом оперативном режиме.<br></br> Это весьма удобно для деловых людей, не имеющих достаточного количества личного времени на ожидание.

                Для выведения наиболее загрязненных элементов, наши специалисты используют профессиональные средства, учитывая особенности внутренней отделки. Помимо стандартных салонов, выполненных из качественной материи, у нас также действует профессиональная услуга – химчистка кожаного салона авто, что весьма актуально для презентабельных моделей. <br></br>Для очистки кожаных изделий, мы используем специальные моющие средства, способствующие восстановлению натурального цвета кожи. Результат проведенных работ – чистый салон, без пыли и грязевых пятен, создающий впечатление нового!
            </div>
            <div style={{marginTop:'10px',marginBottom:'10px'}}><Button type='primary'><NavLink to='/onlinez'>Записатся онлайн</NavLink></Button></div>
        </Card>
    )
}

export default Khimchistka