import { observable, action, computed } from 'mobx';

export class UserStore {

    @observable firstName = 'Alex';
    @observable lastName = 'Smith';
    @observable age = 25;
    @observable authenticated = false;

    @computed get fullName() {
        return `${this.firstName} ${this.lastName}`
    };

    @action changeFirstName(firstName) {
        this.firstName = firstName;
    }

    @action changeLastName(lastName) {
        this.lastName = lastName;
    }

    @action changeAuthentication(status) {
        this.authenticated = status;
    }


}

export default new UserStore();
