import React, { Component } from 'react';

class CSlide extends Component {

	render() {
	    return (
	 	
		 <div className="creative-services-slide block" style={{backgroundImage:"url('/images/cs bg.png')" }}>
      <div className="darken">
        <div className="c-services">
          <div className="c-service">
            <img src="/images/camera.svg" /> <h2>Photography</h2>
          </div>
          <div className="c-service">
            <img src="/images/mv icon.svg" /> <h2>Music Videos</h2>
          </div>
          <div className="c-service">
            <img src="/images/ps icon.svg" /> <h2>Graphic Design</h2>
          </div>
        </div>
        <div className="c-services-info">
          <div className="c-services-info-text">
            <h1 className="c-services-title">Creative Services</h1>
            <p className="c-services-explantion">Paragraph explaining the services</p>
          </div>
        </div>
        <div className="get-services-link transition">
          GET SERVICES
        </div>
      </div>
    </div>

	 			);
	}
}



export default CSlide;

