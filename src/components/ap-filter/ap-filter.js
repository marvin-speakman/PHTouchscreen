import React, { Component } from 'react';
// import ReactSlider from 'react-slider';
import Slider, { Range } from 'rc-slider';
import $ from 'jquery'
import { abbrNum } from '../../helpers';
import ApFilterResults from '../ap-filter-results/ap-filter-results';
import './ap-filter.css';
import 'rc-slider/assets/index.css';

class ApFilter extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	filterOptions: {
    		showResults: false,
    		minPrice: 0,
    		maxPrice: 2000000,
    		whichSite: [],
    		houseType: [],
    		bedrooms: []
    	},
    };
  }

  setPriceRange(e) {
  	let filterOptions = this.state.filterOptions;
	  filterOptions.minPrice = e[0] * 20000;
	  //filterOptions.minPrice = 500;
  	filterOptions.maxPrice = e[1] * 20000;
  	this.setState( filterOptions );
  }

  setSite(e) {
  	let filterOptions = this.state.filterOptions;
  	if ( e.target.checked === true ) {
		  filterOptions.whichSite.push(e.target.value);
		  console.log(e.target.value)
  	} else if ( e.target.checked === false ) {
  		let removeIndex = filterOptions.whichSite.indexOf(e.target.value);
  		if ( removeIndex !== -1 ) 
  			filterOptions.whichSite.splice(removeIndex, 1);
  	}
  	this.setState( filterOptions );
  }


  setHouseType(e) {
  	let filterOptions = this.state.filterOptions;
  	if ( e.target.checked === true ) {
  		filterOptions.houseType.push(e.target.value);
  	} else if ( e.target.checked === false ) {
  		let removeIndex = filterOptions.houseType.indexOf(e.target.value);
  		if ( removeIndex !== -1 ) 
  			filterOptions.houseType.splice(removeIndex, 1);
  	}
  	this.setState( filterOptions );
  }

  setBedrooms(e) {
  	let filterOptions = this.state.filterOptions;
  	if ( e.target.checked === true ) {
  		filterOptions.bedrooms.push(e.target.value);
  	} else if ( e.target.checked === false ) {
  		let removeIndex = filterOptions.bedrooms.indexOf(e.target.value);
  		if ( removeIndex !== -1 ) 
  			filterOptions.bedrooms.splice(removeIndex, 1);
  	}
  	this.setState( filterOptions );
  }

	runFilter(e) {
		e.preventDefault();
		let filterOptions = this.state.filterOptions;
		if ( this.props.propertiesLoaded === true ) {
			filterOptions.showResults = true;
			this.setState(filterOptions);
			console.log(filterOptions);
		}
	}

	resetFilter() {
		let filterOptions = this.state.filterOptions;
		filterOptions.showResults = false;
		filterOptions.bedrooms = [];
		filterOptions.houseType = [];
		filterOptions.whichSite = [];
		this.setState(filterOptions);
	}

	render() {

		const { filterOptions } = this.state;

		// var url = window.location.pathname;

		// if(url.includes('/the-ride/')){
		// 	console.log('the ride')
		// 	$('.ride').attr('checked', 'checked');
		// 	$('.cedar').attr('disabled', 'disabled');
		// 	$('.serp').attr('disabled', 'disabled');
		// 	filterOptions.whichSite = [];
		// 	filterOptions.whichSite.push('6');
		// }
		// if(url.includes('/cedar-square/')){
		// 	$('.cedar').attr('checked', 'checked');
		// 	$('.ride').attr('disabled', 'disabled');
		// 	$('.serp').attr('disabled', 'disabled');
		// 	console.log('cedar')
		// 	filterOptions.whichSite = [];
		// 	filterOptions.whichSite.push('8');
		// }
		// if(url.includes('/the-serpentine/')){
		// 	$('.serp').attr('checked', 'checked');
		// 	$('.cedar').attr('disabled', 'disabled');
		// 	$('.ride').attr('disabled', 'disabled');
		// 	console.log('serpentine')
		// 	filterOptions.whichSite = [];
		// 	filterOptions.whichSite.push('7');
		// }

		const marks = {
			0: '0',
			// 10: '200K',
			20: '400K',
			// 30: '600K',
			40: '800K',
			// 50: '1M',
			60: '1.2M',
			// 70: '1.4M',
			80: '1.6M',
			// 90: '1.8M',
			100: '2M',
		  };
		
		
		return (
			
			<div className="ap-filter-area">
				<form onSubmit={ this.runFilter.bind(this) } onReset={ this.resetFilter.bind(this) } className="ap-filter ap-section">
					<h2 className="ap-section__heading">{'Choose your home at Alderley Park'}</h2>
					<div className="ap-filter__wrapper">
						<div className="ap-filter__section">
							<div className="ap-filter__price-range">
								<div className="ap-filter__price ap-filter__price--min">{"Min £" + abbrNum(filterOptions.minPrice, 2)}</div>
								<div className="ap-filter__price ap-filter__price--max">{"Max £" + abbrNum(filterOptions.maxPrice, 2)}</div>
							</div>
							<div className="ap-filter__slider">
    							<Range steps='50' marks={marks} onChange={this.setPriceRange.bind(this)} defaultValue={[0, 100]}/>
							</div>
							
						</div>
						<div className="ap-filter__section">
							<div className="ap-filter__option">
								<label className="ap-filter__label">Location</label>
								<div className="ap-filter__checkboxes">
									<label>
										<input className="cedar" type="checkbox" value="8" onChange={this.setSite.bind(this)}/>
										Cedar Square
									</label>
									<label>
										<input className="ride" type="checkbox" value="6" onChange={this.setSite.bind(this)}/>
										The Ride
									</label> 
									<label>
										<input className="serp" type="checkbox" value="7" onChange={this.setSite.bind(this)}/>
										The Serpentine
									</label>
								</div>
							</div>
							<div className="ap-filter__option">
								<label className="ap-filter__label">House Type</label>
								<div className="ap-filter__checkboxes">
									<label>
										<input type="checkbox" value="detached" onChange={this.setHouseType.bind(this)} />
										Detached
									</label>
									<label>
										<input type="checkbox" value="semi" onChange={this.setHouseType.bind(this)} />
										Semi-Detached
									</label>
									<label>
										<input type="checkbox" value="townhouse" onChange={this.setHouseType.bind(this)} />
										Townhouse
									</label>
								</div>
							</div>
							<div className="ap-filter__option">
								<label className="ap-filter__label">Bedrooms</label>
								<div className="ap-filter__checkboxes">
									<label>
										<input type="checkbox" value="2" onChange={this.setBedrooms.bind(this)} />
										2
									</label>
									<label>
										<input type="checkbox" value="3" onChange={this.setBedrooms.bind(this)} />
										3
									</label>
									<label>
										<input type="checkbox" value="4" onChange={this.setBedrooms.bind(this)} />
										4
									</label>
									<label>
										<input type="checkbox" value="5" onChange={this.setBedrooms.bind(this)} />
										5
									</label>
									<label>
										<input type="checkbox" value="6" onChange={this.setBedrooms.bind(this)} />
										6
									</label>
								</div>
							</div>
						</div>
						<div className="ap-filter__section">
							<button type="submit" className="ap-filter__button">{'Filter'}</button>
							<button type="reset" className="ap-filter__button">{'Reset'}</button>
						</div>
					</div>
				</form>
				{this.props.propertiesLoaded &&
					<ApFilterResults 
						properties={this.props.properties} 
						showResults={filterOptions.showResults}
						minPrice={filterOptions.minPrice}
						maxPrice={filterOptions.maxPrice} 
						bedrooms={filterOptions.bedrooms} 
						houseType={filterOptions.houseType}
						whichSite={filterOptions.whichSite} 
					/>
				}
			</div>
		);
	}
}

export default ApFilter;