import { observable, action } from 'mobx';

export class UIStore {

    @observable showInformLogin = false;

    @action changeShowInformLogin(status){
        this.showInformLogin = status
    }

}

export default new UIStore();
