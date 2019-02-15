import React, { Component } from 'react'
import { withRouter,Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import Loading from '../../components/Loading'
import Test from '../../components/Test'
import ask from '../../lib/ask'

import './index.scss'

@withRouter
@inject('defaultStore')
@observer
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "test",
            title: "test2",
            arr: [1,2,3],
            ooo: null,
        }
    }

    componentDidMount(){
        ask('ResapiSearchFuzzyHint',{data: {id:123}})
        .then(res => {
            this.setState({
                
            })
        })
    }

    // componentWillMount(){
        
    // }

    changeName = (o) => {
        console.log(this.test);
        this.ooo.change2();
        this.setState({
            name: o
        });
    }

    TestRenderFinash = (ref) => {
        this.ooo = ref;
    }
    render() {
        const { name } = this.state;
        return (
            <div>
                <Link to="/"></Link>
                {name}
                <Loading name="loading"/>
                <Test {...this.state} changeName={this.changeName} ref={this.TestRenderFinash} />
            </div> 
        )
    }
}
export default Home