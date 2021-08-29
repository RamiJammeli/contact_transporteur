import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import $ from 'jquery';


export  default class Header extends Component {
    componentDidMount() {
        $("#styleSign").attr("disabled", "disabled");
        $("#styleLogin").attr("disabled", "disabled");

      }
      refreshPage(){ 
        setTimeout(()=>{
          window.location.reload(false);
      }, 200);
      console.log('page to reload')
    }
      
    render() {
        return (
            <div>
            <div className="master-wrapper">

            <div className="preloader">
                <div className="preloader-img">
                    <span className="loading-animation animate-flicker"><img src="assets/img/loading.GIF" alt="loading" /></span>
                </div>
            </div>
    

            <nav className="navbar navbar-default navbar-fixed-top fadeInDown" data-wow-delay="0.5s">
                <div className="top-bar smoothie hidden-xs">
                    <div className="container">
                        <div className="clearfix">
                            <ul className="list-inline social-links wow pull-left">
                                <li>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-dribbble"></i></a>
                                </li>
                                <li>
                                    <a href="http://www.facebook.com"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-behance"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                </li>
                            </ul>
    
                            <div className="pull-right text-right">
                                <ul className="list-inline">
                                    <li>
                                        <div><i className="fa fa-envelope-o"></i> email@domain.com</div>
                                    </li>
                                    <li>
                                        <div className="meta-item"><i className="fa fa-mobile"></i> +44 8780 648 605</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">

                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-navigation">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand smoothie logo logo-light" href="index.html"><img src="assets/img/logo.png" alt="logo" /></a>
                        <a className="navbar-brand smoothie logo logo-dark" href="index.html"><img src="assets/img/logo_reverse.png" alt="logo" /></a>
                    </div>
    

                    <div className="collapse navbar-collapse" id="main-navigation">
                        <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">Vagrok <span className="pe-7s-angle-down"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><Link onClick={ this.refreshPage }  to="/">Accueil</Link></li>
                                    <li><Link onClick={ this.refreshPage }  to="/About">About Us</Link></li>
                                    
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">Headers <span className="pe-7s-angle-down"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="header-1.html">Header 1</a></li>
                                    <li><a href="header-2.html">Header 2</a></li>
                                    <li><a href="header-3.html">Header 3</a></li>
                                    <li><a href="header-4.html">Header 4</a></li>
                                    <li><a href="header-5.html">Header 5</a></li>
                                    <li><a href="header-6.html">Header 6</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">Footers <span className="pe-7s-angle-down"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="footer-1.html">Footer 1</a></li>
                                    <li><a href="footer-2.html">Footer 2</a></li>
                                    <li><a href="footer-3.html">Footer 3</a></li>
                                    <li><a href="footer-4.html">Footer 4</a></li>
                                    <li><a href="footer-5.html">Footer 5</a></li>
                                    <li><a href="footer-6.html">Footer 6</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages <span className="pe-7s-angle-down"></span></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-submenu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages - About Us</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="about-us-1.html">About Us - Layout 1</a></li>
                                            <li><a href="about-us-2.html">About Us - Layout 2</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages - Services</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="services-1.html">Services - Layout 1</a></li>
                                            <li><a href="services-2.html">Services - Layout 2</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages - Contact</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="contact-us-1.html">Contact - Layout 1</a></li>
                                            <li><a href="contact-us-2.html">Contact - Layout 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="404.html">Pages - 404</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Portfolio <span className="pe-7s-angle-down"></span></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-submenu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Portfolio - Full Grid</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="portfolio-full-grid-4col.html">Full Grid - 4 Columns</a></li>
                                            <li><a href="portfolio-full-grid-3col.html">Full Grid - 3 Columns</a></li>
                                            <li><a href="portfolio-full-grid-2col.html">Full Grid - 2 Columns</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Portfolio - Boxed Grid</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="portfolio-boxed-grid-4col.html">Boxed Grid - 4 Columns</a></li>
                                            <li><a href="portfolio-boxed-grid-3col.html">Boxed Grid - 3 Columns</a></li>
                                            <li><a href="portfolio-boxed-grid-2col.html">Boxed Grid - 2 Columns</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Portfolio - Full Masonry</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="portfolio-full-masonry-4col.html">Full Masonry - 4 Columns</a></li>
                                            <li><a href="portfolio-full-masonry-3col.html">Full Masonry - 3 Columns</a></li>
                                            <li><a href="portfolio-full-masonry-2col.html">Full Masonry - 2 Columns</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Portfolio - Boxed Masonry</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="portfolio-boxed-masonry-4col.html">Boxed Masonry - 4 Columns</a></li>
                                            <li><a href="portfolio-boxed-masonry-3col.html">Boxed Masonry - 3 Columns</a></li>
                                            <li><a href="portfolio-boxed-masonry-2col.html">Boxed Masonry - 2 Columns</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Single Portfolio</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="single-portfolio-slider.html">Single Portfolio - Slider</a></li>
                                            <li><a href="single-portfolio-carousel.html">Single Portfolio - Carousel</a></li>
                                            <li><a href="single-portfolio-video.html">Single Portfolio - Video</a></li>
                                            <li><a href="single-portfolio-fullscreen-slider.html">Single Portfolio - Fullscreen Slider</a></li>
                                            <li><a href="single-portfolio-fullscreen-video.html">Single Portfolio - Fullscreen Video</a></li>
                                            <li><a href="single-portfolio-image-list.html">Single Portfolio - Image List</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Blog <span className="pe-7s-angle-down"></span></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-submenu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Blog Feeds</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="blog-grid-2col.html">Blog Grid - 2 Column</a></li>
                                            <li><a href="blog-grid-3col.html">Blog Grid - 3 Column</a></li>
                                            <li><a href="blog-grid-2col-sidebar.html">Blog Grid - 2 Column Sidebar</a></li>
                                            <li><a href="blog-grid-3col-sidebar.html">Blog Grid - 3 Column Sidebar</a></li>
                                            <li><a href="blog-traditional.html">Blog Traditional</a></li>
                                            <li><a href="blog-traditional-sidebar.html">Blog Traditional Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Single Posts</a>
                                        <ul className="dropdown-menu">
                                            <li><a href="single-post-fullwidth.html">Single Post - Full Width</a></li>
                                            <li><a href="single-post-thin.html">Single Post - Thin</a></li>
                                            <li><a href="single-post-left-sidebar.html">Single Post - Left Sidebar</a></li>
                                            <li><a href="single-post-right-sidebar.html">Single Post - Right Sidebar</a></li>
                                            
                                            
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">Connexion <span className="pe-7s-angle-down"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><Link onClick={this.refreshPage} to="/register">Sign Up</Link></li>
                                    <li><Link onClick={this.refreshPage} to="/login">Sign In</Link></li>
                                </ul>
                            </li>
                            <li><a href="#search"><i className="pe-7s-search"></i></a></li>
                            <li><a href="javascript:void(0);" className="side-menu-trigger hidden-xs"><i className="fa fa-bars"></i></a></li>
                        </ul>
                    </div>

                </div>

            </nav>
    
            <div id="search-wrapper">
                <button type="button" className="close">×</button>
                <div className="vertical-center text-center">
                    <form>
                        <input type="search" value="" placeholder="Enter Search Term" />
                        <button type="submit" className="btn btn-primary btn-white">Search</button>
                    </form>
                </div>
            </div>
    
            <header id="headerwrap" className="dark-wrapper backstretched special-max-height no-overlay">
                <div className="container vertical-center">
                    <div className="intro-text vertical-center text-left smoothie">
                        <div className="intro-heading wow fadeIn heading-font" data-wow-delay="0.2s">This Is Kompleet</div>
                        <div className="intro-sub-heading wow fadeIn secondary-font" data-wow-delay="0.4s">Take a look our <span className="rotate">awesome home pages, sexy portfolio items, flexible blog examples</span></div>
                    </div>
                </div>
            </header>
    
       
        </div>
    
      </div>
 
            )
    }
}
