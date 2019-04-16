import React, { Component } from 'react';

class LandingIntro extends Component {
	
	render() {
	    return (
	 			
	    <div className="intro-slide block">
			<div className="wrapper">
				<video autoPlay muted loop id="bgv">
				  <source src="/videos/bg.mp4" type="video/mp4"/>
				</video>
				<div className="intro-info">
					<h1 className="intro-text"> BE <span>BOLD</span></h1>
					<p className="intro-paragraph">This is where a paragrah would go and what not</p>
					<button className="intro-button transition">ENTER HERE</button>
				</div>
				
			</div>
		</div>

	 			);
	}
}



export default LandingIntro;
