import React, { Component } from 'react';
import $ from 'jquery'
import './ap-virtual-tour.css';
import alderleyVid from './video/alderley-park.mp4';
import cedarVid from './video/cedar-square.mp4';
import rideVid from './video/the-ride.mp4';
import serpVid from './video/the-serpentine.mp4';

class ApVirtualTour extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	expanded: false
    };
  }

  closeVideo() {
  	const expanded = false;
	  this.setState({ expanded });
  }

	expandVideo() {
		const expanded = true;
		this.setState({ expanded });
		var vTour = document.getElementById("vTourVideo");
		vTour.addEventListener('ended',this.listen.bind(this),false);
	}

	listen(){
		const expanded = false;
		var vTour = document.getElementById("vTourVideo");
		vTour.play();
		this.setState({ expanded });
	}

	render() {
		
		const { expanded } = this.state;

		let videoSrc = '';

		switch ( this.props.match.params.devname ) {
			case 'cedar-square':
				videoSrc = cedarVid;
				break;
			case 'the-ride':
				videoSrc = rideVid;
				break;
			case 'the-serpentine':
				videoSrc = serpVid;
				break;
			default:
				videoSrc = alderleyVid;
				break;
		}

		return (
			<div 
				className={ expanded ? 'ap-virtual-tour full' : 'ap-virtual-tour'} 
				onClick={ expanded ? this.closeVideo.bind(this) : this.expandVideo.bind(this) }>
				<div className={ expanded ? 'openVideo open' : 'openVideo'}>TOUCH TO EXPAND</div>
				<div className={ expanded ? 'closeVideo open' : 'closeVideo'}>TOUCH TO MINIMIZE</div>
				<video
					id="vTourVideo"
					className="ap-virtual-tour__video" 
					autoPlay={ ! expanded ? true : false } 
					loop = {true}
					controls = { expanded ? true : false } 
					muted
					src={videoSrc}></video>
			</div>
		);
	}
}

export default ApVirtualTour;