import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery'
import swipe from 'jquery-touchswipe';
import enhanceWithClickOutside from 'react-click-outside';
import './react-screensaver.css';
import screenSaverVideo from './ap_intro_supercut.mp4';
import logo from './PH_Screensaver_Branding.png';


class ReactScreensaver extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	active: false,
    	countdown: 3
    };
  }

  componentDidMount() {
  	setInterval( () => { 
  		if ( ! this.state.active ) {
  			this.screenTimeout();
  		}
	  }, 60000);
	  
  }

  handleClickOutside() {
    // console.log('Currently using application!!');
    const countdown = 3;
	this.setState({ countdown });
	

  }
  
	screenTimeout() {
		// console.log('Running timeout function');
		let { countdown } = this.state;
		// console.log('Waiting to activate screensaver', countdown + ' minute(s) remain');

		if ( countdown <= 0 ) {
			this.goToSleep();
		} else {
			countdown--;
			this.setState({ countdown }); 
		}
	}

	goToSleep() {
		// console.log('Turn on screensaver');
		var parentFrame = window.parent.document.getElementsByClassName('holds-the-iframe'); 
		$(parentFrame).css('right', '100%');
		const active = true;
		const countdown = 3;
		const videoEl = document.querySelector('.js-screensaver-video');
		// videoEl.src = screenSaverVideo;
		// video.play().then(_ => {
		// 	// If preloaded video URL was already cached, playback started immediately.

		// });
		if (videoEl === null){
			// plot page don't use screensaver //
		}else{
			videoEl.play().then(_ => {
				// 	// If preloaded video URL was already cached, playback started immediately //
			 });
		}
		
		this.setState({ active, countdown });
	}

	wakeUp() {
		const active = false;
		const countdown = 3;
		const videoEl = document.querySelector('.js-screensaver-video');

		videoEl.pause();
		this.setState({ active, countdown });
	}

	render() {
		const {
			active
		} = this.state;

// Request storage usage and capacity left
// Choose either Temporary or Persistent
// navigator.webkitTemporaryStorage.queryUsageAndQuota ( 
//     function(usedBytes, grantedBytes) {  
//         console.log('we are using ', usedBytes, ' of ', grantedBytes, 'bytes');
//     }, 
//     function(e) { console.log('Error', e);  }
// );

		// Request Quota (only for File System API)  
// var requestedBytes = 1024*1024*1000; // 10MB

// navigator.webkitPersistentStorage.requestQuota (
//     requestedBytes, function(grantedBytes) {  
//         window.requestFileSystem(PERSISTENT, grantedBytes, onInitFs, errorHandler);

//     }, function(e) { console.log('Error', e); }
// );


	$("body").swipe( {
	  //Generic swipe handler for all directions
	  swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		// console.log("You swiped " + direction );  
		// trick the screensaver into thinking a swipe is a click //
		$('body').click();
	  }
	});

		
	  return (
		<div>
			<Link to="/" className={active ? 'ph-screensaver active' : 'ph-screensaver inactive'} onClick={this.wakeUp.bind(this)} >
			
				<div  className="ph-screensaver__wrapper">
					<div className="screenLogo"><img src={logo} width="175px" height="175px" alt=""/></div>
					<div className="ph-screensaver__message">
						
						Touch the screen to explore
					</div>
					<video muted loop src={screenSaverVideo} className="js-screensaver-video ph-screensaver__video"></video>
				</div>
			</Link>
		</div>
	  );
	}
}

export default enhanceWithClickOutside(ReactScreensaver);