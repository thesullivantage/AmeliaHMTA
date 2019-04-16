import React, { Component } from 'react';

class ArSlide extends Component {

	render() {
	    return (
	 	<div className="ar-slide block animate-area">
			<div className="ar-wrapper">
				<h1 className="ar-title">A<span className="ar-outline">&</span>R</h1>
				<img className="arc" src="/images/collage.png"/>
				<ul className="ar-points">
				  <li>Bullet Point 1</li>
				  <li>Bullet Point 2</li>
				  <li>Bullet Point 3</li>
				</ul>
				<p className="ar-p">  paragraph goes here and you’d write a bunch of stuff, it’s left aligned</p>
			</div>
		</div>

	 			);
	}
}



export default ArSlide;


