import React,{Component} from'react'
import './overall_stats.css';

class Overall_stats extends Component{
    render(){
        return(
            <div className="container_overall_stats">
                <div className="colored_box_stats">
                    <div className="red_colored_box_stats">
                        <p>
                            1
                        </p>
                        <p>
                            INFLUENCER SELECTED
                        </p>
                    </div>
                    <div className="blue_colored_box_stats">
                        <p>
                            5.7M
                        </p>
                        <p>
                            Social Reach
                        </p>
                    </div>
                    <div className="green_colored_box_stats">
                        <p>
                            35K
                        </p>
                        <p>
                            Estimated Managment
                        </p>
                    </div>
                    <div className="purple_colored_box_stats">
                        <p>
                            ₹1.8K
                        </p>
                        <p>
                            Estimated Budget
                        </p>
                        <p>
                            Avg. Estimated price
                            $894
                        </p>
                    </div>                    
                </div>
                <div className="gender_stats">
                    <p className="male_gender_stats">
                        <i class="fa fa-mars" aria-hidden="true"></i><strong>77%</strong>
                    </p>
                    <p className="female_gender_stats">
                        <i class="fa fa-venus" aria-hidden="true"></i><strong>33%</strong>
                    </p>
                </div>
            </div>
        );
    }
}

export default Overall_stats;