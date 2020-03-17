import React,{Component} from 'react';
import Detail_element from './detail_element.js';
import './stylesheets/detail_campaign.css';
class Details_campaign extends Component{
    render(){
        return(
            <div className="main_container_campaign">
                <Detail_element />
                <Detail_element />
                <Detail_element />
                <Detail_element />
                <Detail_element />
                <Detail_element />
                <Detail_element />
            </div>
        );
    }
}

export default Details_campaign;