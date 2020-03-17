import React,{Component} from 'react';
import './stylesheets/menu.css';
import boom from './assets/Capture.PNG';

class Menu extends Component{
    render(){
        return(
            <div className="menu_campaign">
                <div className="logo_campaign">
                    <i class="material-icons">subject</i>
                    <img src={boom}/>
                </div>
                <div className="menu_options_campaign">
                    <div className="option_campaign">
                        <i class="material-icons">dashboard</i>
                        <p>
                            OVERVIEW
                        </p>
                    </div>
                    <div className="option_campaign" id="active">
                        <i class="fa fa-bullhorn" aria-hidden="true"></i>
                        <p>
                            CAMPAIGN
                        </p>
                    </div>
                    <div className="option_campaign">
                        <i class="material-icons">how_to_reg</i>
                        <p>
                            INFLUENCER
                        </p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Menu;