import React,{Component} from 'react';
import './stylesheets/proposal_date.css';
class Proposal_date extends Component{
    render(){
        return(
            <div className="Proposal_date">
                <p className="campaign_title_status">
                    Campaign Title
                </p>
                <div className="details_status">
                    <div className="agency_status">
                        <p> Agency: <p className="value_agency_status"><strong>Boomlet</strong></p></p>
                    </div>   
                    <div className="agency_status">
                        <p>Media Contact: <p className="value_agency_status"><strong>Karan Khatri</strong></p></p>
                    </div>
                    <div className="agency_status">
                        <p>Email ID: <p className="value_agency_status"><strong>Karan@boomlet.co</strong></p></p>
                    </div>
                    
                    <div className="agency_status">
                        <p> Phone no.: <p className="value_agency_status"><strong>8945627315</strong></p></p>
                    </div>
                </div>
                <div className="details_status_b">
                    <div className="agency_status_b">
                        <p> Agency: <p className="value_agency_status"><strong>Boomlet</strong></p></p>
                    </div>   
                    <div className="agency_status_b">
                        <p>Media Contact: <p className="value_agency_status"><strong>Karan Khatri</strong></p></p>
                    </div>
                    <div className="agency_status_b">
                        <p>Email ID: <p className="value_agency_status"><strong>Karan@boomlet.co</strong></p></p>
                    </div>
                    
                    <div className="agency_status_b">
                        <p> Phone no.: <p className="value_agency_status"><strong>8945627315</strong></p></p>
                    </div>
                </div>
                <div className="dates_proposal_status">
                    <p className="campaing_date_status">
                        campaign date : <strong>26-2-2020</strong>
                    </p>
                    <p className="proposal_date_status">
                        Proposal date : <strong>26-2-2020</strong>
                    </p>
                </div>
            </div>
        );
    }
} 

export default Proposal_date;