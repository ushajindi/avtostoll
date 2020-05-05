import React, {useEffect, useState} from "react";
import { Menu, Switch,Button } from 'antd';
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    CloseOutlined
} from '@ant-design/icons';
import {NavLink} from "react-router-dom";

const { SubMenu } = Menu;

class BMenu extends React.Component {
    componentDidMount() {
            window.scrollTo(0, 0)
    }


    state = {
        theme: 'dark',
        current: '1',
        toggleCollapsed:false,
    };

    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };
    toggleCollapsed=()=>{
        this.setState({
            toggleCollapsed:!this.state.toggleCollapsed
        })
    }
    handleClick = e => {
        this.setState({
            current: e.key,
            toggleCollapsed:!this.state.toggleCollapsed
        });

    };

    render() {
        return (
            <><div className='menubtn'>
                <Button type="primary"  onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    {React.createElement(this.state.toggleCollapsed ? CloseOutlined:MenuUnfoldOutlined )}
                </Button>
                {this.state.toggleCollapsed && <div className={this.state.toggleCollapsed?'animated bounceInLeft slow burger':'animated bounceInRight slow burger'}>

                <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultOpenKeys={['1']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                >
                    <div className='theme'><Switch
                        checked={this.state.theme === 'dark'}
                        onChange={this.changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    /></div>
                        <Menu.Item key="1"><NavLink to='/'>Главная</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink to='/price'>Цены</NavLink></Menu.Item>
                        <Menu.Item key="3"><NavLink to='/contacts'>Контакты и Адреса</NavLink></Menu.Item>
                        <Menu.Item key="4"><NavLink to='/uslugi'>Услуги</NavLink></Menu.Item>
                        <Menu.Item key="5"><NavLink to='/onlinez'>Запись Онлайн</NavLink></Menu.Item>

                </Menu>
                </div>}
            </div>
            </>
        );
    }
}
export default BMenu