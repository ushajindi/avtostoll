import React, {useEffect} from "react";
import {Button, Card, Carousel} from "antd";
import s1 from './../../media/img/poly/b13096860bc536c6cfd7daf2cd1f9bb1.jpg'
import s2 from './../../media/img/poly/2.jpg'
import s3 from './../../media/img/poly/3.jpg'
import s4 from './../../media/img/poly/4.jpg'
import s5 from './../../media/img/poly/5.jpg'
import s6 from './../../media/img/poly/6.jpg'
import s from './style.module.css'
import {NavLink} from "react-router-dom";

const Poly=()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <Card title="Полировка" bordered={false} >
            <h1>Абразивная полировка автомобиля</h1>
            Данная услуга особо актуальна в ситуациях, когда на лакокрасочном покрытии автомобильного кузова имеются видимые механические повреждения. Перед проведением полировки, специалисты осуществляют профессиональную покраску дефектных участков, грамотно подбирая оттенок краски.
            Абразивная полировка кузова автомобиля, специалистами нашей компании выполняется уже более 5 лет. Мы готовы выполнить полировку автомобильного кузова, любой марки, за сравнительно небольшие деньги. Опытные специалисты производят заданную работу в самые быстрые сроки, гарантируя качественный результат, с полным исключением видимых дефектов. Мы тщательно подбираем тон автомобильный краски, что позволяет воссоздать первоначальный вид транспортного средства.
            Абразивная полировка автомобиля производится в несколько этапов:
            Для очищения поверхности кузова от пыли и дорожной грязи, специалисты осуществляют профессиональную мойку авто и последующее высушивание. Если не произвести такую работу, абразивные составы перемешаются с грязью, что может спровоцировать повреждение лакокрасочного покрытия. Мы производим эту работу в обязательном порядке, что позволяет исключить риски таких неприятных последствий.
            3М-полировка осуществляется для бережного удаления верхнего слоя лакокрасочного покрытия и исключения визуальных дефектов. На этом этапе используются специальные абразивные составы, что позволяет сгладить все имеющиеся на поверхности неровности и устранить мелкие царапины на кузове авто. В данном процессе используются пасты разных составов, в зависимости от выявленных дефектов.
            После первой полировки, производится повторная мойка кузова, для удаления с поверхности кузова абразивных частиц.
            Следующий этап – мягкая абразивная полировка авто, позволяющая придать блеск лакокрасочному покрытию.
            В заключении производится защитная полировка кузова, обеспечивающая высокую устойчивость поверхности покрытия кузова к внешним факторам окружающей среды. По желанию клиента, мы также готовы нанести тефлоновое покрытие, обладающее множеством полезных свойств.
            При проведении полировки, специалисты используют профессиональное оборудование и специальные составы, преобразующие лакокрасочное покрытие авто до состояния нового. Абразивная полировка, цена услуги вполне доступная, позволит восстановить прежний облик автомобиля и его цвет, отливающий зеркальным блеском!<br></br>
            <h1>Восстановительная полировка</h1>
            В нашей компании предоставляется услуга восстановительной полировки кузова автотранспортного средства любой марки, за сравнительно небольшую оплату. Опытные специалисты произведут эффективное устранение видимых изъянов, произведут покраску с грамотным подбором красящего состава и восстановление лакокрасочного покрытия.  В заключении, осуществляется профессиональная полировка кузова, с применением качественных средств абразивной структуры.

            В период эксплуатации автомобиля, лакокрасочное покрытие, нанесенное в заводских условиях, постепенно теряет блеск и яркость. Микроскопические поры, имеющиеся в слоях эмали и грунта, впитывают атмосферную влагу, в составе которой преобладают тяжелые соли и вредные для металла кислоты. Постепенно эта смесь пропитывает металлический каркас авто, что провоцирует появление неприятной ржавчины на кузове.

            Чтобы устранить выявленный дефект или не допустить его образования, рекомендована восстановительная полировка кузова автомобиля. Цена на данную услугу вполне доступная, результат проведенных работ – обновленный кузов авто с насыщенным цветом и блеском.

            Для проведения восстановительной полировки, используются качественные составы абразивной структуры и профессиональное оборудование. Эта работа осуществляется в несколько этапов, каждый из них предусматривает определенную цель. Первым делом производится подготовка кузова к полировке - тщательная влажная очистка от пыльных частиц и грязи. После, проводится просушивание для качественного нанесения полировочных составов. В комплекс работ входит покраска кузова, позволяющая обновить цвет авто и устранить имеющиеся дефекты. Последний этап предусматривает нанесение защитного полировального покрытия, что позволяет минимизировать риски повторных повреждений, связанных с воздействием атмосферных явлений.

            Восстановительная полировка кузова автомобиля – лучшее решение для преобразования кузова автотранспортного средства до состояния нового! Полный спектр восстановительных работ производится в оперативном режиме, за доступную оплату<br></br>
            <h1 style={{marginTop:'20px',marginBottom:'20px'}}>Фотогалерея</h1>
            <Carousel>
                <div><img className={s.im} src={s1} alt=""/></div>
                <div><img className={s.im} src={s2} alt=""/></div>
                <div><img className={s.im} src={s3} alt=""/></div>
                <div><img className={s.im} src={s4} alt=""/></div>
                <div><img className={s.im} src={s5} alt=""/></div>
                <div><img className={s.im} src={s6} alt=""/></div>
            </Carousel>
            <div style={{marginTop:'10px',marginBottom:'10px'}}><Button type='primary'><NavLink to='/onlinez'>Записатся онлайн</NavLink></Button></div>

        </Card>
    )
}
export default Poly