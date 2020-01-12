import React, {Component} from 'react';
import Header from './Header.js';

class ApiList extends Component {

    constructor(){
        super();
        this.state = {
            items: [],
            flag: false
        };
    }
    componentDidMount(){
        fetch('https://api.coingecko.com/api/v3/coins/list')
        .then(response => response.json())
        .then(json => {
            this.setState({
                flag: true,
                items: json
            })
        });
    }
    render(){
        var {flag, items} = this.state;
        if(!flag){
            return <div><h3>Loading The Coin List</h3></div>
        }
        else{
            return(
                <Header items = {items}/>
            )
        }     
    }
}

export default ApiList;