import React, { Component } from 'react';

class EventBlock extends Component {

	render() {
	    return (
	 	
		

		<a className="event-slide-event" href={this.props.link}>
				        <img className="event-long-image" src={this.props.image}/>
				        <div className="event-date">
				                <h4 className="event-date-day"> {this.props.day} </h4>
				                <h1 className="event-date-month">{this.props.month}</h1>
				            </div>
				        <div className="event-long-title">
				            {this.props.title}
				        </div>

				        <div className="event-long-description">
				           {this.props.description}
				        </div>
				        <div className="event-bottom-info">
				        	<span className="event-short-address"> {this.props.address}</span><span className="start-time"> {this.props.start}</span>- <span className="end-time"> {this.props.end}</span>
				        </div>
				    </a>
	 			);
	}
}



export default EventBlock;

