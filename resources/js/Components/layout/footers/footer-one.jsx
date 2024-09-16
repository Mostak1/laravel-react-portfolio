import Social from "@/components/data/social";
// import { Link } from '@inertiajs/react';

import servicesData from "@/components/data/services-data";
import { Link } from "@inertiajs/react";
import logo2 from "../../../../../public/assets/img/logo-2.png";
import footerBg from "../../../../../public/assets/img/shape/footer-two-bg.png";
import ctaBg from "../../../../../public/assets/img/subscribe/subscribe-one-shape-1.png";

const FooterOne = () => {
    return (
        <>
        <div className="subscribe__one">
            <div className="container">
                <div className="row justify-content-center text-center subscribe__one-content" style={{backgroundImage: `url(${ctaBg})`}}>
                    <div className="col-xl-7 col-lg-8">
                        <div className="subscribe__one-title">
                            <h3>Subscribe Our newsletter</h3>
                        </div>
                        <form action="#" className="subscribe__one-form">
                            <input type="email" placeholder="Enter Your Email" />
                            <button className="btn-two" type="submit">subscribe now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
		<div className="footer__two">
			<img className="footer__two-shape" src={footerBg} alt="image" />
			<div className="container">
				<div className="row gy-4 justify-content-between">
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
						<div className="footer__two-widget">
							<div className="footer__two-widget-about">
								<Link href={route('home')}><img src={logo2} alt="image" /></Link>
								<p>Financial planners help people to gain knowledge about</p>
								<div className="footer__two-widget-about-location">
									<div className="footer__two-widget-about-location-item">
										<div className="footer__two-widget-about-location-item-icon">
											<i className="flaticon-telephone-call"></i>
										</div>
										<div className="footer__two-widget-about-location-item-info">
											<span>Phone Number</span>
											<Link className="link" href="tel:+8801752243665">+8801752243665</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
						<div className="footer__two-widget ml-85">
							<h4>Quick Link</h4>
							<div className="footer__two-widget-solution">
								<ul>
									<li><Link className='link' href="#"><i className="far fa-chevron-double-right"></i>Service</Link></li>
									<li><Link className='link' href="#"><i className="far fa-chevron-double-right"></i>FAQ</Link></li>
									<li><Link className='link' href={route('project')}><i className="far fa-chevron-double-right"></i>Projects</Link></li>
									<li><Link className='link' href={route('home')}><i className="far fa-chevron-double-right"></i>About</Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
						<div className="footer__two-widget">
							<h4>Our Services</h4>
							<div className="footer__two-widget-solution">
								<ul>
									{servicesData.slice(0, 4).map((data, id) => {
										const words = data.title.split(' ');
										const firstAndSecondWord = words.slice(0, 2).join(' ');
										return (
											<li key={id}><Link className="link" href={route('home')}><i className="far fa-chevron-double-right"></i>{firstAndSecondWord}</Link></li>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
						<div className="footer__two-widget">
							<h4>Follow Us</h4>
							<div className="footer__two-widget-subscribe">
								<p>The latest news, articles, sent to your inbox weekly.</p>
								<div className="footer__two-widget-social">	
									<Social />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="copyright__one">
				<div className="container">
					<div className="row justify-content-between copyright__one-container-area">
						<div className="col-xl-5 col-lg-6"> 
							<div className="copyright__one-left">
								<p>© Mostak Ahmed 2023 | All Rights Reserved</p>
							</div>
						</div>
						<div className="col-xl-5 col-lg-6">
							<div className="copyright__one-right">
								{/* <Link className="link" href="/about">Privacy Policy</Link> */}
								<Link className="link" href={route('contact')}>Contact</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </>
    );
};

export default FooterOne;