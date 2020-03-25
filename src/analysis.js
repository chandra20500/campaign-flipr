import React,{Component} from 'react';
import './stylesheets/analysis.css';
import logo_analsis from './assets/pie-chart.svg';
import age_distribution from './assets/age_distribution.png';
import gender_distribution from './assets/gender_distribution.png';
import piechart from './assets/piechart.png';
import city_wise_distribution from './assets/city_wise_distribution.png';
import contrywise_distribution from './assets/contrywise_distribution.png';

class Analysis_stats extends Component{
    render(){
        return(
            <div className="analysis_container">
                <div className="header_analysis_containeer">
                    <div className="logo_analysis_container">
                        <img src={logo_analsis} />
                        <p>
                            Bhuvan Bam
                        </p>
                    </div>
                    <div className="subscriber_analysis_container">
                        15.6M Subscribers
                    </div>
                    <div className="you_tube_address">
                        https://www.youtube.com/bbkivines
                    </div>
                </div>
                <div className="numerical_data_stats">
                    <div className="element_numerical_data_stats">
                        <p className="bold_header_element_numerical_data_stats">
                            1.3K
                        </p>
                        <p className="detail_element_numerical_data_stats">
                            Avg. Likes
                        </p>
                    </div>
                    <div className="element_numerical_data_stats">
                        <p className="bold_header_element_numerical_data_stats">
                            44.59K
                        </p>
                        <p className="detail_element_numerical_data_stats">
                            Avg. comments
                        </p>
                    </div>
                    <div className="element_numerical_data_stats">
                        <p className="bold_header_element_numerical_data_stats">
                            ₹25,449
                        </p>
                        <p className="detail_element_numerical_data_stats">
                            CPE
                        </p>
                    </div>
                    <div className="element_numerical_data_stats">
                        <p className="bold_header_element_numerical_data_stats">
                            ₹25,443
                        </p>
                        <p className="detail_element_numerical_data_stats">
                            Avg. Likes
                        </p>
                    </div>
                    <div className="element_numerical_data_stats">
                        <p className="bold_header_element_numerical_data_stats">
                            2.03%
                        </p>
                        <p className="detail_element_numerical_data_stats">
                            Avg Engagment rate
                        </p>
                    </div>
                </div>
                <div className="distributions_stats">
                    <div className="element_distribution_stats">
                        <p>
                            Social Media Distribution
                        </p>
                        <img src={piechart} />
                    </div>
                    <div className="element_distribution_stats">
                        <p>
                            Gender Distribution
                        </p>
                        <img src={gender_distribution} />
                    </div>
                    <div className="element_distribution_stats">
                        <p>
                            Age Distribution
                        </p>
                        <img src={age_distribution} />
                    </div>
                    <div className="element_distribution_stats">
                        <p>
                            City wise Distribution
                        </p>
                        <img src={city_wise_distribution} />
                    </div>
                    <div className="element_distribution_stats">
                        <p>
                            Country Wise Distribution 
                        </p>
                        <img src={contrywise_distribution} />
                    </div>                    
                </div>
            </div>
        );
    }
}

export default Analysis_stats;