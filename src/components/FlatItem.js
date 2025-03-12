import { Link } from "react-router-dom";

const FlatItem = ({slug}) => {
    return (
        <>
           <div className="text-center col-lg-3 col-12 col-md-3 ">
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src="/img/prod1.png" alt="flat" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">SOHO @ Empire City</span>
                        <span className="item-price">$1000</span>

                        
                    </div>
                    <div className="item-icon d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-2">
                                <i className="fas fa-bed"></i>
                                <span>1</span>
                                <i className="fas fa-bath"></i>
                                <span>1</span>
                            </div>
                            <Link to={`/flat/${slug}`} className="item-title">
                                <button className="btn btn-detail">View</button>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
        <div className="text-center col-lg-3 col-12 col-md-3 ">
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src="/img/prod2.png" alt="flat" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">The Dual Room</span>
                        <span className="item-price">$400</span>

                        
                    </div>
                    <div className="item-icon d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-2">
                                <i className="fas fa-bed"></i>
                                <span>2</span>
                                <i className="fas fa-bath"></i>
                                <span>2</span>
                            </div>
                            <Link to={`/flat/${slug}`} className="item-title">
                                <button className="btn btn-detail">View</button>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
        <div className="text-center col-lg-3 col-12 col-md-3 ">
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src="/img/prod3.png" alt="flat" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">Hartamas @ Duta</span>
                        <span className="item-price">$1560</span>

                        
                    </div>
                    <div className="item-icon d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-2">
                                <i className="fas fa-bed"></i>
                                <span>3</span>
                                <i className="fas fa-bath"></i>
                                <span>2</span>
                            </div>
                            <Link to={`/flat/${slug}`} className="item-title">
                                <button className="btn btn-detail">View</button>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
        <div className="text-center col-lg-3 col-12 col-md-3 ">
            <div className="item">
                <div className="item-image">
                    <img className="img-fluid" src="/img/prod4.png" alt="flat" />
                </div>
                <div className="item-description">
                    <div className="d-flex justify-content-between mb-3">
                        <span className="item-title">The Andaman Residence</span>
                        <span className="item-price">$1360</span>

                        
                    </div>
                    <div className="item-icon d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-2">
                                <i className="fas fa-bed"></i>
                                <span>3</span>
                                <i className="fas fa-bath"></i>
                                <span>2</span>
                            </div>
                            <Link to={`/flat/${slug}`} className="item-title">
                                <button className="btn btn-detail">View</button>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
        </>
     
        
    )
}

export default FlatItem