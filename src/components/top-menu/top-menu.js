import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import './top-menu.css';
// import arrows from './arrows.png';

class TopMenu extends Component {
	goBack = (event) => {
		window.history.back();
	}

	
	
	render() {
		var url = window.location.pathname;
		$(document).on('click', '.goBack', function(){
			var parentFrame = window.parent.document.getElementsByClassName('holds-the-iframe'); 
			$(parentFrame).css('right', '100%');
		})
		return (
			<div className="top-menu">
				<ul className="top-menu__list">
					{(() => {
						switch(url) {
							case '/':
								return <li className="top-menu__item third"><Link className="top-menu__link" to="/">Back to estate map</Link></li>;
							case '/the-ride/':
								return <li className="top-menu__item third"><Link className="top-menu__link" to="/">Back to estate map</Link></li>;
							case '/the-serpentine/':
								return <li className="top-menu__item third"><Link className="top-menu__link" to="/">Back to estate map</Link></li>;
							case '/cedar-square/':
								return <li className="top-menu__item third"><Link className="top-menu__link" to="/">Back to estate map</Link></li>;
							default:
								return <li className="top-menu__item third"><div className="top-menu__link goBack">Go back</div></li>;
						}
					})()}
				</ul>
			</div>
		);
	}
}

export default TopMenu;