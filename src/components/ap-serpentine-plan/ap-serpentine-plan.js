import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './ap-serpentine-plan.css';
// import serpTopDown from './img/the-serpentine.jpg';
import touchText from './img/touchText.png';
import touchArrow from './img/touchArrow.png';
import $ from 'jquery';
// import {withRouter} from "react-router-dom";
// import {BrowserRouter as Router, Route, Switch, history} from 'react-router-dom';


var plotProps;
// var viewLink;
// var plotInfo;
class ApSerpPlan extends Component {
    constructor(props) {
        super(props);
        plotProps = props.properties;
    }
    render() {
        
        /***
 * Alderley Park Plots Selector
 ***/

        var isTouch = false;
        var touched;
        var imageURL;
        var viewLink;
        var getLink;
        var formPrice;
        $('.site').on('touchstart', function () {
            isTouch = true;
            setTimeout(function () {
                touched = false;
            }, 300);
        });

        $('.js-plot-selector').on('click', 'path', function () {
            var $plotSelector = $('.js-plot-selector');
            var plotId = $(this).closest('svg').data('property-id');
            var $selectedEl = $(this).closest('svg');
            $('#plot-selector .ap-site-map__description').css('opacity', '1');
            $('svg').removeClass('active');
            $(this).closest('svg').addClass('active');
            $.each(plotProps, function (index, value) {
                if (plotProps[index].id === plotId) {
                    //console.log('found' + plotId);
                    $('.infoHolder').css('display', 'none');
                    $('#ID' + plotId).css('display', 'block');
                }
            });
        });
        $(".viewSerp").off().on("click", function() {
            $('iframe').attr('src', ''); 
            var curSlug = '/plot/' + $(this).attr('id');
            console.log('click ' + curSlug);
            $('.holds-the-iframe').css('right', '0px');
            // setTimeout(function () {
               $('iframe').attr('src', curSlug); 
            // }, 1000);
        });

        function commafy( num ) {
			var str = num.toString().split('.');
			if (str[0].length >= 5) {
				str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
			}
			if (str[1] && str[1].length >= 5) {
				str[1] = str[1].replace(/(\d{3})/g, '$1 ');
			}
			//console.log(str)
			formPrice = str;
			return str.join('.');
        }

        function trimURL3(url){
            var surl = url.substring(52);
            // console.log("new: " + surl);
            return surl;
        }
        
        return (
            
            <div id="plot-selector">
                <script>
					window.onload = function() {document.body.scrollTop = document.documentElement.scrollTop = 0};
				</script>
                <div className="touchHouse serpTouch">
                    <img className="touchText"src={touchText} />
                    <img className="touchArrow" src={touchArrow}/>
                </div>
                {this.props.properties.map(function(object,i) {
                    var pid = 'ID' + object.id;
                    var price = object.acf.price;
                    var plotImg = object.better_featured_image.media_details.sizes.medium.source_url;
                    commafy(price);
                    return (
                        <div className='ap-site-map__description infoHolder' id={pid} key={pid}>
                            <div className="plotNumber">Plot {object.acf.plot_number}</div>
                            <img id="plotImg" src={trimURL3(plotImg)}/>
                            <h2 className="plotName">{object.title.rendered}</h2>
                            <p className="description">{object.acf.floor_area + 'sqft, ' + object.acf.bedrooms + ' bedrooms, ' + object.acf.bathrooms + ' bathrooms ' + object.acf.description}</p>
                            {object.acf.availability == 'available' &&
                                <h2 className="price"> £{formPrice}</h2>
                            }
                            <h2 className="availability">Availability: {object.acf.availability}</h2>
                            {object.acf.availability == 'available' &&
                                <div className="viewSerp sans" id={object.slug}>
                                    View Details
                                </div> 
                            }
                            {object.acf.availability == 'not-released' &&
                                <div className="viewSerp sans" id={object.slug}>
                                    View Details
                                </div> 
                            }
                        </div>
                    )
                    }
                )}
                <div className="alderley-top-down alderley-top-down--the-serpentine">


                {/*<!-- Plot 1 -->*/}
                <svg className="js-plot-selector" data-property-id="1234" xmlns="http://www.w3.org/2000/svg" width="621.333" height="642.667" viewBox="0 0 621.333 642.667">
                    <path x="0" y="0" width="621.333" height="642.667" fill="#00483A" d="M238.424 642.175c-58.844-2.68-116.47-16.992-155.333-38.58-28.876-16.039-42.183-28.823-53.015-50.93-13.696-27.95-22.077-63.755-27.064-115.61C.117 406.95-.943 333.184.952 293.723c2.923-60.865 8.025-115.856 11.011-118.678C13.45 173.64 601.915 5.964 615.413 3.1l4.322-.917-.61 5.77c-.337 3.174-.922 15.07-1.302 26.437-1.594 47.715-23.563 607.275-23.854 607.566-.793.793-338.372 1.002-355.545.22z"/>
                    
                </svg>
                
                {/*<!-- Plot 2 -->*/}
                <svg className="js-plot-selector" data-property-id="1236" xmlns="http://www.w3.org/2000/svg" width="377.333" height="712" viewBox="0 0 377.333 712">
                    <path x="0" y="0" width="377.333" height="712" fill="#00483A" d="M178.45 711.567C80.794 711.2.523 710.529.07 710.077c-.453-.454 1.333-55.654 3.968-122.667 2.635-67.014 8.245-210.482 12.466-318.819C20.725 160.254 24.592 71.203 25.096 70.7c.753-.754 329.108-66.201 345.39-68.844l4.995-.81-.813 20.928c-.447 11.51-4.058 156.827-8.024 322.927-8.555 358.291-8.779 366.655-9.825 367.037-.447.163-80.714 0-178.37-.37z"/>
                    
                </svg>
                
                {/*<!-- Plot 3 -->*/}
                <svg className="js-plot-selector" data-property-id="1237" xmlns="http://www.w3.org/2000/svg" width="409.333" height="778.667" viewBox="0 0 409.333 778.667">
                    <path x="0" y="0" width="409.333" height="778.667" fill="#00483A" d="M365.67 777.965c-5.875-.358-335.033-14.383-359.169-15.303L0 762.414l.917-32.087c.505-17.648 4.433-177.21 8.73-354.582 4.296-177.372 8.311-322.994 8.922-323.606 1.297-1.297 387.064-51.047 388.065-50.046.37.37-.568 30.255-2.084 66.41-1.517 36.155-8.519 208.837-15.56 383.737-7.043 174.9-13.098 319.95-13.456 322.333-.359 2.383-1.075 4.222-1.592 4.087-.517-.136-4.24-.448-8.273-.695z"/>
                    
                </svg>
                
                {/*<!-- Plot 4 -->*/}
                <svg className="js-plot-selector" data-property-id="1238" xmlns="http://www.w3.org/2000/svg" width="414.667" height="828" viewBox="0 0 414.667 828">
                    <path x="0" y="0" width="414.667" height="828" fill="#00483A" d="M394.403 827.274c-11.544-.816-379.314-16.382-387.041-16.382H0l.77-23c3.265-97.57 30.786-752.583 31.658-753.5.999-1.051 379.928-33.45 380.618-32.545.159.208-.207 49.278-.814 109.045-2.833 279.416-6.497 669.818-6.496 692.333 0 23.013-.185 24.981-2.333 24.76-1.283-.132-5.333-.452-9-.711z"/>
                    
                </svg>
                
                {/*<!-- Plot 5 -->*/}
                <svg className="js-plot-selector" data-property-id="1239" xmlns="http://www.w3.org/2000/svg" width="377.333" height="876" viewBox="0 0 377.333 876">
                    <path x="0" y="0" width="377.333" height="876" fill="#00483A" d="M343.7 874.687c-36.24-2.106-333.151-17.189-338.39-17.189H0l.954-89.666c.524-49.317 2.331-234.762 4.015-412.1C7.023 139.43 8.485 32.846 9.41 31.921c.759-.759 33.084-4.022 71.834-7.251 38.75-3.23 120.12-10.064 180.82-15.189C322.767 4.357 373.108.165 373.935.165c1.112 0 1.263 27.057.579 103.667-1.59 178.124-6.118 734.754-6.133 754-.014 18.177-.04 18.331-3.014 18.137-1.65-.108-11.4-.685-21.667-1.282z"/>
                    
                </svg>
                
                {/*<!-- Plot 6 -->*/}
                <svg className="js-plot-selector" data-property-id="1240" xmlns="http://www.w3.org/2000/svg" width="592.089" height="874.774" viewBox="0 0 592.089 874.774">
                    <path x="0" y="0" width="592.089" height="874.774" fill="#00483A" d="M.868 800.44c.477-40.882 2.133-237.532 3.679-437C6.093 163.975 7.742.43 8.212.009c.47-.422 128.354 16.743 284.187 38.144 155.834 21.4 286.639 39.32 290.678 39.822 4.04.501 8.075 1.363 8.968 1.914 1.168.722-20.79 57.196-78.39 201.611-44.007 110.335-82.92 208.409-86.474 217.942-7.3 19.584-10.998 34.394-14.15 56.667-1.194 8.433-3.023 18.714-4.065 22.847-1.042 4.133-2.805 15.533-3.918 25.334-1.114 9.8-2.311 19.319-2.661 21.152-.35 1.833-1.508 15.033-2.573 29.333-5.44 73.005-5.638 89.654-1.38 115.633 2.639 16.092 2.627 16.203-1.701 16.111-2.017-.043-90.802 19.798-197.301 44.09-106.5 24.291-194.939 44.166-196.533 44.166H0z"/>
                    
                </svg>
                
                {/*<!-- Plot 7 -->*/}
                <svg className="js-plot-selector" data-property-id="1242" xmlns="http://www.w3.org/2000/svg" width="1100" height="1149.333" viewBox="0 0 1100 1149.333">
                    <path x="0" y="0" width="1100" height="1149.333" fill="#00483A" d="M258.438 1008.744c-8.158-2.378-19.918-6.569-26.133-9.313-6.215-2.745-17.942-7.79-26.058-11.211-8.667-3.653-16.83-8.18-19.777-10.965-9.451-8.935-24.796-20.398-36.803-27.494-9.938-5.869-17.624-12.657-44.583-39.357-28.976-28.7-33.15-33.414-37.81-42.696-2.882-5.74-17.585-33.392-32.673-61.45L7.167 755.243l-2.88-18.364c-4.266-27.212-4.895-42.19-3.046-72.75 2.182-36.086 5.594-81.714 6.443-86.169.371-1.943 1.64-12.027 2.819-22.41 1.18-10.384 3.049-22.461 4.153-26.84 1.103-4.379 3.04-15.271 4.305-24.207 3.339-23.59 7.258-39.283 14.99-60.036C42.437 421.691 209.937 1.61 210.925.62c1.843-1.842 80.549 18.112 157.697 39.98 86.975 24.653 241.745 72.404 308.21 95.092 50.46 17.225 135.459 61.356 194.43 100.948 176.064 118.205 235.226 282.692 235.226 282.692-3.307 7.073-107.192 256.4-149.167 343.428l-128.34 87.504-316.568-52.126-97.641 166.56s-124.542-43.298-156.334-55.954z"/>
                    
                </svg>
                
                {/*<!-- Plot 8 -->*/}
                <svg className="js-plot-selector" data-property-id="1244" xmlns="http://www.w3.org/2000/svg" width="1200.326" height="926.73" viewBox="0 0 1200.326 926.73">
                    <path x="0" y="0" width="1200.326" height="926.73" fill="#00483A" d="M510.254 862.319C230.349 698.12.739 563.132.006 562.346c-1.236-1.325 191.792-369.7 195.488-373.068 1.794-1.635 332.46-147.564 340.976-150.48 2.823-.965 6.63-2.681 8.46-3.81 4.599-2.84 68.355-30.675 70.26-30.675.849 0 5.474 4.846 10.279 10.768 14.56 17.946 74.63 74.399 85.86 80.689 13.144 7.363 23.933 15.175 38.888 28.16 9.442 8.195 16.145 12.283 29.12 17.756 9.27 3.91 22.846 9.753 30.167 12.985 7.322 3.232 20.05 7.801 28.288 10.155 16.296 4.655 187.351 68.937 191.912 71.96L631.025 926.73z"/>
                    
                </svg>
                
                {/*<!-- Plot 9 -->*/}
                <svg className="js-plot-selector" data-property-id="1246" xmlns="http://www.w3.org/2000/svg" width="1010.667" height="836" viewBox="0 0 1010.667 836">
                    <path  x="0" y="0" width="1010.667" height="836" fill="#00483A" d="M0 323.932c-.005-.495 39.191-66.795 87.102-147.333C135.013 96.06 177.634 23.764 181.814 15.94l7.6-14.224 26.956 15.829C231.195 26.25 501.635 181.511 711 304.389L530.592 629.995S171.74 433.975 0 323.932z"/>
                    
                </svg>
                
                {/*<!-- Plot 10 -->*/}
                <svg className="js-plot-selector" data-property-id="1248" xmlns="http://www.w3.org/2000/svg" width="1090.667" height="605.333" viewBox="0 0 1090.667 605.333">
                    <path x="0" y="0" width="1090.667" height="605.333" fill="#00483A" d="M632.152 541.602l-294.303-52.59L49.558 350.468 24.415 337C5.692 326.97-.532 323.026.036 321.548 1.691 317.229 189.3 2.871 189.982 3.27l504.927 293.717z"/>
                    
                </svg>
                
                {/*<!-- Plot 11 -->*/}
                <svg className="js-plot-selector" data-property-id="1249" xmlns="http://www.w3.org/2000/svg" width="1298.667" height="594.667" viewBox="0 0 1298.667 594.667">
                    <path x="0" y="0" width="1298.667" height="594.667" fill="#00483A" d="M194 498.673C78.828 441.685 0 401.945 0 400.873 0 398.557 235.543 2.41 237.362 1.664c.75-.307 12.458 5.395 26.019 12.671l24.656 13.23C485.33 74.437 836.256 210.047 865.934 230.198c0 0 5.188 68.397 42.366 281.078-279.374 47.289-148.997 31.528-466.967 81.712l-26.666.84-26.667.838z"/>
                    
                </svg>
                
                {/*<!-- Plot 12 -->*/}
                <svg className="js-plot-selector" data-property-id="1251" xmlns="http://www.w3.org/2000/svg" width="1462.667" height="737.333" viewBox="0 0 1462.667 737.333">
                    <path x="0" y="0" width="1462.667" height="737.333" fill="#00483A" d="M152.949 734.978c-6.5-7.182-101.687-260.016-124.83-331.573C9.94 347.202 0 291.087 0 244.676V226.61l65.553-110.305c36.054-60.668 66.29-111.12 67.191-112.115 1.354-1.496 35.424 14.889 196.526 94.514l194.887 96.324 25.588-.883c25.294-.872 30.161-1.604 423.333-63.657 0 0 62.395-8.124 62.839-7.68 0 0 48.16 210.19 52.867 254.478 0 0 85.149-23.537-258.784 106.034-343.933 129.57-629.833 237.384-635.333 239.585-23.783 9.517-36.76 14.428-38.124 14.428-.804 0-2.422-1.06-3.594-2.355z"/>
                    
                </svg>
                
                {/*<!-- Plot 13 -->*/}
                <svg className="js-plot-selector" data-property-id="1253" xmlns="http://www.w3.org/2000/svg" width="1309.333" height="1238.667" viewBox="0 0 1309.333 1238.667">
                    <path x="0" y="0" width="1309.333" height="1238.667" fill="#00483A" d="M1023.988 1236.72c-214.832-14.373-322.384-40.074-411.056-98.228-32.994-21.637-55.792-40.23-118.944-97.005-21.634-19.449-51.634-46.15-66.667-59.335-79.088-69.368-157.781-152.833-262.609-278.536C108.092 635.721-1.337 496.98.012 494.796c.308-.499 4.329-2.25 8.935-3.89 4.606-1.641 12.274-4.716 17.04-6.833 4.767-2.116 293.934-111.278 642.592-242.58 605.516-228.036 498.438-181.621 498.438-181.621 124.616 323.131 15.36 731.353-93.881 1064.82-11.863 45.754-35.15 110.693-35.534 112.343-15.91-.971-13.614-.315-13.614-.315z"/>
                    
                </svg>
                
                {/*<!-- Plot 14 -->*/}
                <svg className="js-plot-selector" data-property-id="1255" xmlns="http://www.w3.org/2000/svg" width="1058.667" height="1237.333" viewBox="0 0 1058.667 1237.333">
                    <path x="0" y="0" width="1058.667" height="1237.333" fill="#00483A" d="M48.407 1236.11c-17.6-.588-35.802-1.45-40.448-1.913-7.796-.779-8.397-1.066-7.778-3.726.368-1.584 7.692-40.585 16.275-86.668 13.226-71.013 15.357-84.253 13.973-86.84-1.4-2.614 13.414-78.185 103.498-527.993C191.749 240.252 239.385 3.498 239.785 2.85c.922-1.492 577.09 24.633 578.536 26.233.584.645 53.958 218.373 118.61 483.84 64.65 265.467 117.878 483.928 118.282 485.47.666 2.54-.936 3.4-17.035 9.162-42.585 15.238-83.514 32.05-136.43 56.038-163.952 74.327-319.36 128.038-443.341 153.227-45.177 9.178-118.07 15.988-208 19.432-39.273 1.504-155.198 1.423-202-.142z"/>
                    
                </svg>
                
                {/*<!-- Plot 15 -->*/}
                <svg className="js-plot-selector" data-property-id="1257" xmlns="http://www.w3.org/2000/svg" width="1009.333" height="986.667" viewBox="0 0 1009.333 986.667">
                    <path x="0" y="0" width="1009.333" height="986.667" fill="#00483A" d="M226.78 947.79C45.008 202.08-.618 14.195.006 13.943c1.392-.56 793.734-12.493 794.267-11.96.397.397 208.72 844.014 211.807 857.73.566 2.516-1.664 3.704-22.037 11.733-12.467 4.913-30.006 11.517-38.975 14.676-15.55 5.476-16.741 5.693-25.641 4.677-38.836-4.43-137.215-4.05-207.07.8-157.157 10.914-318.407 42.067-454.515 87.813l-21.585 7.255z"/>
                    
                </svg>
                
                {/*<!-- Plot 16 -->*/}
                <svg className="js-plot-selector" data-property-id="1259" xmlns="http://www.w3.org/2000/svg" width="948" height="881.333" viewBox="0 0 948 881.333">
                    <path x="0" y="0" width="948" height="881.333" fill="#00483A" d="M210.806 879.662C207.473 868.646-.501 22.642.001 22.142c2.2-2.202 251.39-11.7 432.646-16.49 72.014-1.904 367.275-2.072 381.932-.218l9.266 1.172 25.556 102c28.674 114.444 59.796 236.291 73.902 289.334 20.35 76.525 20.135 75.569 20.956 92.741 3.211 67.146-41.22 139.058-125.644 203.352l-12.7 9.672-17.634-8.81c-57.355-28.657-110.467-30.936-178.687-7.669-37.465 12.778-72.038 29.552-162.28 78.735-89.8 48.942-146.65 77.54-207.334 104.297-28.14 12.408-28.254 12.445-29.174 9.404z"/>
                    
                </svg>
                
                {/*<!-- Plot 17 -->*/}
                <svg className="js-plot-selector" data-property-id="1262" xmlns="http://www.w3.org/2000/svg" width="1324" height="1412" viewBox="0 0 1324 1412">
                    <path x="0" y="0" width="1324" height="1412" fill="#00483A" d="M978.638 1409.955c-41.632-4.539-68.873-12.984-127.53-39.535-121.96-55.206-359.166-186.707-657.333-364.412-28.6-17.045-54.1-32.158-56.667-33.584-4.198-2.332-4.754-3.318-5.535-9.818-.477-3.974-.927-13.529-1-21.233-.37-39.4-10.289-87.834-25.17-122.91-14.268-33.632-31.964-58.2-58.295-80.934-12.945-11.176-38.173-30.143-44.414-33.391C1 703.256-.2 701.735.028 700.758c.227-.978 7.313-7.167 15.747-13.753 66.096-51.619 106.103-106.341 118.16-161.624 1.868-8.56 2.448-16.553 2.372-32.667-.098-20.635-.282-22.009-5.62-42-28.264-105.846-42.65-161.683-83.015-322.22C30.862 61.642 17.108 5.905 17.108 4.636c0-2.123 1.568-2.236 19.667-1.415 93.514 4.243 156.259 11.512 185.784 21.524 11.144 3.779 47.168 22.92 118.55 62.989 144.383 81.048 549.46 315.86 555.564 322.045 1.595 1.615 53.135 65.636 114.535 142.27 98.98 123.536 113.933 142.81 131.895 170 84.05 127.226 144.025 246.667 162.693 324 9.446 39.126 13.125 68.67 13.12 105.333-.01 31.536-2.122 50.026-8.61 75.192-23.77 92.204-96.964 155.127-206.388 177.424-38.338 7.812-87.033 10.128-125.28 5.958z"/>
                    
                </svg>
                
                {/*<!-- Plot 18 -->*/}
                <svg className="js-plot-selector" data-property-id="1264" xmlns="http://www.w3.org/2000/svg" width="1152" height="1225.333" viewBox="0 0 1152 1225.333">
                    <path x="0" y="0" width="1152" height="1225.333" fill="#00483A" d="M372.696 1221.905c-1.484-1.886-4.58-9.481-6.883-16.88C341.773 1127.768-.3 10.154 0 9.853c.222-.222 9.926-1.87 21.563-3.663 19.01-2.927 28.067-3.401 89.159-4.668 96.166-1.993 198.568-.094 254.03 4.71 40.45 3.505 87.972 11.036 143.303 22.71 15.4 3.249 90.1 21.535 166 40.637l138 34.73 87.466-26.253c48.106-14.44 88.348-25.915 89.426-25.501 1.19.457 11.772 28.922 26.969 72.553 24.46 70.225 26.05 74.23 72.438 182.468 46.897 109.426 47.47 110.875 51.196 129.274 17.302 85.457 14.787 179.82-6.806 255.392-13.287 46.501-36.68 92.478-65.126 128-36.78 45.928-107.124 106.295-184.254 158.12-131.288 88.216-317.72 179.502-494.974 242.363l-12.998 4.61z"/>
                    
                </svg>
                
                {/*<!-- Plot 19 -->*/}
                <svg className="js-plot-selector" data-property-id="1266" xmlns="http://www.w3.org/2000/svg" width="1017.333" height="1320" viewBox="0 0 1017.333 1320">
                    <path x="0" y="0" width="1017.333" height="1320" fill="#00483A" d="M194 1318.795c-47.943-1.214-102.74-4.122-104.145-5.528C89.041 1312.453.145 216.717.04 206.21L0 202.12l61.667-26.455c33.916-14.55 93.766-40.498 133-57.663L266 86.792l116.968-32.574 116.968-32.574 69.658-10.602C607.905 5.212 639.507.697 639.82 1.01c.313.312 83.544 271.331 184.958 602.263s185.461 603.795 186.77 606.361c1.31 2.567 2.564 5.014 2.785 5.437.648 1.24-4.587 3.22-23.695 8.962-92.66 27.844-232.005 55.33-365.971 72.187-105.699 13.301-196.428 20.072-304.667 22.735-57.786 1.423-63.768 1.415-126-.16z"/>
                    
                </svg>
                
                {/*<!-- Plot 20 -->*/}
                <svg className="js-plot-selector" data-property-id="1268" xmlns="http://www.w3.org/2000/svg" width="952" height="1113.333" viewBox="0 0 952 1113.333">
                    <path x="0" y="0" width="952" height="1113.333" fill="#00483A" d="M924.912 1110.512c-89.18-15.768-363.403-68.74-814-157.24C50.412 941.39.51 931.293.018 930.835c-1.327-1.239 70.42-810.894 71.997-812.47.91-.912 38.77-.193 116.457 2.21 105.613 3.268 119.945 3.442 173.773 2.11 57.988-1.435 58.975-1.506 85.333-6.13 94.372-16.553 194.257-36.857 239.334-48.649 34.885-9.126 74.205-23.937 166.364-62.665 3.868-1.625 7.245-2.72 7.504-2.43.26.287 20.345 248.023 44.633 550.523 24.288 302.5 44.468 552.25 44.845 555l.685 5-5.682-.114c-3.125-.063-12.283-1.28-20.35-2.707z"/>
                    
                </svg>
                
                {/*<!-- Plot 21 -->*/}
                <svg className="js-plot-selector" data-property-id="1270" xmlns="http://www.w3.org/2000/svg" width="993.333" height="1104" viewBox="0 0 993.333 1104">
                    <path x="0" y="0" width="993.333" height="1104" fill="#00483A" d="M763.577 1103.565c-1.834-.335-12.634-2.088-24-3.897-88.447-14.074-315.645-67.008-619.334-144.295-31.533-8.025-70.533-17.746-86.666-21.6-16.134-3.856-30.441-7.587-31.795-8.294-2.386-1.245-2.384-1.355.055-3.628 1.384-1.289 120.991-208.568 265.794-460.619C464.716 118.177 531.434 3.094 532.995 3.502c1.147.3 46.747 26.84 101.334 58.98 54.586 32.14 111.57 64.794 126.63 72.566 29.17 15.052 104.314 57.459 103.414 58.36-.296.295-3.054-.746-6.13-2.315-11.524-5.88-6.244-1.276 9.59 8.361 33.757 20.545 50.679 30.051 85.077 47.791 28.295 14.593 35.274 18.717 35.034 20.702-2.417 20.065-104.63 738.095-105.407 740.479-.64 1.962-1.949 3.189-3.18 2.982-2.778-.466-3.65.75-11.736 16.351-18.714 36.112-40.589 60.655-64.045 71.86-7.85 3.75-9.984 4.16-22.666 4.347-7.7.114-15.5-.067-17.334-.401z"/>
                    
                </svg>
                
                {/*<!-- Plot 22 -->*/}
                <svg className="js-plot-selector" data-property-id="1272" xmlns="http://www.w3.org/2000/svg" width="1232" height="1176" viewBox="0 0 1232 1176">
                    <path x="0" y="0" width="1232" height="1176" fill="#00483A" d="M691.08 1175.285c-1.466-.353-17.966-5.043-36.666-10.42-165.813-47.686-301.746-110.15-382.638-175.83-47.256-38.369-98.565-97.802-165.768-192.012C73.896 752.004-1.526 638.094.024 636.953c.214-.158 205.89-141.175 457.057-313.37C708.248 151.388 916.536 8.486 919.944 6.023l6.197-4.48 39.137 49 39.136 48.999 23.831 19.626c13.107 10.795 28.107 22.125 33.333 25.18 6.012 3.512 13.912 10.057 21.503 17.813l12 12.26 67.706 39.75c65.439 38.418 67.645 39.843 65.904 42.574-.99 1.554-119.884 208.414-264.208 459.688-194.754 339.077-263.238 457.242-265.633 458.334-3.382 1.54-3.496 1.548-7.77.518z"/>
                    
                </svg>
                
                {/*<!-- Plot 23 -->*/}
                <svg className="js-plot-selector" data-property-id="1274" xmlns="http://www.w3.org/2000/svg" width="1212" height="1001.333" viewBox="0 0 1212 1001.333">
                    <path x="0" y="0" width="1212" height="1001.333" fill="#00483A" d="M263.528 969.667c-37.574-60.963-74.572-123.942-115.73-197-25.438-45.153-26.378-46.952-95.165-182L0 487.333l3.153-1.666c1.735-.917 58.24-23.602 125.569-50.412 67.328-26.81 123.144-49.461 124.036-50.336 1.27-1.246.92-3.524-1.623-10.529-1.785-4.916-4.47-13.733-5.966-19.594-1.496-5.86-6.614-18.637-11.372-28.393-4.759-9.755-9.437-20.898-10.396-24.762-1.1-4.433-2.866-7.811-4.784-9.154-1.671-1.171-2.538-2.612-1.926-3.203.611-.591 61.412-22.67 135.112-49.067 142.881-51.173 149.333-53.513 149.333-54.162 0-.23 8.1-22.51 18-49.511 9.9-27 18-49.869 18-50.818 0-.95.232-1.726.516-1.726 1.468 0 56.483 19.97 80.917 29.372 26.761 10.297 28.244 10.71 31.29 8.715 3.855-2.527 147.8-56.603 223.944-84.13 30.067-10.87 56.204-20.818 58.084-22.106 1.879-1.29 9.979-4.828 18-7.864 18.089-6.847 23.757-6.778 38.427.473 11.548 5.707 23.397 16.569 34.406 31.54 26.182 35.605 79.077 130.168 145.808 260.667 16.612 32.486 21.438 40.732 30.19 51.585 5.73 7.106 10.418 13.49 10.418 14.189 0 1.34-923 634.892-924.953 634.892-.626 0-9.92-14.25-20.655-31.666z"/>
                    
                </svg>
                
                {/*<!-- Plot 24 -->*/}
                <svg className="js-plot-selector" data-property-id="1276" xmlns="http://www.w3.org/2000/svg" width="792" height="874.667" viewBox="0 0 792 874.667">
                    <path x="0" y="0" width="792" height="874.667" fill="#00483A" d="M239.748 847.708c-7.648-14.827-56.864-111.375-109.369-214.552L34.917 445.563 17.458 343.156 0 240.75l.884-52.658c.486-28.961 1.42-52.99 2.076-53.394.656-.406 1.355-13.31 1.553-28.676l.362-27.939 11.333-.012c6.233-.007 44.298 1.343 84.589 3 50.855 2.09 73.52 2.582 74.121 1.608.477-.77.115-5.72-.805-10.999-.925-5.308-1.164-10.127-.535-10.783.625-.653 81.864-13.659 180.53-28.902S536.864 3.583 540.976 2.73c10.63-2.207 34.29-1.844 43.899.673 17.418 4.563 31.361 14.466 40.704 28.908 5.447 8.42 7.06 12.646 17.975 47.107 15.709 49.589 53.036 154.156 106.38 298 33.333 89.885 34.181 92.048 36.444 92.916 5.347 2.052 4.704 4.637-13.544 54.405-9.878 26.94-17.96 49.17-17.96 49.4 0 .652-6.69 3.08-149.333 54.166-73.7 26.396-134.5 48.475-135.112 49.065-.612.59.255 2.03 1.927 3.201 1.917 1.343 3.682 4.722 4.783 9.154.96 3.864 5.638 15.008 10.396 24.763 4.759 9.755 9.876 22.532 11.373 28.392 1.496 5.861 4.18 14.678 5.965 19.595 2.543 7.006 2.894 9.283 1.623 10.531-1.289 1.267-82.364 33.874-246.565 99.166l-6.277 2.496z"/>
                    
                </svg>
                
                {/*<!-- Plot 25 -->*/}
                <svg className="js-plot-selector" data-property-id="1278" xmlns="http://www.w3.org/2000/svg" width="361.483" height="602.775" viewBox="0 0 361.483 602.775">
                    <path x="0" y="0" width="361.483" height="602.775" fill="#00483A" d="M83.97 601.775c-71.907-.32-79.686-.564-81.333-2.548C1.112 597.39.75 548.44.408 298.517L0 0l52.408.776c75.642 1.121 268.299 3.332 290.316 3.332h18.759v4.257c0 2.34-.92 9.69-2.042 16.333-1.987 11.753-22.867 312.783-23.08 332.744-.134 12.568-12.033 231.982-12.997 239.666l-.711 5.667-79.585-.323a477759 477759 0 0 1-159.097-.677z"/>
                    
                </svg>
                
                {/*<!-- Plot 26 -->*/}
                <svg className="js-plot-selector" data-property-id="1280" xmlns="http://www.w3.org/2000/svg" width="370.667" height="612" viewBox="0 0 370.667 612">
                    <path x="0" y="0" width="370.667" height="612" fill="#00483A" d="M221.93 609.434c-35.934-1.272-100.309-3.415-143.055-4.762C36.128 603.326.67 601.904.08 601.512c-.59-.39 2.097-57.38 5.97-126.641 3.874-69.262 6.767-126.377 6.43-126.923-1.116-1.805 20.735-313.586 22.787-325.147 1.107-6.233 2.008-13.631 2.004-16.44l-.01-5.107 59 .903C169.936 3.284 365.14 8.9 366.162 9.92c.736.737-48.34 593.21-49.635 599.214-.626 2.9-1.125 2.993-14.955 2.806-7.87-.106-43.708-1.235-79.642-2.507z"/>
                    
                </svg>
                
                {/*<!-- Plot 27 -->*/}
                <svg className="js-plot-selector" data-property-id="1281" xmlns="http://www.w3.org/2000/svg" width="525.333" height="662.667" viewBox="0 0 525.333 662.667">
                    <path x="0" y="0" width="525.333" height="662.667" fill="#00483A" d="M176.024 633.299c-29.7-16.142-55.443-29.722-57.207-30.178-1.764-.455-25.764.172-53.334 1.394-27.57 1.222-53.576 2.21-57.793 2.196l-7.666-.026L0 602.352C-.031 596.59 49.59 3.498 50.157 2.842c.329-.38 461.934 12.864 470.786 13.506 1.199.087 1.17.956-.116 3.56-.936 1.894-66.448 147.294-145.583 323.11-79.135 175.817-144.183 319.66-144.551 319.649-.368-.01-24.97-13.226-54.67-29.368z"/>
                    
                </svg>
                
                {/*<!-- Plot 28 -->*/}
                <svg className="js-plot-selector" data-property-id="1282" xmlns="http://www.w3.org/2000/svg" width="626.667" height="773.333" viewBox="0 0 626.667 773.333">
                    <path x="0" y="0" width="626.667" height="773.333" fill="#00483A" d="M138 717.753c-66-30.678-124.05-57.37-129-59.315-4.95-1.945-9-4.235-9-5.087 0-.853 1.162-4.605 2.581-8.339C6.637 634.341 289.434 6.626 290.857 5.134c1.897-1.988 88.304-2.526 114.476-.713 103.073 7.14 173.414 31.771 202.02 70.742 10.465 14.255 15.105 27.288 16.231 45.587 1.302 21.152-3.7 43.344-15.395 68.3-8.669 18.5-74.57 130.662-196.291 334.084-112.425 187.885-150.17 249.999-152.04 250.199-1.023.11-55.859-24.901-121.859-55.58z" />
                    
                </svg>
                
                {/*<!-- Plot 29 -->*/}
                <svg className="js-plot-selector" data-property-id="1283" xmlns="http://www.w3.org/2000/svg" width="1133.333" height="561.333" viewBox="0 0 1133.333 561.333">
                    <path x="0" y="0" width="1133.333" height="561.333" fill="#00483A" d="M693.13 469.31l-214.955-91.965-209.045-6.648c-240.09-7.635-255.859-8.25-257.666-10.058C9.977 359.15-1.172 10.782.1 5.589l.77-3.138 155.606.857c85.584.472 157.407 1.132 159.607 1.466 2.2.334 73 3.01 157.333 5.947 84.334 2.936 156.193 5.717 159.689 6.18 3.495.462 32.895-.207 65.333-1.487l58.978-2.327 42 23.271c23.1 12.8 49.2 27.318 58 32.262 8.8 4.945 71.011 34.43 138.247 65.524 148.006 68.444 134.669 62.01 133.712 64.503-.807 2.104-52.91 88.528-126.649 210.078-68.78 113.375-92.937 152.671-93.818 152.608-.454-.032-97.555-41.443-215.78-92.023z"/>
                    
                </svg>
                
                {/*<!-- Plot 30 -->*/}
                <svg className="js-plot-selector" data-property-id="1284" xmlns="http://www.w3.org/2000/svg" width="900" height="662.667" viewBox="0 0 900 662.667">
                    <path x="0" y="0" width="900" height="662.667" fill="#00483A" d="M286.543 658.627c-33.745-10.36-95.8-19.663-146.455-21.959-19.06-.864-20.534-1.117-21.624-3.723C116.964 629.355-.716 2.926.004 2.35c.296-.238 11.339.068 24.539.678 13.2.61 118.078 4.107 233.063 7.77L466.67 17.46l214.27 91.53c117.848 50.342 214.775 91.983 215.394 92.535.618.553-23.23 40.819-52.995 89.48l-54.118 88.476-49.369 56.667c-27.152 31.167-52.834 59.967-57.07 64-20.142 19.176-105.592 63.006-175.572 90.057-28.264 10.925-132.302 49.303-165.742 61.139-20.362 7.207-34.238 11.415-37.333 11.321-2.709-.082-10.625-1.9-17.592-4.038z"/>
                    
                </svg>
                
                {/*<!-- Plot 31 -->*/}
                <svg className="js-plot-selector" data-property-id="1286" xmlns="http://www.w3.org/2000/svg" width="836" height="678.667" viewBox="0 0 836 678.667">
                    <path x="0" y="0" width="836" height="678.667" fill="#00483A" d="M339.926 676.399c-41.54-7.593-90.33-31.503-130.17-63.789-6.934-5.62-19.869-17.47-28.744-26.335C75.512 480.898 13.272 300.685.92 64.825L0 47.26l47.85.705c141.52 2.085 432.1 5.204 433.677 4.655 1.351-.47 1.633-2.282 1.08-6.953-.479-4.038-.151-7.133.907-8.58 1.355-1.853 22-5.14 113.587-18.086C658.663 10.3 710.637 2.876 712.599 2.506c3.355-.634 3.655-.27 5.023 6.109.8 3.73 27.585 145.757 59.522 315.614 31.936 169.856 58.368 310.086 58.736 311.621.66 2.752.241 2.804-29.09 3.63-44.742 1.26-79.697 4.54-215.092 20.193-140.06 16.191-159.02 17.93-204.666 18.766-28.512.523-34.503.263-47.106-2.04z"/>
                    
                </svg>
                
                {/*<!-- Plot 32 -->*/}
                <svg className="js-plot-selector" data-property-id="1287" xmlns="http://www.w3.org/2000/svg" width="716" height="524" viewBox="0 0 716 524">
                    <path x="0" y="0" width="716" height="524" fill="#00483A" d="M389.185 522.484c-45.1-.597-150.902-1.952-235.115-3.011-84.214-1.06-153.419-2.23-153.79-2.6-1.565-1.565 3.664-130.777 9.64-238.206 6.934-124.623 7.908-136.233 17.547-209L36.52 1.334h6.423c3.533 0 80.188 3.9 170.345 8.666 90.158 4.767 167.517 8.667 171.91 8.667h7.988V9.333l93 .019c51.15.01 94.343.378 95.985.818l2.985.8.348 52.181.349 52.182 59.667-.406c48.338-.33 59.694-.077 59.814 1.333.081.957.057 2.947-.054 4.423-.196 2.606 4.51 159.191 8.63 287.16 1.118 34.748 1.698 63.513 1.288 63.924-.41.41-52.43 8.048-115.597 16.974-94.679 13.378-115.145 16.63-116.525 18.518-1.107 1.514-1.422 4.74-.929 9.516l.746 7.225-5.853-.216c-3.22-.118-42.754-.704-87.854-1.3z"/>
                    
                </svg>
                
                {/*<!-- Plot 33 -->*/}
                <svg className="js-plot-selector" data-property-id="1289" xmlns="http://www.w3.org/2000/svg" width="666" height="617.544" viewBox="0 0 666 617.544">
                    <path x="0" y="0" width="666" height="617.544" fill="#00483A" d="M548.889 616.7c-.489-.489-.889-24.125-.889-52.524 0-44.175-.283-51.744-1.958-52.387-1.416-.543-175.32-1.4-188.375-.927-1.005.036-1.667 1.914-1.667 4.727v4.666h-7.232c-3.977 0-80.927-3.876-171-8.614C87.696 506.903 10.85 502.896 7 502.736c-5.52-.23-7-.759-7-2.507 0-6.098 39.056-293.736 40.799-300.471 5.02-19.406 19.276-48.604 33.587-68.79 10.394-14.662 32.536-38.138 46.927-49.755 22.396-18.078 58.85-38.75 89.617-50.82C242.466 18.02 282.735 8.128 320 3.597 375.194-3.115 445.627-.29 501.333 10.87l19.334 3.874 71.003.956c50.08.675 71.372 1.4 72.254 2.463.767.924 1.41 116.716 1.663 299.59L666 615.84l-41.884.875c-53.185 1.11-74.106 1.107-75.227-.014z"/>
                    
                </svg>
                </div>
            </div>
        )
    }
}

export default ApSerpPlan;