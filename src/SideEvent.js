import React, { Component } from 'react';

class SideEvent extends Component {

	render(){
		return (
			<div className="side-event">
			 				<div className="event-info transition">
			 					<div className="event-date">
			 						<div  className="event-date-month">{this.props.month}</div>
			 						<div  className="event-date-day">{this.props.day}</div>
			 					</div>
			 					<img className="event-image" src="{this.props.image}" />
			 				</div>
			 				<div className="event-title">{this.props.title}</div>
			 				<button className="event-ticket-button intro-button">Buy Tickets</button>
				</div>
)
	}

}

export default SideEvent;
