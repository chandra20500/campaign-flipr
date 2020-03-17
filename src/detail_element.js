import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Detail_element extends Component{
    render(){
        return(
            <div className="detail_container_campaign">
                <div className="campaign_detail">
                    <div className="details_type1">
                        <p className="Campaign_title">
                            Campaign Title
                        </p>
                        <p className="Campaign_type">
                            campaign Type : <strong>Lifestyle</strong>
                        </p>
                        <p className="Campiagn_platform">
                            Campiagn platform : <strong>You Tube</strong>
                        </p>
                    </div>
                    <div className="details_type2">
                        <p className="Deliverables">
                            Deliverables :
                        </p>
                        <p className="deliverables_data">
                            <strong>1 YT + 3 Stories</strong>
                        </p>
                    </div>
                </div>
                <div className="campaign_detail_b">
                    <p className="client_name">
                        <strong>Client Name</strong> : KKO
                    </p>
                    <p className="approved_date">
                        <strong>Approved date</strong> :29-02-2020
                    </p>
                    <p className="details_button">
                    <Link to="/status">
                        <button>    
                            View Detail
                        </button>    
                    </Link>         
                    
                    </p>
                </div>
            </div>
        );
    }
}

export default Detail_element;