import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './ap-site-map.css';
import fullSiteMap from './img/ap-full-site.jpg';
import farm from './img/home_farm.png';
import walks from './img/parkland_walks.png';
import ride from './img/the_ride.png';
import serpent from './img/the_serpentine.png';
import cedar from './img/cedar_square.png';
import future from './img/future_phase.png';
import arboretum from './img/arboretum.png';
import water_gardens from './img/water_garden.png';
import courtyard from './img/courtyard.png';
import leisure from './img/leisure.png';
import science from './img/science_park.png';
import logo from './img/logo.png';
import aplogo from './img/ap-logo.jpg';
import you from './img/you-are-here.png';
import key from './img/key.png';
// import swiper from './img/swiper.png';
// places
import homefarmInfo from './img/places/Home-Farm.jpg';
import gardenInfo from './img/places/Water-Garden.jpg';
import arboretumInfo from './img/places/Arboretum.jpg';
import parkInfo from './img/places/Parkland-and-Woodland-Walks.jpg';
import courtyardInfo from './img/places/Historic-Courtyard.jpg';
import scienceInfo from './img/places/Science-Park.jpg';
import sportInfo from './img/places/Sport-and-Leisure-Facilities.jpg';
import futureInfo from './img/places/Future-Residential-Developments.jpg';
import mereInfo from './img/places/Radnor-Mere.jpg';
import cricketInfo from './img/places/Cricket-Ground-and-Football-Pitch.jpg';
import cottageInfo from './img/places/The-Gardeners-Cottage.jpg';
import closeApp from './img/power.png';




class ApSiteMap extends Component {

	showInfo = (event) => {
		const { id } = event.target;
		//console.log('click');
		$('.' + id).siblings('.ap-site-map__description').css({ 'visibility': 'hidden', 'opacity': '0' });
		$('.' + id).css({ 'visibility': 'visible', 'opacity': '1' });
	}

	hideInfo = (event) => {
		$(event.target).parent().css('opacity', '0');
	}

	render() {

		return (
			<div className="ap-site-map ap-section">
				<script>
					window.onload = function() {document.body.scrollTop = document.documentElement.scrollTop = 0};
				</script>
				<h2 className="ap-section__heading mainHeading">
					<img src={logo} width="100px" height="100px" alt="" />
				</h2>
				<div className="closeApp">
					<img src={closeApp} /> <span>CLOSE</span> 
				</div>
				<img className="apLogo" src={aplogo} alt="logo" />

				<div className="ap-site-map__map-wrapper">
					<img className="ap-site-map__map" src={fullSiteMap} alt="" />
					<div className="ap-site-map__descriptions">
						<div className="ap-site-map__description farmInfo">
							<img src={homefarmInfo} alt="" />
							<h2>HOME FARM</h2>
							<p>This working sheep farm was initially conceived to keep the estate’s extensive grasslands in check, but the sheep and spring lambs are now a mainstay of Alderley Park life.</p>
							<div className="closeInfo" onClick={this.hideInfo}>CLOSE</div>
						</div>
						<div className="ap-site-map__description gardensInfo">
							<img src={gardenInfo} alt="" />
							<h2>THE WATER GARDEN</h2>
							<p>A delightful terraced garden designed around a large square pond and enclosed by a high brick wall. The combination of formal lawns and a wide variety of trees and shrubs make it the ideal location for a little quiet contemplation.</p>
							<div className="closeInfo" onClick={this.hideInfo}>CLOSE</div>
						</div>
						<div className="ap-site-map__description arboretumInfo">
							<img src={arboretumInfo} alt="" />
							<h2>THE ARBORETUM</h2>
							<p>A spectacular collection of specimen trees including Lawson Cypress, Weston Hemlock, American Red Oak and Yew, with a magnificent Giant Redwood centre piece, standing proud on its own grassy knoll. </p>
							<div className="closeInfo" onClick={this.hideInfo}>CLOSE</div>
						</div>
						<div className="ap-site-map__description pathsInfo">
							<img src={parkInfo} alt="" />
							<h2>PARKLAND AND WOODLAND WALKS</h2>
							<p>A network of paths crisscross the estate linking all the elements of Alderley Park. Rolling Cheshire countryside, sun dappled woodlands and the exquisite formal gardens, lakes and ponds provide the ideal backdrop for a leisurely Sunday morning stroll.  </p>
							<div className="closeInfo" onClick={this.hideInfo}>CLOSE</div>
						</div>
						<div className="ap-site-map__description courtyardInfo">
							<img src={courtyardInfo} alt="" />
							<h2>THE HISTORIC COURTYARD</h2>
							<p>A range of historic buildings, soon to be converted into new homes, a Gastro-pub with accommodation, a Farm Shop selling local produce and Coffee Shop, forming the social hub of Alderley Park.</p>
							<div className="closeInfo" onClick={this.hideInfo}>CLOSE</div>
						</div>
						<div className="ap-site-map__description scienceInfo">
							<img src={scienceInfo} alt="" />
							<h2>SCIENCE PARK</h2>
							<p>This world-class Bio and Life Science campus provides state of the art laboratories and research facilities and over the years has been the birthplace of many major scientific breakthroughs.</p>
							<div className="closeInfo" onClick={this.hideInfo}>CLOSE</div>
						</div>
						<div className="ap-site-map__description leisureInfo">
							<img src={sportInfo} alt="" />
							<h2>SPORT AND LEISURE FACILITIES</h2>
							<p>When completed in 2019, at the heart of the development will be the Central Village Sports Hub, with full-sized football pitch, multi-use games area, tennis courts and much more. Here you’ll find a brand new purpose-built indoor sports centre boasting gym, dance and spin studios.</p>
							<div className="closeInfo" onClick={this.hideInfo}>CLOSE</div>
						</div>
						<div className="ap-site-map__description futureInfo">
							<img src={futureInfo} alt="" />
							<h2>FUTURE RESIDENTIAL DEVELOPMENTS</h2>
							<p>Sites with outline planning consent for future residential development.</p>
							<div className="closeInfo" onClick={this.hideInfo}>CLOSE</div>
						</div>
						<div className="ap-site-map__description futureInfo2">
							<img src={futureInfo} alt="" />
							<h2>FUTURE RESIDENTIAL DEVELOPMENTS</h2>
							<p>Sites with outline planning consent for future residential development.</p>
							<div className="closeInfo" onClick={this.hideInfo}>CLOSE</div>
						</div>
						<div className="ap-site-map__description futureInfoph">
							<img src={futureInfo} alt="" />
							<h2>FUTURE RESIDENTIAL PH DEVELOPMENTS</h2>
							<p>Sites with outline planning consent for future residential PH development.</p>
							<div className="closeInfo" onClick={this.hideInfo}>CLOSE</div>
						</div>
						<div className="ap-site-map__description lakeInfo">
							<img src={mereInfo} alt="" />
							<h2>RADNOR MERE</h2>
							<p>Originally created in the 17th century by Alderly Park’s first custodians, the Stanley family to support the medieval water mill, the tranquil waters of the 23 acre Radnor Mere now provide the perfect environment for the many forms of wildlife native to the estate.   </p>
							<div className="closeInfo" onClick={this.hideInfo}>CLOSE</div>
						</div>
						<div className="ap-site-map__description cricketInfo">
							<img src={cricketInfo} alt="" />
							<h2>CRICKET GROUND AND FOOTBALL PITCH</h2>
							<p>Alderley Park also plays host to Lindow Cricket Club at the recently improved Cricket Pitch and Pavilion, next to a new junior-sized grass football pitch and an open space set aside for any number of other sports ranging from Frisbee to archery.</p>
							<div className="closeInfo" onClick={this.hideInfo}>CLOSE</div>
						</div>
						<div className="ap-site-map__description cottageInfo">
							<img src={cottageInfo} alt="" />
							<h2>THE GARDENER'S COTTAGE</h2>
							<p>This beautifully refurbished and extended original building is an historic part of the Alderley Park Estate. Currently home to our Sales & Marketing Suite, it will be available to purchase when work on our three stunning developments has been completed.</p>
							<div className="closeInfo" onClick={this.hideInfo}>CLOSE</div>
						</div>
					</div>
					{/* TRIGGERS */}
					<div className="ap-site-map__triggers">
						<div className="pulse_holder farm" >
							<div className="pulse_marker">
								<div className="pulse_rays" id="farmInfo" onClick={this.showInfo}></div>
							</div>
						</div>
						<div className="pulse_holder walk">
							<div className="pulse_marker">
								<div className="pulse_rays" id="pathsInfo" onClick={this.showInfo}></div>
							</div>
						</div>
						<div className="pulse_holder future">
							<div className="pulse_marker">
								<div className="pulse_rays" id="futureInfo" onClick={this.showInfo}></div>
							</div>
						</div>
						<div className="pulse_holder future2">
							<div className="pulse_marker">
								<div className="pulse_rays" id="futureInfo2" onClick={this.showInfo}></div>
							</div>
						</div>
						<div className="pulse_holder futureph">
							<div className="pulse_marker">
								<div className="pulse_rays" id="futureInfoph" onClick={this.showInfo}></div>
							</div>
						</div>
						<div className="pulse_holder arboretum">
							<div className="pulse_marker">
								<div className="pulse_rays" id="arboretumInfo" onClick={this.showInfo}></div>
							</div>
						</div>
						<div className="pulse_holder water_gardens">
							<div className="pulse_marker">
								<div className="pulse_rays" id="gardensInfo" onClick={this.showInfo}></div>
							</div>
						</div>
						<div className="pulse_holder courtyard">
							<div className="pulse_marker">
								<div className="pulse_rays" id="courtyardInfo" onClick={this.showInfo}></div>
							</div>
						</div>
						<div className="pulse_holder leisure">
							<div className="pulse_marker">
								<div className="pulse_rays" id="leisureInfo" onClick={this.showInfo}></div>
							</div>
						</div>
						<div className="pulse_holder science">
							<div className="pulse_marker">
								<div className="pulse_rays" id="scienceInfo" onClick={this.showInfo}></div>
							</div>
						</div>
						<div className="pulse_holder lake">
							<div className="pulse_marker">
								<div className="pulse_rays" id="lakeInfo" onClick={this.showInfo}></div>
							</div>
						</div>
						<div className="pulse_holder cricket">
							<div className="pulse_marker">
								<div className="pulse_rays" id="cricketInfo" onClick={this.showInfo}></div>
							</div>
						</div>
						<div className="pulse_holder cottage">
							<div className="pulse_marker">
								<div className="pulse_rays" id="cottageInfo" onClick={this.showInfo}></div>
							</div>
						</div>
						<div className="pulse_holder ride">
							<Link to="/the-ride/">
								<div className="pulse_marker">
									<div className="pulse_rays" id="rideInfo" ></div>
								</div>
							</Link>
						</div>
						<div className="pulse_holder serpent">
							<Link to="/the-serpentine/">
								<div className="pulse_marker">
									<div className="pulse_rays" id="serpentInfo" ></div>
								</div>
							</Link>
						</div>

						<div className="pulse_holder cedar">
							<Link to="/cedar-square/">
								<div className="pulse_marker">
									<div className="pulse_rays" id="cedarInfo" ></div>
								</div>
							</Link>
						</div>
					</div>


					{/* OVERLAYS */}
					<div className="ap-site-map__overlay farmO">
						<img src={farm} alt="" />
					</div>
					<div className="ap-site-map__overlay walkO">
						<img src={walks} alt="" />
					</div>
					<div className="ap-site-map__overlay futureO">
						<img src={future} alt="" />
					</div>
					<div className="ap-site-map__overlay arboretumO">
						<img src={arboretum} alt="" />
					</div>
					<div className="ap-site-map__overlay water_gardensO">
						<img src={water_gardens} alt="" />
					</div>
					<div className="ap-site-map__overlay courtyardO">
						<img src={courtyard} alt="" />
					</div>
					<div className="ap-site-map__overlay leisureO">
						<img src={leisure} alt="" />
					</div>
					<div className="ap-site-map__overlay scienceO">
						<img src={science} alt="" />
					</div>
					<div className="ap-site-map__overlay rideO">
						<Link to="/the-ride/" className="rideFlag"></Link>
						<img src={ride} alt="" />
					</div>
					<div className="ap-site-map__overlay youO">
						<img className="you" src={you} alt="" />
					</div>
					<div className="ap-site-map__overlay serpentO">
						<Link to="/the-serpentine/" className="serpentFlag"></Link>
						<img src={serpent} alt="" />
					</div>
					<div className="ap-site-map__overlay cedarO cedarInfo">
						<Link to="/cedar-square/" className="cedarFlag"></Link>
						<img src={cedar} alt="" />
					</div>
				</div>
				<div className="key0">
					<img src={key} alt=""/>
					<div className="pulse_holder key">
						<div className="pulse_marker">
							<div className="pulse_rays" id="key" ></div>
						</div>
					</div>
				</div>
				<div id="scrollDown" className="mapPage">
					SWIPE UP
					<span></span>
				</div>
				
			</div>
		);
	}
}

export default ApSiteMap;