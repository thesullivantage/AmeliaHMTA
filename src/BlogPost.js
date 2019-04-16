import React, { Component } from 'react';

class BlogPost extends Component {

	render() {
	    return (
	 	

<div className="blog-post">
						<div className="blog-post-pre">
							<div className="blog-post-cat">{this.props.category}</div>
							<div className="blog-post-date">{this.props.date}</div>
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
	 			);
	}
}



export default BlogPost;

