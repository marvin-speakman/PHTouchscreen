import React, { Component } from 'react';
import Slider from 'react-slick';
import Lightbox from 'lightbox-react';

import "slick-carousel/slick/slick.css";

class ApFloorplans extends Component {
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

	createFloorplanItem(object, index) {
		return (
			<div className="ap-gallery-area__content">
				<a onClick={() => this.setState({ isOpen: true, galleryIndex: index })} className="ap-gallery-area__single">
					<img 
						src={this.trimURL(object.floorplan.sizes.thumbnail)} 
						alt=""/>
				</a>
			</div>
		);
	}

	render() {
		
		const { isOpen, galleryIndex } = this.state;
		const sliderSettings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: this.props.floorplans.length + 1,
      slidesToScroll: this.props.floorplans.length + 1,
      arrows: false
		};
		
		

    let galleryItems = [];

    this.props.floorplans.map((object) => {
    	galleryItems.push(object.floorplan.sizes.large);
    	return true;
    });

    galleryItems.unshift(this.props.plot_location.sizes.large);
    

		// //console.log(this.props.floorplans);

		return (
			<div className="ap-floorplans ap-section">
				<h2 className="ap-section__heading">Location of plot &amp; floorplans</h2>
				<p className="ap-brochures__heading sans explore">TOUCH SITE PLAN OR FLOORPLAN TO ENLARGE</p>
				<Slider {...sliderSettings} className="ap-gallery-area__slider">
					<div className="ap-gallery-area__slide" key={'0'}>
						<div className="ap-gallery-area__content">
							<a onClick={() => this.setState({ isOpen: true, galleryIndex: 0 })} className="ap-gallery-area__single">
								<img 
									src={this.trimURL(this.props.plot_location.sizes.thumbnail)} 
									alt=""/>
							</a>
						</div>
					</div>
					{ this.props.floorplans.map(function(object, i) {
						return (
							<div className="ap-gallery-area__slide" key={i + 1}>
								{this.createFloorplanItem(object, i + 1)}
							</div>
						);
					}.bind(this))}
				</Slider>

				{isOpen &&
					<Lightbox
						enableZoom={false}
						imagePadding={64}
            mainSrc={this.trimURL(galleryItems[galleryIndex])}
            nextSrc={this.trimURL(galleryItems[(galleryIndex + 1) % galleryItems.length])}
            prevSrc={this.trimURL(galleryItems[(galleryIndex + galleryItems.length - 1) % galleryItems.length])}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() => this.setState({
              galleryIndex: (galleryIndex + galleryItems.length - 1) % galleryItems.length,
            })}
            onMoveNextRequest={() => this.setState({
              galleryIndex: (galleryIndex + 1) % galleryItems.length,
            })}
          />
				}
			</div>
		);
	}
}

export default ApFloorplans;