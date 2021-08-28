import React, {Component} from 'react'
import $ from 'jquery'
import axios from 'axios'
import Header from './header.component'
import Footer from './footer.component'
import img1 from '../../src/img/img1.jpg'
import img2 from '../../src/img/img2.jpg'
import img3 from '../../src/img/img3.jpg'
import img4 from '../../src/img/img4.jpg'
import img5 from '../../src/img/img5.jpg'
import img6 from '../../src/img/img6.jpg'


export  default class FrontAbout extends Component {
    render() {
        return (
            <div>
                <Header/>



                <section className="why-us">
		<div className="container">
	        <div className="row">
				<div className="col-md-8 offset-md-2">
					<h2 className="mt-5 text-center">Why Choose Us</h2>
					<p className="mb-5 text-center">Why choose us section design HTML is created by using Bootstrap and custom HTML CSS. This our services section cards are more beautiful with pure CSS hover effects.</p>
				</div>
			</div>

			<div className="row">
				<div className="col-sm-6 col-lg-4">
					<div className="box">
						<span>01</span>
						<h4><a href="#">Why Lorem Ipsum</a></h4>
						<p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
						<img src={img1} alt="" />
					</div>
				</div>

				<div className="col-sm-6 col-lg-4">
					<div className="box">
						<span>02</span>
						<h4><a href="#">Why do we use it</a></h4>
						<p>There are many variations of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
						<img src={img2} alt="" />
					</div>
				</div>

				<div className="col-sm-6 col-lg-4">
					<div className="box">
						<span>03</span>
						<h4><a href="#">Can I get some</a></h4>
						<p>There are many variations of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
						<img src={img3} alt="" />
					</div>
				</div>

				<div className="col-sm-6 col-lg-4">
					<div className="box">
						<span>04</span>
						<h4><a href="#">Why Lorem Ipsum</a></h4>
						<p>There are many variations of passages of Lorem Ipsum available, the majority have suffered alteration in some form</p>
						<img src={img4} alt="" />
					</div>
				</div>

				<div className="col-sm-6 col-lg-4">
					<div className="box">
						<span>05</span>
						<h4><a href="#">Why do we use it</a></h4>
						<p>There are many of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
						<img src={img5} alt="" />
					</div>
				</div>

				<div className="col-sm-6 col-lg-4">
					<div className="box">
						<span>06</span>
						<h4><a href="#">Can I get some</a></h4>
						<p>There are variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
						<img src={img6} alt="" />
					</div>
				</div>
			</div>
		</div>
	</section>


                <Footer/>
            </div>
        )
    }
}