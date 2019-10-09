import React, { Component } from 'react';
import $ from 'jquery';
import './ap-brochures.css';

import life from './img/lifestyle.jpg';
import cedar from './img/cedar-square.jpg';
import ride from './img/the-ride.jpg';
import serp from './img/the-serpentine.jpg';
import extra from './img/extras.jpg';
import closeIcon from './img/close-button.svg';

class ApBrochures extends Component {
	constructor(props) {
    super(props);

    this.state = {
    	brochureActive: false,
    	brochureUrl: '/flip-brochure/alderley-park/',
    	brochureLoaded: false
    };
  }

	openBrochureModal(url) {

		let brochureActive = true;
		let brochureUrl = url;
		let brochureLoaded = false;

		let currentBrochure = this.state.brochureUrl;
		let newBrochure = url;

		if ( currentBrochure === newBrochure ) {
			brochureLoaded = true;
		}

		this.setState({ brochureActive, brochureUrl, brochureLoaded });
	}

	closeBrochureModal() {
		const brochureActive = false;
		const brochureLoaded = false;
		this.setState({ brochureActive, brochureLoaded });
	}

	brochureContentLoaded() {
		const brochureLoaded = true;
		this.setState({ brochureLoaded });
	}

	render() {
		const {
			brochureActive,
			brochureUrl,
			brochureLoaded
		} = this.state;
		// $('iframe').contents().find("head").append($("<style type='text/css'>  .ControlBar {display: none;}  </style>"));
		return (
			<div className="ap-brochures ap-section">
				<h2 className="ap-brochures__heading ap-section__heading">Brochures</h2>
				<p className="ap-brochures__heading sans explore">TOUCH A BROCHURE TO EXPLORE FURTHER</p>
				<div className="ap-brochures__wrapper">
					<a className="ap-brochures__link" 
						onClick={ () => { this.openBrochureModal('http://phph.co.uk/flip-brochure/alderley-park-ts/') } }>
						<img className="ap-brochures__img" src={life} alt="lifestyle-brochure"/>
						<span className="ap-brochures__name">Alderley Park Lifestyle</span>
					</a>
					<a className="ap-brochures__link" 
					onClick={ () => { this.openBrochureModal('http://phph.co.uk/flip-brochure/cedar-square-ts/index.html') } }>
						<img className="ap-brochures__img" src={cedar} alt="lifestyle-brochure"/>
						<span className="ap-brochures__name">Cedar Square</span>
					</a>
					<a className="ap-brochures__link" 
					onClick={ () => { this.openBrochureModal('http://phph.co.uk/flip-brochure/the-ride-ts/') } }>
						<img className="ap-brochures__img" src={ride} alt="lifestyle-brochure"/>
						<span className="ap-brochures__name">The Ride</span>
					</a>
					<a className="ap-brochures__link" 
					onClick={ () => { this.openBrochureModal('http://phph.co.uk/flip-brochure/the-serpentine-ts/') } }>
						<img className="ap-brochures__img" src={serp} alt="lifestyle-brochure"/>
						<span className="ap-brochures__name">The Serpentine</span>
					</a>
				</div>
				<div className="alderley-section__wrapper brochures__wrapper no_divider_t">
					<a className="ap-brochures__link" 
					onClick={ () => { this.openBrochureModal('http://phph.co.uk/flip-brochure/alderley-extra/') } }>
						<img className="brochures__img bro_img_single ap-brochures__img" alt="Specifications, interior palettes &amp; extras" src={extra}/>
						<div className="brochures__title ap-brochures__name">Specifications, interior palettes &amp; extras</div>
					</a>
				</div>
				
				<div className={brochureActive ? 'ap-brochures__popup active' : 'ap-brochures__popup inactive'}>
					<a className="ap-brochures__close" onClick={ () => { this.closeBrochureModal() } }>
						<img src={closeIcon} alt="close"/>
					</a>
					<iframe title="Alderley Park Brochures" className={brochureLoaded ? 'ap-brochures__frame active' : 'ap-brochures__frame inactive' } src={brochureUrl} seamless="seamless" frameBorder="0" onLoad={ () => {this.brochureContentLoaded() } }></iframe>
				</div>
			</div>
		);
	}
}

export default ApBrochures;