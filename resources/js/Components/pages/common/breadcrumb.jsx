import { Link } from '@inertiajs/react';

const BreadCrumb = ({title, innerTitle}) => {
    const image = window.imageUrl+"img/banner/page-banner-img.png";
    const shape = window.imageUrl+"img/shape/page-banner-shape.png";
    return (
        <div className="page__banner">
            <div className="page__banner-shape">
                <img src={shape} alt="image" />
            </div>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="page__banner-content">
                            <h2>{title}</h2>
                            <span><Link className='link' href={route('home')}>Home</Link><span>|</span>{innerTitle}</span>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="page__banner-img">
                            <img src={image} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;