import { observable, action, runInAction } from 'mobx'

class TestStore {
    @observable test = '';

    @action
    changeTest = () => {
        this.test = 'test';
    }
}

export default TestStore