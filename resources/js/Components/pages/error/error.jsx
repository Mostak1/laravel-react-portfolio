import { Link } from '@inertiajs/react';
import image from "../../../../../public/assets/img/404/404.png";

const Error = () => {
    return (
        <div className="error-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <div className="error-img">
                            <img src={image} alt="image" />
                        </div>
                        <Link href={route('home')} className="btn-two m-auto d-table">Go Back
                            <i className="fas fa-chevron-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;