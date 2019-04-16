import React, { Component } from 'react';
import LandingPage from "./LandingPage";

class App extends Component {
  render() {
    return (
          <div>
            <title>HMTA new site</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" type="text/css" href="/main.css" />
            <div className="site transition">
    <header className="header">
      <a className="hmta-logo-link" href="/"><img src="/images/hmta logo.png" className="hmta-logo-link-image"/></a>
      <nav className="menu-toggle transition">
        <span className="toggle-1"></span>
        <span className="toggle-2"></span>
        <span className="toggle-3"></span>
      </nav>
    </header>
    
    <div className="intro-slide block">
      <div className="wrapper">
        <video autoPlay muted loop id="bgv">
          <source src="/videos/bg.mp4" type="video/mp4"></source>
        </video>
        <div className="intro-info">
          <h1 className="intro-text"> BE <span>BOLD</span></h1>
          <p className="intro-paragraph">This is where a paragrah would go and what not</p>
          <button className="intro-button transition">ENTER HERE</button>
        </div>
      
      </div>
    </div>
    <div className="quote-block">
      <div className="quote-bg">
        <div className="quote-block-info">
          <h2 className="quote-info-text">
            HERE WITH MY WINGS CLIPPED
          </h2>
        </div>
      </div>
    </div>
    

    <div className="hmta-menu block">
      <div className="menu-left">
        <div className="drip">
          <h1 className="drip-title">HAND ME <span className="title-outline">THE AUX</span></h1>
          <div className="drip-div"></div>
          <img className="menu-left-img" src="/images/menu drip.png"/>
        </div>
      </div>
      <div className="menu-right">
        <button className="menu-x transition">X</button>
        <nav className="menu-links transition">
          <a>HOME</a>
          <a>events</a>
          <a>blog</a>
          <a>creative services</a>
          <a>contact us</a>
          <a>artists mngmnt</a>
          <a>discover playlist</a>
        </nav>
      </div>
    </div>
    <div className="discover-weekly block" style={{backgroundImage: "url('/images/dw bg sample.png')"}}>
      <div className="discover-image" >
        <div className="discover-text-block">
          <div className="discover-info">
            <div className="discover-title-block">
              <h1 className="discover-title disc-top">DISCOVER</h1> 
              <div className="dw-bottom"><h1 className="discover-title disc-bottom">WEEKLY</h1></div> 
            </div>
            <div className="play-block">
              <a href="https://open.spotify.com/user/hmtheaux/playlist/5dswEDO2s6XQWzyPGd7uWX?si=4dYtZKkJRSCN2dALCPVCZw" target="_blank"><img className="play-button discover-play" src="/images/play button filled play.svg"/></a> <span> PLAY ON SPOTIFY</span>
            </div>
            <p>Check out HMTA's editoral staffs' picks of songs for the week! Certified heat; updated every Monday. This week's theme: <b>Pink Slip</b> sponsored by Hennessey.</p>
          </div>
        </div>
        <img className="discover-image-graphic" src="/images/dw test graphic.png" />
        <div className="dw-image-drip"></div>
      </div>
    </div>

    <div className="artists-slide">
      <div className="artists-wrapper">
        <div className="aritst-slide-title-block">
          <div className="artits-slide-title">ARTISTS</div>
        </div>
        <div className="artists-slide-artists">
          <h2> KEENON RUSH</h2>
          <h2> TROOP BRAND</h2>
        </div>
        
      </div>
      <a className="artists-slide-contact">Contact</a>
    </div>
    <div className="what-we-do-slide block">
      <div className="what-we-do-wrapper">
        <div className="what-we-do-info">
          <h1 className="what-we-do-text">what we do</h1>
          <div className="what-we-do-bar"></div>
          <p>this is like the long version of our vision and maybe some icons as wellthis is like the long version of our vision and maybe some icons as wellthis is like the long version of our vision and maybe some icons as wellthis is like the long version of our vision and maybe some icons as well</p>
        </div>
        <div className="what-we-do-drip">
          <img className="img-collage" src="/images/wwd.png"/>
          <div className="what-do-drip-bar"></div>
        </div>
      </div>
    </div>
    <div className="ar-slide block">
      <div className="ar-wrapper">
        <h1 className="ar-title">A<span className="ar-outline">&</span>R</h1>
        <img className="arc" src="/images/collage.png" />
        <ul className="ar-points">
          <li>Bullet Point 1</li>
          <li>Bullet Point 2</li>
          <li>Bullet Point 3</li>
        </ul>
        <p className="ar-p">  paragraph goes here and you’d write a bunch of stuff, it’s left aligned</p>
      </div>
    </div>
    <div className="contact-us-slide block">
      <div className="contact-us-left">
        <img className="drip-cu" src="/images/arrow contact.png"/>
      </div>
      <form className="slide-cu-form">
        <h1> Contact <span className="cu-outline">US</span></h1> 
        <p>This is where a paragraph would go and what not </p>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="email" placeholder="email" />
        <textarea type="text" name="message" placeholder="message" className="large-cu-input"></textarea> 
        <button className="cu-submit transition">SEND</button>
      </form>
    </div>
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

    <div className="blog-page">
      <div className="blog-title-bg" style={{backgroundImage: "url('http://cache.vevo.com/Content/VevoImages/video/8F469607E26335FF7C3B71469F16A1D6.jpg')"}}>
        <div className="darken">
          <div className="blog-page-title-holder">
            <h1 className="blog-page-title">BLOG</h1>
          </div>
        </div>
      </div>
      <div className="blog-main">
        <div className="blog-posts-feed">
          <div className="blog-post">
            <div className="blog-post-pre">
              <div className="blog-post-cat">Category</div>
              <div className="blog-post-date">March 1st, 2019</div>
              <div className="blog-post-share-links">
                
              </div>
            </div>
            <div className="blog-post-info">
              <h1 className="bp-title">Blog Title </h1>
              <div className="author-info">
                <img src="https://djbooth.net/.image/t_share/MTYyMTY2MTE3Njk4MTE5NDg5/lil-pump-harverd-dropout-album-review.jpg" />
                <div className="author-info-text">
                  <div className="by">by <span>Armon Sadler</span></div>
                  <div className="author-pos">Staff Writer</div>
                </div>
              </div>
            </div>

            <div className="blog-post-post"></div>
          </div>
        </div>
        <div className="blog-menu">
          <input type="text" name="search blog" placeholder="search blog" className="blog-search"/>
          <div className="menu-slider">Archive</div>
          <div className="menu-slider">Recent Posts</div>
          <div className="menu-link">Lyric Generator</div>
        </div>
      </div>
    </div>

    <footer>
       <div className="wrapper">
        <div className="footer-top">
          <div className="discover-link-footer">
         <img src="/images/play button no fill.svg" /><span> Discover Playlist </span>
          </div>
          <div className="footer-social-links">
            <p> ndskfndsknfl</p>
          </div>
        </div>
        <div className="footer-main">
          <div className="footer-info">
            <div className="footer-hmta-name">
              <h3 className="footer-hmta-title">Hand Me The Aux LLC</h3> 
              <h4 className="footer-hmta-address">1040 Forest Overlook Trail, Atlanta GA, 30331</h4> 
            </div>
            <div className="footer-hmta-contact">
              <h3 className="footer-hmta-contact-title">Connect With Us</h3> 
              <div className="">678-313-5746</div>
              <a>ojp3@cornell.edu</a>
            </div>
          </div>
          <div className="footer-middle">
            <h2 className="footer-headline">We party, we design, we make music. Check us out</h2>
            <nav className="footer-navs">
              <a className="footer-nav-link"> Blog</a>
              <a className="footer-nav-link"> Merch</a>
              <a className="footer-nav-link"> Creative Services</a>
              <a className="footer-nav-link"> About Us</a>
              <a className="footer-nav-link"> Contact Us</a>
              <a className="footer-nav-link"> Artists</a>
              <a className="footer-nav-link"> Events</a>
            </nav>
          </div>
          <div className="footer-event-link">
            <div className="footer-event">
              <div className="event-info">
                <div className="event-date">
                  <div  className="event-data-month">MAY</div>
                  <div  className="event-data-day">15</div>
                </div>
                <img className="event-image" src="https://www.okayplayer.com/wp-content/uploads/2017/05/Awful-Records-Launches-Monthly-Red-Bull-Radio-Show-Bruh-with-Zack-Fox-and-Flying-Lotus--715x480.jpg" />
              </div>
              <div className="event-title">Event Title Here</div>
              <button className="event-ticket-button transition">Buy Tickets</button>
            </div>
          </div>
          <div className="footer-drip-bar"></div>
          </div>
        </div>
    </footer>

  </div>
  </div>
        );
      }
    };
  


export default App;
