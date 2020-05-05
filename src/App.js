import React, {useEffect, useState} from 'react'
import './App.css'
import {Layout} from "antd"
import Usligu from "./Components/Uslugi/Uslugi";
import Ffooter from "./Components/Footer/FFooter";
import Khimchistka from "./Components/Khimchistka/Khimchistka";
import {NavLink, Route, Router, withRouter} from "react-router-dom";
import Glavnoe from "./Components/Content/Glavnoe";
import Shino from "./Components/Shinomontazhe/Shinomontazhe";
import Poly from "./Components/Polyrovka/Polyrovka";
import Price from "./Components/Price/Price";
import BMenu from "./Components/Menu/Menu";
import YMap from "./Components/Map/Map";
import Contacts from "./Components/Contacts/Contacts";
import OnlineZ from "./OnlineZapis/OnlineZ";
import logo from "./media/img/logo.png"
import Klient from "./Components/klient/Klient";
const {Footer} = Layout;


function App(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
      <Layout className='App'>
          <div className='nav'>
                  <div><NavLink to='/'><img width={'150px'} src={logo} alt="автостол.рф"/></NavLink></div>
                  <div className='bmenu '><BMenu/></div>
          </div>
          <Route exact path='/' component={()=><div style={{marginTop:'20px'}}><Glavnoe/></div>}/>
          <Route exact path='/onlinez' component={()=><OnlineZ/>}/>
          <Route path='/khim' render={()=><Khimchistka/>}/>
          <Route path='/uslugi' render={()=><Usligu/>}/>
          <Route path='/shino' render={()=><Shino/>}/>
          <Route path='/poly' render={()=><Poly/>}/>
          <Route path='/price' render={()=><Price/>}/>
          <Route path='/klient' render={()=><Klient/>}/>
          <Route path='/contacts' render={()=>{
              return(
                  <>
                      <Contacts/>
                      <YMap/>
                      <Usligu/>
                  </>)
          }}/>
          {props.location.pathname ==='https://автостол.рф/app/contacts' || props.location.pathname ==='https://автостол.рф/app/klient' ?<></>:
          <><Contacts/>
              <YMap/>
              </>}

          <Footer className='footer'>Автостол.рф ©2020 Created by <a href="mailto:ushajindi@gmail.com">RadzabovSS</a>
              <div><NavLink to={'/'}><img width={'200px'} src={logo} alt="автостол.рф"/></NavLink></div>
              <div><NavLink to={'/klient'}>Служебно</NavLink></div>
          <Ffooter/></Footer>
      </Layout>
  )
}

export default withRouter(App)
