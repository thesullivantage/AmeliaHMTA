import React, { Component } from 'react';

class EventsSlide extends Component {


	// this is gonna have a bunch of messages

	render() {
	    return (

	
    <div className="events-slide block">
      <div className="events-top-title">HAND ME <span className="title-outline">THE AUX</span></div>
        <div className="events-bottom-title">HAND ME <span className="title-outline">THE AUX</span></div>
        <div className="event-title-link">EVENTS</div>
      <div className="wrapper">
        

        <div className="event-slide-feed transition">
          <a className="event-slide-event">
                <img className="event-long-image" src="https://cdn1.thr.com/sites/default/files/imagecache/768x433/2017/05/thr_snl_9978_09_1805_splash.jpg"/>
                <div className="event-date">
                        <h4 className="event-date-day"> 12 </h4>
                        <h1 className="event-date-month">May</h1>
                    </div>
                <div className="event-long-title">
                    Married to the game
                </div>

                <div className="event-long-description">
                    Clients (Aziz Ansari, Sasheer Zamata, Melissa Villaseñor, Pete Davidson) share how they were helped by the law firm of Broderick (Kate McKinnon) &amp; Ganz (Bobby Moynihan).
                </div>
                <div className="event-bottom-info">
                  <span className="event-short-address"> Address Here</span><span className="start-time"> Start Time</span>- <span className="end-time"> End Time</span>
                </div>
            </a>
            <a className="event-slide-event">
                <img className="event-long-image" src="https://cdn1.thr.com/sites/default/files/imagecache/768x433/2017/05/thr_snl_9978_09_1805_splash.jpg" />
                <div className="event-date">
                        <h4 className="event-date-day"> 12 </h4>
                        <h1 className="event-date-month">May</h1>
                    </div>
                <div className="event-long-title">
                    Married to the game
                </div>

                <div className="event-long-description">
                    Clients (Aziz Ansari, Sasheer Zamata, Melissa Villaseñor, Pete Davidson) share how they were helped by the law firm of Broderick (Kate McKinnon) &amp; Ganz (Bobby Moynihan).
                </div>
                <div className="event-bottom-info">
                  <span className="event-short-address"> Address Here</span><span className="start-time"> Start Time</span>- <span className="end-time"> End Time</span>
                </div>
            </a>
        </div>
        <div className="events-side-feed">
          <div className="side-event">
              <div className="event-info transition">
                <div className="event-date">
                  <div  className="event-date-month">MAY</div>
                  <div  className="event-date-day">15</div>
                </div>
                <img className="event-image" src="https://www.dailybreeze.com/wp-content/uploads/2018/09/0921_NWS_TDN-L-LALALAND-0921-2jpg-1.jpg?w=620" />
              </div>
              <div className="event-title">Event Title Here</div>
              <button className="event-ticket-button intro-button">Buy Tickets</button>
          </div>

          <div className="side-event">
              <div className="event-info transition">
                <div className="event-date">
                  <div  className="event-date-month">MAY</div>
                  <div  className="event-date-day">15</div>
                </div>
                <img className="event-image" src="https://www.dailybreeze.com/wp-content/uploads/2018/09/0921_NWS_TDN-L-LALALAND-0921-2jpg-1.jpg?w=620" />
              </div>
              <div className="event-title">Event Title Here</div>
              <button className="event-ticket-button intro-button">Buy Tickets</button>
          </div>

          <div className="side-event">
              <div className="event-info transition">
                <div className="event-date">
                  <div  className="event-date-month">MAY</div>
                  <div  className="event-date-day">15</div>
                </div>
                <img className="event-image" src="https://www.dailybreeze.com/wp-content/uploads/2018/09/0921_NWS_TDN-L-LALALAND-0921-2jpg-1.jpg?w=620" />
              </div>
              <div className="event-title">Event Title Here</div>
              <button className="event-ticket-button intro-button">Buy Tickets</button>
          </div>
        </div>
      </div>
    </div>

	 			);
	}
}






export default EventsSlide;
