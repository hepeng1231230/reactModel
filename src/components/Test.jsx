import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Button } from 'antd'
@inject('TestStore')
@observer
class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    changeName = () => {

        this.props.TestStore.changeTest('aaa')
    }

    change2 = () => {
        console.log('jjj');
    }
    render() {
        const { name, title, TestStore } = this.props;
        return (
            <div onClick={this.changeName}>
                <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
            </div>
        )
    }
}

export default Test