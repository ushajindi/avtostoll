import React, {useEffect} from "react";
import s from "./style.module.css"
import {Button, Card} from "antd";
import shino from '../../media/img/schinomontazh.jpg'
import khim from '../../media/img/khim.jpg'
import poly from '../../media/img/poly.jpg'
import {NavLink} from "react-router-dom";
const Usligu =()=>{
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <Card title='Услуги' className="card" >
            <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
            <div className="site-card-border-less-wrapper">
                <Card style={{padding:'0'}} title="Шиномонтаж" bordered={false} className="card">
                    <div className={s.usluga}><img src={shino} alt="Шиномонтаж москва"/>
                        <div className={s.btn}><Button type="primary" block>
                            <NavLink to='/shino'>Подробнее</NavLink>
                        </Button></div></div>
                </Card>
            </div>
            <div className="site-card-border-less-wrapper card">
                <Card  title="Химчистка" bordered={false} className="card">
                    <div className={s.usluga}><img src={khim} alt="Шиномонтаж москва"/>
                        <div className={s.btn}><Button type="primary" block>
                            <NavLink to='/khim'>Подробнее</NavLink>
                        </Button></div></div>
                </Card>
            </div>
            <div className="site-card-border-less-wrapper card">
                <Card style={{padding:'0'}} title="Полировка" bordered={false} className="card">
                    <div className={s.usluga}><img src={poly} alt="Шиномонтаж москва"/>
                        <div className={s.btn}><Button type="primary" block>
                           <NavLink to='/poly'>Подробнее</NavLink>
                        </Button></div></div>


                </Card>
            </div>
            </div>
        </Card>
    )
}
export default Usligu