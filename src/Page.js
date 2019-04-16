import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';


class Page extends Component {
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

	render() {
		var toRender = [(<Header  toggleMenu={this.toggleMenu} menuOn={this.state.menuOn} key={"header"}/>)];
		toRender = toRender.concat(this.props.body);
		toRender.push( (<Footer key={"footer1"} />));
		console.log("heerree", toRender);
	    return (toRender);
	}
}



export default Page;



