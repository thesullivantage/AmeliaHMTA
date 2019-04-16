import React, { Component } from 'react';
import DiscoverWeekly from "./DiscoverWeekly";
import Page from "./Page";

class DiscoverPage extends Component {
	

	render(){
		var artist="Pink Slip";
		var bg = "/images/dw bg sample.png";
		var graphic = "/images/dw test graphic.png";
		
		var x = [(<DiscoverWeekly discoverBg={bg} discoverGraphic={graphic} artist={artist}/>)];
		//body
		return ( <Page body={x} />);
	}
}


export default DiscoverPage;
