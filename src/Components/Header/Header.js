import React from "react";
import {Layout, Menu} from "antd";

const Header=()=>{
    return(
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Главная</Menu.Item>
                    <Menu.Item key="2">Цены</Menu.Item>
                    <Menu.Item key="3">Акции</Menu.Item>
                    <Menu.Item key="3">Онлайн запись</Menu.Item>
                </Menu>
            </Header>
        </Layout>
    )
}
export default Header