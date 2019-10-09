import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './ap-dev-selector.css';

import cedarImg from './img/cedar-square.jpg';
import rideImg from './img/the-ride.jpg';
import serpImg from './img/the-serpentine.jpg';

class ApDevSelector extends Component {
	
	render() {
		var cls = 0;
		$('.cedarPlot').on('click', function(){
			
		});
		return (
			<div className="ap-dev-selector">
				<div className="ap-dev-selector__link cedarPlot">
					<Link to="/cedar-square/">
						<img className="ap-dev-selector__img" src={cedarImg} alt="Cedar Square" />
						<span className="ap-dev-selector__name">Cedar Square</span>
					</Link>
				</div>
				<div className="ap-dev-selector__link" >
					<Link to="/the-ride/">
						<img className="ap-dev-selector__img" src={rideImg} alt="The Ride" />
						<span className="ap-dev-selector__name">The Ride</span>
					</Link>
				</div>
				<div className="ap-dev-selector__link" >
					<Link to="/the-serpentine/">
						<img className="ap-dev-selector__img" src={serpImg} alt="The Serpentine" />
						<span className="ap-dev-selector__name">The Serpentine</span>
					</Link>	
				</div>
			</div>
		);
	}
}

export default ApDevSelector;