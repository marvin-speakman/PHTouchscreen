import React, { Component } from 'react';

import './ap-specification.css';

class ApSpecification extends Component {

	trimURL(url){
		var surl = url.substring(51);
		// console.log("new: " + surl);
		return surl;
	}
	
	render() {

		////console.log(this.props.spec_level_id);
		////console.log(this.props.spec_content);

		let specContent = this.props.spec_content.filter(object => {
			return object.id === this.props.spec_level_id;
		});

		////console.log(specContent[0]);

		return (
			<div className="ap-spec ap-section">
				<h2 className="ap-section__heading">{'Specification'}</h2>

				{ this.props.spec_content_loaded &&
					<div className="ap-spec__tabs" data-active-level={specContent[0].acf.specification_label}>
						<div className={specContent[0].acf.specification_label === 'silver' ? 'ap-spec__tab ap-spec__tab--silver active' : 'ap-spec__tab ap-spec__tab--silver'}>
							{'Silver'}
						</div>
						<div className={specContent[0].acf.specification_label === 'gold' ? 'ap-spec__tab ap-spec__tab--gold active' : 'ap-spec__tab ap-spec__tab--gold'}>
							{'Gold'}
						</div>
						<div className={specContent[0].acf.specification_label === 'platinum' ? 'ap-spec__tab ap-spec__tab--platinum active' : 'ap-spec__tab ap-spec__tab--platinum'}>
							{'Platinum'}
						</div>
					</div>
				}

				{ this.props.spec_content_loaded && 
					<div className="ap-spec__gallery">
						{ 
							specContent[0].acf.specification_gallery.map((object, index) => {
								return (
									<div className="ap-spec__gallery-item" key={'spec_gallery_' + index}>
										<img src={this.trimURL(object.image.sizes.thumbnail)} alt="" />
									</div>
								)
							})
						}
					</div>
				}

				{ this.props.spec_content_loaded &&
					<div className="ap-spec__content">
						{ 
							specContent[0].acf.specification_content.map((object, index) => {
								return (
									<div className="ap-spec__section" key={'spec_sections_' + index}>
										<div className="ap-spec__section-heading">{object.section_heading}</div>
										<div className="ap-spec__section-copy" dangerouslySetInnerHTML={{__html: object.section_content}} />
									</div>
								)
							})
						}
					</div>
				}

			</div>
		)
	}
}

export default ApSpecification;