import React,{Component} from 'react';
import './filter.css';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <div className="options_popup_filter">
            <h4>Select Date to see proposals</h4>
          </div>
          <div className="proposal_popup_filter" id="active_proposal_filter">
            <span>
              <input type="radio" />
              <label>Proposal 1</label>
            </span>
            <span>
              20-02-2020
            </span>
            <span>
              10:30&nbsp;PM
            </span>
          </div>
          <div className="proposal_popup_filter">
            <span>
              <input type="radio" />
              <label>Proposal 1</label>
            </span>
            <span>
              20-02-2020
            </span>
            <span>
              10:30&nbsp;PM
            </span>
          </div>
          <div className="proposal_popup_filter">
            <span>
              <input type="radio" />
              <label>Proposal 1</label>
            </span>
            <span>
              20-02-2020
            </span>
            <span>
              10:30&nbsp;PM
            </span>
          </div>
          <div className="proposal_popup_filter">
            <span>
              <input type="radio" />
              <label>Proposal 1</label>
            </span>
            <span>
              20-02-2020
            </span>
            <span>
              10:30&nbsp;PM
            </span>
          </div>
          <div className="proposal_popup_filter">
            <span>
              <input type="radio" />
              <label>Proposal 1</label>
            </span>
            <span>
              20-02-2020
            </span>
            <span>
              10:30&nbsp;PM
            </span>
          </div>
          <div className="proposal_popup_filter">
            <span>
              <input type="radio" />
              <label>Proposal 1</label>
            </span>
            <span>
              20-02-2020
            </span>
            <span>
              10:30&nbsp;PM
            </span>
          </div>
          <div className="proposal_popup_filter">
            <span>
              <input type="radio" />
              <label>Proposal 1</label>
            </span>
            <span>
              20-02-2020
            </span>
            <span>
              10:30&nbsp;PM
            </span>
          </div>
            <button onClick={this.props.closePopup} className="apply_filter">Apply</button>
        </div>
      </div>
    );
  }
}
class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className='app'>
        <p className="filter" onClick={this.togglePopup.bind(this)}>
          Filter Proposal By Date &nbsp;<i class="fa fa-sliders" area-hidden="true"></i>
        </p>
        {this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
};

export default Filter;