
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';

@inject('UIStore')
@observer
class Home extends Component {

  render() {
    const { UIStore } = this.props
    return (
      <div className="HomeRoot">
        This is homepage
          {
          UIStore.showInformLogin ?
            <div className="alert alert-danger"> To access todo page, You need to login first </div> :
            null
        }
      </div>
    )
  }
}

export default Home
