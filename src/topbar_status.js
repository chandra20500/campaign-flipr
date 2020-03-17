import React,{Component} from 'react';
import icon from './assets/Capture.PNG';
import './topbar_status.css';

class Topbar_status extends Component{
    render(){
        return(
            <div className="topbar_status">
                <i class="material-icons">subject</i>
                <img src={icon} />
                <div className="buttons_status">
                    <p className="buttons_status_text">
                        <strong>Proposal Status</strong> : Ongoing 
                    </p>
                    <p className="resend_proposal">
                        <button>
                            Resend Proposal
                        </button>
                    </p>
                    <p className="Make_live">
                        <button>
                            Make Live
                        </button>
                    </p>
                </div>
            </div>
        );
    }
} 

export default Topbar_status;