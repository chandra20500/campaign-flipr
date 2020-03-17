import React,{Component} from 'react';
import Topbar_status from './topbar_status.js';
import Body_status from './body_status.js';
import './status.css';

class Status extends Component{
    render(){
        return(
            <div className="main_container_status">
                <Topbar_status />
                <Body_status />
            </div>
        );
    }
} 

export default Status;