import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import LandingIntro from './LandingIntro';
import QuoteBlock from './QuoteBlock';
import DiscoverWeekly from './DiscoverWeekly';
import ArtistsSlide from "./ArtistsSlide";
import AboutSlide from "./AboutSlide";
import ArSlide from "./ArSlide";
import CSlide from "./CSlide";
import EventsSlide from "./EventsSlide";
import Page from "./Page";


import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import ContactSlide from "./ContactSlide";


class LandingPage extends Component {

	constructor(props){
		super(props);
		 this.state ={
		    // Set your state here
		    menuOn: false,
		    submitted: false,
		    };

		this.toggleMenu = this.toggleMenu.bind(this);
		this.submitted = this.submitted.bind(this);

	}

	toggleMenu() {
		//consl
		this.setState({"menuOn": !this.state.menuOn});
	}

	submitted() {
		this.setState({"submitted": true});
	}


	render(){
		var artist="Pink Slip";
		var bg = "/images/dw bg sample.png";
		var graphic = "/images/dw test graphic.png";
		console.log("bro", this.state)
		return (
			<div className='site transition'>
				<Header toggleMenu={this.toggleMenu} menuOn={this.state.menuOn}/>
				<LandingIntro />
				<QuoteBlock />
				<DiscoverWeekly discoverBg={bg} discoverGraphic={graphic} artist={artist}/>
				<ArtistsSlide />
				<AboutSlide />
				<ArSlide />
				<ContactSlide submitted={this.submitted} didSubmit={this.state.submitted}/>
				<CSlide />
				<EventsSlide />
				<Footer />
			</div>

			)
	}
}


export default LandingPage;