import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import {
    Redirect
} from 'react-router-dom'

export default function (ComposedComponent) {
    @inject('UserStore')
    @observer
    class requireAuth extends Component {
        render() {
            const { UserStore } = this.props
            return (
                <div className="requireAuthRoot">
                    {UserStore.authenticated ? null : <Redirect to="/" />}
                    <ComposedComponent {...this.props} />
                </div>
            )
        }
    }

    return requireAuth
}
