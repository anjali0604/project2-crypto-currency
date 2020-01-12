import React, {Component} from 'react';
import Api from './Api.js'


class GetInfo extends Component
 {
    render(){
        var items = this.props.items;
        var name = this.props.name;
        var btnClicked = this.props.btnClicked;
        var nameId = -1;
            for(var i=0; i<items.length; i++){
                if(items[i].name === name || items[i].id===name){
                    nameId = items[i].id;
                        break;
            }
    }
        if(btnClicked)
        {
            if(nameId === -1)
            {
                return(
                    <div>Sorry, the coin does not exist</div>
                )
            }
            else
            {
                return (
                    <div className="load"> 
                <Api nameId = {nameId}/>
                    </div>
                )
            }   
        }      
        else 
        {
            return(
                <div>Search For a Coin</div>
            )
        }
    }
}
export default GetInfo;