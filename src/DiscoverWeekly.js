import React, { Component } from 'react';

class DiscoverWeekly extends Component {

	render() {
	    return (
		<div className="discover-weekly block" style={{backgroundImage: "url('" +this.props.discoverBg+ "')"}}>
			<div className="discover-image" >
				<div className="discover-text-block">
					<div className="discover-info">
						<div className="discover-title-block">
							<h1 className="discover-title disc-top">DISCOVER</h1> 
							<div className="dw-bottom"><h1 className="discover-title disc-bottom">WEEKLY</h1></div> 
						</div>
						<div className="play-block">
							<a target="_blank" href="https://open.spotify.com/user/hmtheaux/playlist/5dswEDO2s6XQWzyPGd7uWX?si=_QiZUcrNTR-oXp7x2gy2yw"><img className="play-button discover-play" src="/images/play button filled play.svg" /></a> <span> PLAY ON SPOTIFY</span>
						</div>
						<p>Check out HMTA's editoral staffs' picks of songs for the week! Certified heat; updated every Monday. This week's theme: <b>{this.props.artist}</b> sponsored by Hennessey.</p>
					</div>
				</div>
				<img className="discover-image-graphic" src={this.props.discoverGraphic}  />
				<div className="dw-image-drip"></div>
			</div>
		</div>
	 			);
	}
}



export default DiscoverWeekly;
