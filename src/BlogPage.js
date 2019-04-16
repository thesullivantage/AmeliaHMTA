import React, { Component } from 'react';
import BlogPost from "./BlogPost";
import Blog from "./Blog";
import Page from "./Page";

class BlogPage extends Component {
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
		var x = [(<Blog key="blog" />)];
		//body
		return ( <Page body={x} />);
	}
}


export default BlogPage;
