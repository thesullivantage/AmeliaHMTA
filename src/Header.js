import React, { Component } from 'react';
import './main.css';

class Header extends Component {
	
	constructor(props){
		super(props);
		this.click = this.click.bind(this);
	}

	click(e) {
		e.preventDefault();
		console.log("here");
		this.props.toggleMenu();
	}

	render() {
		var c = "hmta-menu block";
		console.log(this.state);
		if (!this.props.menuOn) {
			c+= " hidden";
		}
	    return (
	    	<div>
	 			<header className="header">
	                <a href="/" className="hmta-logo-link" src="/"><img alt="/images/hmta logo" src="/images/hmta logo.png" className="hmta-logo-link-image" /></a>
	                <nav className="menu-toggle transition" onClick={this.click}>
	                  <span className="toggle-1" />
	                  <span className="toggle-2" />
	                  <span className="toggle-3" />
	                </nav>
	             </header>
	             <div className={c}>
				<div className="menu-left">
					<div className="drip">
						<h1 className="drip-title">HAND ME <span className="title-outline">THE AUX</span></h1>
						<div className="drip-div"></div>
						<img className="menu-left-img" src="/images/menu drip.png"/>
					</div>
				</div>
				<div className="menu-right">
					<button className="menu-x transition" onClick={this.click}>X</button>
					<nav className="menu-links transition">
						<a>HOME</a>
						<a>about us</a>

						<a>events</a>
						<a>blog</a>
						<a>creative services</a>
						<a>contact us</a>
						<a>artists mngmnt</a>
						<a>discover playlist</a>
					</nav>
				</div>
			</div>
			</div>);
	}
}



export default Header;
