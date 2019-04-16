import React, { Component } from 'react';

class Blog extends Component {

	render() {
	    return (
	 	
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


	 			);
	}
}



export default Blog;

