import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
import ReactScreensaver from './components/react-screensaver/react-screensaver';
import TopMenu from './components/top-menu/top-menu';
import ApSiteMap from './components/ap-site-map/ap-site-map';
import ApDevOverview from './components/ap-dev-overview/ap-dev-overview';
import ApPlot from './components/ap-plot/ap-plot';
import ApFilter from './components/ap-filter/ap-filter';
import ApDevSelector from './components/ap-dev-selector/ap-dev-selector';
import ApBrochures from './components/ap-brochures/ap-brochures';
import ApGallery from './components/ap-gallery/ap-gallery';
import ApVirtualTour from './components/ap-virtual-tour/ap-virtual-tour';

// import iframeBack from './alderley_park_logo.jpg';

// import $ from 'jquery';
import Iframe from 'react-iframe';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propertiesLoaded: false,
      propertiesObject: {},
      galleriesLoaded: false,
      galleriesObject: {
        'lifestyle'   : {
          'title': '',
          'gallery': {}
        },
        'architecture': {
          'title': '',
          'gallery': {}
        },
        'interiors'   : {
          'title': '',
          'gallery': {}
        }
      },
      siteIntrosLoaded: false,
      siteIntros: {},
      specContentLoaded: false,
      specContent: []
    };
  }

  componentDidMount() {
    this.loadPropertyDetails();
    this.loadGalleries();
    this.loadSiteIntros();
    this.loadSpecContent();
  }

  loadPropertyDetails() {
    // Get property JSON for Cedar, Ride and Serpentine
    // axios.get(`http://phph.co.uk/alderley-park/wp-json/wp/v2/property?order=asc&per_page=100&orderby=slug&property_sites=6,7,8`).then( response => {
    axios.get(`../../localdata/allprops.json`).then( response => {
      const propertiesObject = response.data;
      const propertiesLoaded = true;
      this.setState({ propertiesLoaded, propertiesObject }); 
    });
  }

  loadGalleries(){
    
    // axios.get(`http://phph.co.uk/alderley-park/wp-json/wp/v2/pages/54`).then(res => {
      axios.get(`../../localdata/54.json`).then(res => {
      const galleriesLoaded = true;
      let galleriesObject = {
        'lifestyle'   : {
          'title': '',
          'gallery': {}
        },
        'architecture': {
          'title': '',
          'gallery': {}
        },
        'interiors'   : {
          'title': '',
          'gallery': {}
        }
      };

      // Get images for lifestyle gallery
      galleriesObject.lifestyle.title = res.data.acf.lifestyle_gallery_title;
      galleriesObject.lifestyle.gallery = res.data.acf.lifestyle_gallery_images;

      // Get images for architecture gallery
      galleriesObject.architecture.title = res.data.acf.architecture_gallery_title;
      galleriesObject.architecture.gallery = res.data.acf.architecture_gallery_images;

      // Get images for interiors gallery
      galleriesObject.interiors.title = res.data.acf.interiors_gallery_title;
      galleriesObject.interiors.gallery = res.data.acf.interiors_gallery_images;

      this.setState({ galleriesLoaded, galleriesObject });
    });
  }

  loadSiteIntros() {
    let siteIntros = {
      cedarSquare: {},
      theRide: {},
      theSerpentine: {}
    }

    // Get intro copy for Cedar Square
    // axios.get(`http://phph.co.uk/alderley-park/wp-json/wp/v2/pages/70`).then(res => {
      axios.get(`../../localdata/70.json`).then(res => {
     siteIntros.cedarSquare.content = res.data.content.rendered;
    });

    // Get intro copy for The Ride
    // axios.get(`http://phph.co.uk/alderley-park/wp-json/wp/v2/pages/74`).then(res => {
      axios.get(`../../localdata/74.json`).then(res => {
     siteIntros.theRide.content = res.data.content.rendered;
    });

    // Get intro copy for The Serpentine
    // axios.get(`http://phph.co.uk/alderley-park/wp-json/wp/v2/pages/72`).then(res => {
      axios.get(`../../localdata/72.json`).then(res => {
     siteIntros.theSerpentine.content = res.data.content.rendered;
    });

    const siteIntrosLoaded = true;

    this.setState({ siteIntrosLoaded, siteIntros });
  }

  loadSpecContent() {
    let specContent = [];

    // axios.get(`http://phph.co.uk/alderley-park/wp-json/wp/v2/specification`).then( res => {
      axios.get(`../../localdata/spec.json`).then(res => {
      specContent = res.data;
      const specContentLoaded = true;
      this.setState({ specContent, specContentLoaded });
      //console.table(specContent);
    });
  }


  render() {
    const { siteIntrosLoaded, siteIntros, galleriesLoaded, galleriesObject, propertiesLoaded, propertiesObject, specContentLoaded, specContent } = this.state;
    var url = window.location.pathname;

    var pressTimer;

  $(".mainHeading").mouseup(function(){
    clearTimeout(pressTimer);
    // Clear timeout
    return false;
  }).mousedown(function(){
    // Set timeout
    pressTimer = window.setTimeout(function() { 
      console.log('time out!');
      $('.closeApp').css('top', '10px');
    },1000);
    return false; 
  });

  
  $('.closeApp').on('click', function(){
    window.location.href = '/closekiosk';
  });


    return (
      <div className="ph-app">
        {url.includes('/plot') ? (
          <span> </span> // nish
						) : (
              <div className="holds-the-iframe">
							  <Iframe id="plotFrame" url=""
                width="100%"
                height="100%"
                display="initial"
                position="relative"
                allowFullScreen/>
              </div>
            )
          }
        
        <BrowserRouter >
        
          <div>
            
            {/* Global components */}
            
            <Route path="*" component={ReactScreensaver}/>
            <Route path="*" component={TopMenu}/>

            {/* Homepage components */}
            <Route exact path="/" component={ApSiteMap}/>
            <Route exact path="/" render={(props) => <ApFilter propertiesLoaded={propertiesLoaded} properties={propertiesObject} {...props} /> }/>
            <Route exact path="/" component={ApDevSelector}/>
            
            <Route exact path="/" render={(props) => <ApGallery galleryLoaded={galleriesLoaded} galleryTitle={galleriesObject.lifestyle.title} galleryItems={galleriesObject.lifestyle.gallery} {...props}/>} />
            <Route exact path="/" render={(props) => <ApGallery galleryLoaded={galleriesLoaded} galleryTitle={galleriesObject.architecture.title} galleryItems={galleriesObject.architecture.gallery} {...props}/>} />
            <Route exact path="/" render={(props) => <ApGallery galleryLoaded={galleriesLoaded} galleryTitle={galleriesObject.interiors.title} galleryItems={galleriesObject.interiors.gallery} {...props}/>} />
            
            <Route exact path="/" component={ApBrochures}/>

            {/* Development landing page components */}
            <Route exact path="/:devname" render={(props) => <ApDevOverview introsLoaded={siteIntrosLoaded} introCopy={siteIntros} properties={propertiesObject} {...props} />} />
            <Route exact path="/:devname" render={(props) => <ApFilter propertiesLoaded={propertiesLoaded} properties={propertiesObject} {...props} /> }/>
            <Route exact path="/:devname" component={ApDevSelector} />
            <Route exact path="/:devname" render={(props) => <ApGallery galleryLoaded={galleriesLoaded} galleryTitle={galleriesObject.lifestyle.title} galleryItems={galleriesObject.lifestyle.gallery} {...props}/>} />
            <Route exact path="/:devname" render={(props) => <ApGallery galleryLoaded={galleriesLoaded} galleryTitle={galleriesObject.architecture.title} galleryItems={galleriesObject.architecture.gallery} {...props}/>} />
            <Route exact path="/:devname" render={(props) => <ApGallery galleryLoaded={galleriesLoaded} galleryTitle={galleriesObject.interiors.title} galleryItems={galleriesObject.interiors.gallery} {...props}/>} />

            <Route exact path="/:devname" component={ApBrochures} />
            <Route exact path="/:devname" component={ApVirtualTour} />

            {/* Single plot components */}
            <Route exact path="/plot/:plot" render={(props) => <ApPlot propertiesLoaded={propertiesLoaded} properties={propertiesObject} specLoaded={specContentLoaded} specContent={specContent} {...props} /> }/>

            

          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
