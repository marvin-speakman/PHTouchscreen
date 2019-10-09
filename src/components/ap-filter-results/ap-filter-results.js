import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { VelocityComponent } from 'velocity-react';
import $ from 'jquery';
import { addCommas, apSiteName } from '../../helpers';
import './ap-filter-results.css';

class ApFilterResults extends Component {
	
	isPropertyValid(object) {
		if ( object.acf.price < this.props.minPrice )
			return false;

		if ( object.acf.price > this.props.maxPrice )
			return false;

		if ( object.acf.availability === "sold" || object.acf.availability === "reserved")
			return false;	

		if ( this.props.bedrooms.length > 0 && this.props.bedrooms.indexOf(object.acf.bedrooms) === -1)
			return false;

		if ( this.props.houseType.length > 0 && this.props.houseType.indexOf(object.acf.property_type) === -1)
			return false;
		
		
		let propertySite = object.property_sites.reduce(function(a, b) {
    	return Math.max(a, b);
		});

		if ( this.props.whichSite.length > 0 && this.props.whichSite.indexOf(propertySite.toString()) === -1)
			return false;

		return true;
	}

	render() {
		let listedProperties = this.props.properties.filter((object, i) => {
			return this.isPropertyValid(object);
		});

		let resultsTitle = '';

		if ( listedProperties.length === 0 ) {
			resultsTitle = 'No properties found';
		} else if ( listedProperties.length === 1 ){
			resultsTitle = '1 property found';
		} else {
			resultsTitle = listedProperties.length + ' properties found';
		}
		$(".filterView").off().on("click", function() {
			$('iframe').attr('src', ''); 
            var curSlug = '/plot/' + $(this).attr('id');
            console.log('click ' + curSlug);
            $('.holds-the-iframe').css('right', '0px');
            // setTimeout(function () {
               $('iframe').attr('src', curSlug); 
            // }, 2000);
		});

		function trimURL(url){
			var surl = url.substring(51);
			// console.log("new: " + surl);
			return surl;
		}

		return (
			<VelocityComponent animation={this.props.showResults ? 'slideDown' : 'slideUp'} duration={800}>
				<div className="ap-section">
					<h2 className="ap-section__heading">{resultsTitle}</h2>
					<ul className="ap-filter-results__list">
						{ listedProperties.map(function(object,i) {
							// //console.log(object);
							return (
								<li className="ap-filter-results__result results_" key={object.id}>
								<div className="filterView" id={object.slug}>
									
										<img className="" src={trimURL(object.better_featured_image.media_details.sizes.thumbnail.source_url)} alt={''} />
								
									</div>
									<div className="ap-filter-results__content">
										<div className="ap-filter-results__row">
											<div className="ap-filter-results__label">Plot Number: </div>
											<div className="ap-filter-results__value">{object.acf.plot_number}</div>
											<div className="ap-filter-results__sep"></div>
											<div className="ap-filter-results__label">House Type: </div>
											<div className="ap-filter-results__value">{object.title.rendered}</div>
										</div>
										<div className="ap-filter-results__row">
											<div className="ap-filter-results__label">Price: </div>
											<div className="ap-filter-results__value">{"£" + addCommas(object.acf.price)}</div>
											<div className="ap-filter-results__sep"></div>
											<div className="ap-filter-results__label">Availability: </div>
											<div className="ap-filter-results__value">{object.acf.availability}</div>
										</div>
										<div className="ap-filter-results__row">
											<div className="ap-filter-results__label">Development: </div>
											<div className="ap-filter-results__value">{
												apSiteName(object.property_sites.reduce(function(a, b) {
    											return Math.max(a, b);
												}))
											}</div>
										</div>
										<div className="ap-filter-results__row">
											<div className="ap-filter-results__desc">
												{
													object.acf.floor_area + ' sqft ' + object.acf.bedrooms + ' bedroom ' + 
													object.acf.bathrooms + ' bathroom ' + object.acf.description
												}
											</div>
										</div>
									</div>
									{object.acf.availability === 'not-released' &&
										<div className="ap-filter-results__view filterView" id={object.slug}>
											VIEW 
										</div>
									}
									{object.acf.availability === 'available' &&
										<div className="ap-filter-results__view filterView" id={object.slug}>
											VIEW 
										</div>
									}
								</li>
							);
						})}
					</ul>
				</div>
			</VelocityComponent>
		);
	}
}

export default ApFilterResults;