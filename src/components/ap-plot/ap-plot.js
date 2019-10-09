import React, { Component } from 'react';
import $ from 'jquery';
// import ScrollToTopOnMount from '../scroll-to-top/scroll-to-top';
import ApFloorplans from '../ap-floorplans/ap-floorplans';
import ApSpecification from '../ap-specification/ap-specification';
import './ap-plot.css';


class ApPlot extends Component {
	render() {
		let formPrice;

		let singlePropertyObject = {};

		function commafy( num ) {
			var str = num.toString().split('.');
			if (str[0].length >= 5) {
				str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
			}
			if (str[1] && str[1].length >= 5) {
				str[1] = str[1].replace(/(\d{3})/g, '$1 ');
			}
			// console.log(str)
			formPrice = str;
			return str.join('.');
		}

		function trimURL2(url){
            var surl = url.substring(51);
            // console.log("new: " + surl);
            return surl;
        }
		
		if ( this.props.propertiesLoaded ) {
			console.log('properties loaded')
			singlePropertyObject = this.props.properties.filter(function( object ) {
			return object.slug === this.props.match.params.plot;
			}.bind(this));
			var price = singlePropertyObject[0].acf.price;
			var plotImg = singlePropertyObject[0].better_featured_image.media_details.sizes.large.source_url;
			commafy(price);
			// $('.ap-plot__img').addClass('show');
		}

		// $('.ph-screensaver').empty();

		$(document).on('click', '.closeiFrame', function(){
			// console.log('click');
			var parentFrame = window.parent.document.getElementsByClassName('holds-the-iframe'); 
			$(parentFrame).css('right', '100%');
		});
		
		return (
			<div className="ap-plot">
				<script>
					window.onload = function() {document.body.scrollTop = document.documentElement.scrollTop = 0};
				</script>
				
				{ this.props.propertiesLoaded &&
				
					<div className="ap-plot__single">
					
						{/* <span className=".js-screensaver-video"></span> */}
						
						{/* <img className="ap-plot__img" src={singlePropertyObject[0].better_featured_image.source_url} alt={''} /> */}
						<div className="ap-plot-infoHolder">
						
							<img className="ap-plot__img" src={trimURL2(plotImg)} alt={''} />
							<div id="scrollDown" className="plotSwipe">
							SWIPE UP
							<span></span>
						</div>
							<div className="ap-plot__details">
								<div className="ap-plot__label">{'House Type: '}</div>
								<div className="ap-plot__info">{singlePropertyObject[0].title.rendered}</div>
								<div className="ap-plot__sep"></div>
								<div className="ap-plot__label">{'Plot Number: '}</div>
								<div className="ap-plot__info">{singlePropertyObject[0].acf.plot_number}</div>
								<div className="ap-plot__br"></div>
								<div className="ap-plot__label">{'Availability: '}</div>
								<div className="ap-plot__info">{singlePropertyObject[0].acf.availability}</div>
								
								{singlePropertyObject[0].acf.availability === 'available' &&
									<span>
										<div className="ap-plot__sep"></div>
										<div className="ap-plot__label">{'Price: '}</div>
										<div className="ap-plot__info">£{formPrice}</div>
									</span>
								}
								
								<div className="ap-plot__description">
									{
										singlePropertyObject[0].acf.floor_area + ' sqft ' + singlePropertyObject[0].acf.bedrooms + ' bedroom ' + 
										singlePropertyObject[0].acf.bathrooms + ' bathroom ' + singlePropertyObject[0].acf.description
									}
								</div>
							</div>
						</div>
						<ApFloorplans floorplans={singlePropertyObject[0].acf.floorplans} plot_location={singlePropertyObject[0].acf.plot_location} />
						<ApSpecification spec_level_id={singlePropertyObject[0].acf.specification_level} spec_content={this.props.specContent} spec_content_loaded={this.props.specLoaded}/>
					</div>
				}
			</div>
		);
	}
}

export default ApPlot;