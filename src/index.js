import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { useStrict } from 'mobx';

import UserStore from './stores/UserStore';
import TodoStore from './stores/TodoStore';
import UIStore from './stores/UIStore';



const stores = {
    TodoStore,
    UserStore,
    UIStore
};

window.stores = stores


ReactDOM.render(
    <Provider {...stores}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();






useStrict(false);
