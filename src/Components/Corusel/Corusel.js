import React from "react";
import shino from '../../media/img/schinomontazh.jpg'
import khim from '../../media/img/khim.jpg'
import poly from '../../media/img/poly.jpg'
import {Carousel} from "antd";
import s from './style.module.css'

const SliderHeader=()=>{
    const onChange=()=>{}
    return(
        <Carousel afterChange={onChange}>
            <div className={s.corusel}>
                <img className={s.im} src={shino} alt=""/>
                <div className={s.coruseltext}><h2>Качественный шиномонтаж – </h2><h2>залог безопасности.</h2></div>
            </div>
            <div className={s.corusel}>
                <img className={s.im} src={khim} alt=""/>
                <div className={s.coruseltexttwo}><h3>Чтобы салон всегда выглядел безупречно,</h3>мы рекомендуем регулярно, не реже, чем раз в год,<br></br> производить химчистку салона автомобиля. <h3>Ведь загрязнённая обивка</h3> — это источник пыли и скопление микробов.</div>
            </div>
            <div className={s.corusel}>
                <img className={s.im} src={poly} alt=""/>
                <div className={s.coruseltextthree}><h3>Эксплуатация автомобиля неизбежно <br></br>связана с появлением потертостей <br></br>и царапин на покрытии кузова машины</h3>даже недавно купленный автомобиль, имеющий<br></br> дефекты покрытия, будет выглядеть, как старый.<br></br> Надежно защитить лакокрасочное покрытие<br></br> поможет полировка кузова</div>
            </div>

        </Carousel>
    )
}
 export default SliderHeader

