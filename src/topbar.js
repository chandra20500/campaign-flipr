import React,{Component} from 'react';
import './stylesheets/topbar.css';
class Topbar extends Component{
    render(){
        return(
            <div className="topbar_campaign">
                <p className="approved">
                    Approved
                </p>
                <p className="pending">
                    Pending
                </p>
                <button className="create_topbar"> 
                    Create Campaign
                </button>
            </div>
        );
    }
}
export default Topbar;