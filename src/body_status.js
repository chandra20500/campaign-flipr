import React,{Component} from 'react';
import Proposal_date from './Proposal_date.js';
import './stylesheets/body_status.css';
import yt from'./assets/yt.png';
import T_body from './table_body';
import Overall_stats from './overall_stats.js';
import Disclaimer from './disclaimer.js';
import Analysis_stats from './analysis.js';

class Body_status extends Component{
    render(){
        return(
            <div className="body_status">
                <div className="proposal_date">
                    <p className="heading">
                        <strong>Proposal Date</strong> : &nbsp; 23-02-2020
                    </p>
                    <p className="filter">
                         Filter Proposal By Date &nbsp;<i class="fa fa-sliders" area-hidden="true"></i>
                    </p>
                    <Proposal_date />
                    <div className="influencer_detail">
                        <p>
                            INFLUENCER DETAIL
                        </p>
                        <div className="influencer_detail_icon">
                            <img src={yt} />
                            <p>
                                YOU TUBE
                            </p>
                        <table border="0" cellspacing="0" cellpadding="0" className="table">
                            <th>
                                Name
                            </th>
                            
                            <th>
                                Subscribers
                            </th>
                            
                            <th>
                                Language
                            </th>
                            
                            <th>
                                Average views
                            </th>
                            <th>
                                Average views<p>(based on breakdown from you end)</p>
                            </th>                    
                            <th>
                                Engagment
                            </th>
                            <th>
                                Followers Audit
                            </th>
                            
                            <th>
                                Deliverables
                            </th>
                            
                            <th>
                                Packaged Cost
                            </th>
                            
                            <th>
                                Action
                            </th>
                            <T_body 
                                name="bhuvan bam"   
                                action="Rejected"
                                color="red"
                            />
                            <tr width="100%" className="full_width_row">
                                <td colSpan="10">
                                    <p>
                                        <strong>Remarks</strong>
                                    </p>
                                    <p className="full_width_row_value">
                                        Reasonable / Homemade REmedies
                                    </p>
                                </td>
                            </tr>

                            <T_body 
                                name="bhuvan bam"   
                                action="Approved"
                                color="green"
                                />
                            <T_body 
                                name="Fit tuber"   
                                action="Approved"
                                color="green"
                            />
                            <T_body 
                                name="Flying Beast"   
                                action="Approved"
                                color="green"
                            />      
                            <T_body 
                                name="Amit badhana"   
                                action="Approved"
                                color="green"
                            />
                        </table>
                        </div>
                    </div>
                </div>
                    <div className="overall_stats">
                        <Analysis_stats />
                        <p>
                            <strong>Overall Stats</strong>
                        </p>
                        <Overall_stats />
                        <Disclaimer />
                    </div>
            </div>
        );
    }
} 

export default Body_status;