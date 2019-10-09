import React, { Component } from 'react';
import Slider from 'react-slick';
import Lightbox from 'lightbox-react';

import './ap-gallery.css';
import "slick-carousel/slick/slick.css";

class ApGallery extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	isOpen: false,
		galleryIndex: 0
	};
  }

  	trimURL(url){
		var surl = url.substring(51);
		// console.log("new: " + surl);
		return surl;
	}
	
	createGalleryItem(object, index) {
		
		if ( object.single_or_double_image === "single" ) {
			this.trimURL(object.first_image.sizes.thumbnail);
			return (
				<div className="ap-gallery-area__content">
					<a onClick={() => this.setState({ isOpen: true, galleryIndex: index})} className="ap-gallery-area__single img" data={this.imageCount}>
						<img 
							src={this.trimURL(object.first_image.sizes.thumbnail)}
							alt=""/>
					</a>
				</div>
			);
		} else if ( object.single_or_double_image === "double" ) {

			return (
				<div className="ap-gallery-area__content">
					<a onClick={() => this.setState({ isOpen: true, galleryIndex: index})} className="ap-gallery-area__double" data={this.imageCount}>
						<img 
							src={this.trimURL(object.first_image.sizes.thumbnail)} 
							alt=""/>
					</a>
					<a onClick={() => this.setState({ isOpen: true, galleryIndex: index + 1})} className="ap-gallery-area__double" data={this.imageCount}>
						<img 
							src={this.trimURL(object.second_image.sizes.thumbnail)} 
							alt=""/>
					</a>
				</div>
			);
		} 
	}
	render() {
		const { isOpen, galleryIndex } = this.state;
		const sliderSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true
    };

    let index = 0;
    let galleryContent = [];

    if ( this.props.galleryLoaded ) {
    	this.props.galleryItems.map(function(object, i) {
    		if ( object.single_or_double_image === "single" ) {
				galleryContent.push(object.first_image.sizes.large);
    		} else if ( object.single_or_double_image === "double" ) {
    			galleryContent.push(object.first_image.sizes.large);
				galleryContent.push(object.second_image.sizes.large);
    		}
			return true;
		});
		
    }

    // //console.log("End of for loop ", galleryContent);

		return (
			<div>
				{ this.props.galleryLoaded ? (
					<div className="ap-gallery-area ap-section">
						<h2 className="ap-section__heading">{this.props.galleryTitle}</h2>
						<Slider {...sliderSettings} className="ap-gallery-area__slider">
							{ this.props.galleryItems.map(function(object, i) {
								if ( object.single_or_double_image !== "video" ) {
									return (
										<div className="ap-gallery-area__slide" key={i}>
											{this.createGalleryItem(object, i)}
										</div>
									);
								}
							}.bind(this))}
						</Slider>
						
						{isOpen &&
							<Lightbox
								enableZoom={false}
								imagePadding={64}
	              mainSrc={this.trimURL(galleryContent[galleryIndex])}
	              nextSrc={this.trimURL(galleryContent[(galleryIndex + 1) % galleryContent.length])}
	              prevSrc={this.trimURL(galleryContent[(galleryIndex + galleryContent.length - 1) % galleryContent.length])}
	              onCloseRequest={() => this.setState({ isOpen: false })}
	              onMovePrevRequest={() => this.setState({
	                galleryIndex: (galleryIndex + galleryContent.length - 1) % galleryContent.length,
	              })}
	              onMoveNextRequest={() => this.setState({
	                galleryIndex: (galleryIndex + 1) % galleryContent.length,
	              })}
	            />
						}
					</div>
				) : (
					<div className="ap-gallery-area ap-section">
						<h2 className="ap-section__heading">{'Loading Gallery...'}</h2>
						<Slider {...sliderSettings} className="ap-gallery-area__slider">
							<div className="ap-gallery-area__slide">
								<div className="ap-gallery-area__placeholder"></div>
							</div>
							<div className="ap-gallery-area__slide">
								<div className="ap-gallery-area__placeholder"></div>
							</div>
							<div className="ap-gallery-area__slide">
								<div className="ap-gallery-area__placeholder"></div>
							</div>
							<div className="ap-gallery-area__slide">
								<div className="ap-gallery-area__placeholder"></div>
							</div>
						</Slider>
					</div>
				)}
			</div>
		);
	}
}

export default ApGallery;