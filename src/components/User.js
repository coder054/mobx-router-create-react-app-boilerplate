import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';

@inject('UserStore')
@observer
class User extends Component {
    render() {
        const {UserStore} = this.props
        return (
            <div className="UserRoot">
                <div className="fullname">
                    full name is : {UserStore.fullName}
                </div>
            </div>
        )
    }
}

export default User
