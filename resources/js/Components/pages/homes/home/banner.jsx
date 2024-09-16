
import { Link } from '@inertiajs/react';

const BannerOne = () => {
    const banner1 = window.imageUrl+"img/banner/banner-right-img.jpg";
    const bannerShape = window.imageUrl+"img/shape/banner-shape.png";
    return (
            <>
            <div className="banner__one"> 
                <div className="banner-shape">
                    <div className="shape banner-shape-1"></div>
                    <div className="shape banner-shape-2"></div>
                    <div className="shape banner-shape-3"></div>
                    <div className="shape banner-shape-4"></div>
                    <img className="shape banner-shape-5" src={bannerShape} alt="image" />
                    <div className="shape banner-shape-7"></div>
                    <div className="shape banner-shape-6"></div>
                </div>
                <div className="container">
                    <div className="row align-items-center gy-4 justify-content-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="banner__one-content">
                                <span className="subtitle-one">MD. Mostak Ahmed</span>
                                <h2>Creating Dynamic and Impactful  <span>Web Experiences</span></h2>
                                <p>Exploring new possibilities and embracing emerging trends to deliver transformative IT solutions</p>
                                {/* <Link href="/services" className="btn-two">Find Solutions
                                    <i className="fas fa-arrow-right"></i>
                                </Link> */}
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-9">
                            <div className="banner__one-image">
                                <div className="banner__one-image-wrapper">
                                    <div className="banner__one-image-wrapper-shapes animate-rotate">
                                        <div className="shape shape-1"></div>
                                        <div className="shape shape-2"></div>
                                    </div>
                                    <img src={banner1} alt="banner-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default BannerOne;