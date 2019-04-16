import React, { Component } from 'react';

class ContactSlide extends Component {
	constructor(props){
		super(props);
		this.submit = this.submit.bind(this);
	}

	submit(e) {
		e.preventDefault();
		console.log("wooo");
		this.props.submitted();
	}

	render() {
		console.log(this.props)
		var c = this.props.didSubmit? "baseWrapper hidden2": "baseWrapper ";
		var c2 = this.props.didSubmit? "": " hidden2";


	    return (
	 	
		<div className="contact-us-slide block">
			<div className="contact-us-left">
				<img className="drip-cu" src="/images/arrow contact.png" />
			</div>
			<form className="slide-cu-form">
				<h1> Contact <span className="cu-outline">US</span></h1> 
				<p>This is where a paragraph would go and what not </p>
				<div className={c}>
				<input type="text" name="name" placeholder="name" />
				<input type="text" name="email" placeholder="email" />
				<textarea type="text" name="message" placeholder="message" className="large-cu-input"></textarea> 
				<button className="cu-submit transition" onSubmit={this.submit} onClick={this.submit}>SEND</button>
				</div>
				<h1 className={c2}>Thank You! </h1>
			</form>
		</div>
	 			);
	}
}



export default ContactSlide;



