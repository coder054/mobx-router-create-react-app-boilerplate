
import {
    Link,
} from 'react-router-dom'
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';

@inject('UserStore', 'UIStore')
@observer
class Header extends Component {

    render() {
        const { UserStore, UIStore } = this.props
        return (
            <div className="HeaderRoot">
                <Link onClick={() => {
                    if (!UserStore.authenticated) {
                        UIStore.changeShowInformLogin(false)
                    }

                }} to="/"> Trang chu </Link>
                <Link onClick={() => {
                    if (!UserStore.authenticated) {
                        UIStore.changeShowInformLogin(true)
                    }

                }} to="/todos"> Todos </Link>
                {UserStore.authenticated ?
                    <span>
                        Ban da login <button onClick={() => UserStore.changeAuthentication(false)}> Logout </button>
                        <Link to="/user"> User info </Link>
                     </span>
                    :
                    <span> Ban chua login <button onClick={() => {
                        UserStore.changeAuthentication(true)
                        UIStore.changeShowInformLogin(false)
                    }}> Login </button> </span>
                }
            </div>
        )
    }
}

export default Header
