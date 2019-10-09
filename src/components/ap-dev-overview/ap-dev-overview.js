import React, { Component } from 'react';
import $ from 'jquery';
import './ap-dev-overview.css';
import ApCedarPlan from '../ap-cedar-plan/ap-cedar-plan';
import ApRidePlan from '../ap-ride-plan/ap-ride-plan';
import ApSerpPlan from '../ap-serpentine-plan/ap-serpentine-plan';
import cedarCgi from './img/cedar-square-dev-cgi.jpg';
import rideCgi from './img/the-ride-dev-cgi.jpg';
import serpCgi from './img/the-serpentine-dev-cgi.jpg';

import cedarTopDown from './img/cedar-square-top-down-cgi.jpg';
import rideTopDown from './img/the-ride-top-down-cgi.jpg';
import serpTopDown from './img/the-serpentine-top-down-cgi.jpg';

import rideVid1 from './video/theride1.mp4';
import rideVid2 from './video/theride2.mp4';
import rideVid3 from './video/theride3.mp4';

import cedarVid1 from './video/cedar1.mp4';
import cedarVid2 from './video/cedar2.mp4';
import cedarVid3 from './video/cedar3.mp4';

import serpVid1 from './video/serp1.mp4';
import serpVid2 from './video/serp2.mp4';
import serpVid3 from './video/serp3.mp4';

import videoIcon from './img/videoIcon.png';
// serpVid4 was removed //
import serpVid4 from './video/serp5.mp4';


import logo from './img/logo.png';

class ApDevOverview extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	cgiImg: '',
      introCopy: '',
      topDown: ''
    };
  }

  componentDidUpdate() {
  }

  componentDidMount() {
  	const whichDev = this.props.match.params.devname;
  	let cgiImg = '';
    let introCopy = '';
    let topDown = '';
    
    ////console.log(this.props.properties);

  	switch (whichDev) {
  		case 'cedar-square':
  			cgiImg = cedarCgi;
        if ( this.props.introsLoaded )
          introCopy = this.props.introCopy.cedarSquare.content;
          topDown = cedarTopDown;
          
  			break;
  		case 'the-ride':
  			cgiImg = rideCgi;
        if ( this.props.introsLoaded )
          introCopy = this.props.introCopy.theRide.content;
          topDown = rideTopDown;
  			break;
  		case 'the-serpentine':
  			cgiImg = serpCgi;
        if ( this.props.introsLoaded )
          introCopy = this.props.introCopy.theSerpentine.content;
          topDown = serpTopDown;
  			break;
  		default:
  			break;
    }    
  	this.setState({ cgiImg, introCopy, topDown });
  }

  componentWillReceiveProps(nextProps) {
  	const whichDev = nextProps.match.params.devname;
  	let cgiImg = '';
    let introCopy = '';
    let topDown = '';
  	switch (whichDev) {
      case 'cedar-square':
        cgiImg = cedarCgi;

        if ( this.props.introsLoaded )
          introCopy = this.props.introCopy.cedarSquare.content;
          topDown = cedarTopDown;
          //this.forceUpdate();
        break;
      case 'the-ride':
        cgiImg = rideCgi;
        if ( this.props.introsLoaded )
          introCopy = this.props.introCopy.theRide.content;
          topDown = rideTopDown;
          //this.forceUpdate();
        break;
      case 'the-serpentine':
        cgiImg = serpCgi;
        if ( this.props.introsLoaded )
          introCopy = this.props.introCopy.theSerpentine.content;
          topDown = serpTopDown;
          //this.forceUpdate();
        break;
      default:
        break;
    }
    //this.forceUpdate();
  	this.setState({ cgiImg, introCopy, topDown });
  }

	render() {

    $(document).on('click', '.vidClick', function(){
      var vid = $(this).attr('id');
      // if($(this).hasClass('full')){
      //   $(this).removeClass('full');
      // }else{
      //   $(this).addClass('full');
      // }
      $(this).addClass('full');

      var vidString = vid + 'Vid';
      var vidObject = document.getElementById(vidString); 
      console.log(vidString);
      
      
      vidObject.play();
      vidObject.addEventListener('ended',myHandler,false);
      function myHandler(e) {
        $(this).parent().removeClass('full');
      }
    })
  

    const whichDev = this.props.match.params.devname;
    //console.log(this.props.properties);
    const { cgiImg, introCopy } = this.state;
    
    
    if (whichDev === 'cedar-square'){
      $('.alderley-top-down--the-ride').css('display', 'none');
      $('.alderley-top-down--the-serpentine').css('display', 'none');
      $('.alderley-top-down--cedar-square').css('display', 'block');
      $('.infoHolder').css('display', 'none');
      $('.touchHouse').css('display', 'none');
      $('.cedarTouch').css('display', 'block');
    }
    if (whichDev === 'the-ride'){
      $('.alderley-top-down--the-ride').css('display', 'block');
      $('.alderley-top-down--the-serpentine').css('display', 'none');
      $('.alderley-top-down--cedar-square').css('display', 'none');
      $('.infoHolder').css('display', 'none');
      $('.touchHouse').css('display', 'none');
      $('.rideTouch').css('display', 'block');
    }
    if (whichDev === 'the-serpentine'){
      $('.alderley-top-down--the-ride').css('display', 'none');
      $('.alderley-top-down--the-serpentine').css('display', 'block');
      $('.alderley-top-down--cedar-square').css('display', 'none');
      $('.infoHolder').css('display', 'none');
      $('.touchHouse').css('display', 'none');
      $('.serpTouch').css('display', 'block');
    }

		return (
      
			<div className="ap-overview">
        <h2 className="ap-section__heading mainHeading">
          <img src={logo} width="100px" height="100px" alt=""/>
        </h2>
        <div className="ap-overview__img-wrapper">
          
        {whichDev === 'cedar-square' &&
                    <div className="pointHolder">
                      <div className="pulse_holder cedar1p" >
                        <img className="vidIcon" src={videoIcon} alt=""/>
                        <div className="pulse_rays"  ></div>
                      </div>
                      <div className="vidClick" id="cedar1">
                        <video className="ap-virtual-tour__video" id="cedar1Vid" muted src={cedarVid1}></video>
                      </div>
        
                      <div className="pulse_holder cedar2p">
                        <img className="vidIcon" src={videoIcon} alt="" /> 
                        <div className="pulse_rays"  ></div>
                      </div>
                      <div className="vidClick" id="cedar2">
                        <video className="ap-virtual-tour__video" id="cedar2Vid" muted src={cedarVid2}></video>
                      </div>
        
                      <div className="pulse_holder cedar3p">
                        <img className="vidIcon" src={videoIcon} alt="" />
                        <div className="pulse_rays"  ></div>
                      </div>
                      <div className="vidClick" id="cedar3">
                        <video className="ap-virtual-tour__video" id="cedar3Vid" muted src={cedarVid3}></video>
                      </div>
                    </div>
        }
        {whichDev === 'the-ride' &&
            <div className="pointHolder">
              <div className="pulse_holder ride1p" >
                <img className="vidIcon" src={videoIcon}  alt="" />
                <div className="pulse_rays"  ></div>
              </div>
              <div className="vidClick" id="ride1">
                <video className="ap-virtual-tour__video" id="ride1Vid" muted src={rideVid1}></video>
              </div>

              <div className="pulse_holder ride2p">
                <img className="vidIcon" src={videoIcon} alt="" />
                <div className="pulse_rays"  ></div>
              </div>
              <div className="vidClick" id="ride2">
                <video className="ap-virtual-tour__video" id="ride2Vid" muted src={rideVid3}></video>
              </div>

              <div className="pulse_holder ride3p">
                <img className="vidIcon" src={videoIcon} alt="" />
                <div className="pulse_rays"  ></div>
              </div>
              <div className="vidClick" id="ride3">
                <video className="ap-virtual-tour__video" id="ride3Vid" muted src={rideVid2}></video>
              </div>
            </div>
        }
        {whichDev === 'the-serpentine' &&
                     <div className="pointHolder">
                     <div className="pulse_holder serp1p" >
                      <img className="vidIcon" src={videoIcon} alt="" />
                      <div className="pulse_rays"  ></div>
                     </div>
                     <div className="vidClick" id="serp1">
                       <video className="ap-virtual-tour__video" id="serp1Vid" muted src={serpVid1}></video>
                     </div>
       
                     <div className="pulse_holder serp2p">
                      <img className="vidIcon" src={videoIcon} alt="" />
                      <div className="pulse_rays"  ></div>
                     </div>
                     <div className="vidClick" id="serp2">
                       <video className="ap-virtual-tour__video" id="serp2Vid" muted src={serpVid2}></video>
                     </div>
       
                     <div className="pulse_holder serp3p">
                      <img className="vidIcon" src={videoIcon} alt="" />
                      <div className="pulse_rays"  ></div>
                     </div>
                     <div className="vidClick" id="serp3">
                       <video className="ap-virtual-tour__video" id="serp3Vid" muted src={serpVid3}></video>
                     </div>

                     {/* <div className="pulse_holder serp4p">
                       <div className="pulse_marker">
                         <div className="pulse_rays"></div>
                       </div>
                     </div>
                     <div className="vidClick" id="serp4">
                       <video className="ap-virtual-tour__video" id="serp4Vid" muted src={serpVid4}></video>
                     </div> */}

                     <div className="pulse_holder serp5p">
                      <img className="vidIcon" src={videoIcon} alt="" />
                      <div className="pulse_rays"  ></div>
                     </div>
                     <div className="vidClick" id="serp5">
                       <video className="ap-virtual-tour__video" id="serp5Vid" muted src={serpVid4}></video>
                     </div>
                   </div>
        }




				  <img className="ap-overview__cgi" src={cgiImg} alt="" />
          {/* <span className="ap-overview__scroll-prompt"></span> */}
          <div id="scrollDown">
            SWIPE UP
            <span></span>
          </div>
        </div>
        

      
        {/* {whichDev === 'cedar-square' && */}
          <ApCedarPlan properties={this.props.properties} key='cedar'/>
        {/* } */}
        {/* {whichDev === 'the-ride' && */}
          <ApRidePlan properties={this.props.properties} key='ride'/>
        {/* } */}
        {/* {whichDev === 'the-serpentine' && */}
           <ApSerpPlan properties={this.props.properties} key='serp'/>
        {/* } */}
        {this.props.introsLoaded &&
          <div className="ap-overview__intro ap-section" dangerouslySetInnerHTML={{__html: introCopy}}></div>
        }
			</div>
		);
	}
}

export default ApDevOverview;