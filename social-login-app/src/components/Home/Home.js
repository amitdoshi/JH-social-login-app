import React, {Component} from 'react';
import './Home.css';
import {Redirect} from 'react-router-dom';
class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            name:'',
            redirect: false,
        };
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        let data = JSON.parse(sessionStorage.getItem('userData'));
        console.log(data);
        this.setState({name: data.name})
        this.setState({provider_pic: data.provider_pic})
    }

    logout(e){
        let choice= window.confirm("Are you sure to Logout......?");
        if(choice){
            sessionStorage.removeItem('userData');
            this.props.history.push('/')
        }else{
            //do nothing.
        }

    }
    render() {

        if(!sessionStorage.getItem('userData') || this.state.redirect){
            return (<Redirect to={'/'}/>)
        }

        return (
            <div >
                Welcome {this.state.name} <img src={this.state.provider_pic}/>
                <br/>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}
export default Home;