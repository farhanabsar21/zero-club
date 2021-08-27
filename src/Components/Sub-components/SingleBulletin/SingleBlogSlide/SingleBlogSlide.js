import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import bulletinImg from "../../../../assets/bulletin.jpg";
import "./SingleBlogSlide.scss";

const SingleBlogSlide = () => {
    return (
        <div className="single-bulletin-board-blogs mt-3">
            <div className="row">
                <div className="col-md-4">
                    <div className="single-bulletin-blog-content">
                        <div className="single-bulletin-blog-content-img">
                            <img src={bulletinImg} alt="single-bulletin" />
                        </div>
                        <div className="px-4 py-5">
                            <div className="single-bulletin-blog-content-header d-flex justify-content-between">
                                <div>
                                    <img src={bulletinImg} alt="single-bulletin" />
                                </div>
                                <div>
                                    <h5>John Doe</h5>
                                    <span>2100088999</span> | <span>dd-mm-yy</span>
                                </div>
                            </div>
                            <div>
                                <h4>Social Business basic - How to Establish a Sustainable Social Business</h4>
                            </div>
                            <div className="text-center">
                                <a href="/">Read More <FontAwesomeIcon icon={faChevronRight} /> </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* blog post */}
                <div className="col-md-4">
                    <div className="single-bulletin-blog-content">
                        <div className="single-bulletin-blog-content-img">
                            <img src={bulletinImg} alt="single-bulletin" />
                        </div>
                        <div className="px-4 py-5">
                            <div className="single-bulletin-blog-content-header d-flex justify-content-between">
                                <div>
                                    <img src={bulletinImg} alt="single-bulletin" />
                                </div>
                                <div>
                                    <h5>John Doe</h5>
                                    <span>2100088999</span> | <span>dd-mm-yy</span>
                                </div>
                            </div>
                            <div>
                                <h4>Social Business basic - How to Establish a Sustainable Social Business</h4>
                            </div>
                            <div className="text-center">
                                <a href="/">Read More <FontAwesomeIcon icon={faChevronRight} /> </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* blog post */}
                <div className="col-md-4">
                    <div className="single-bulletin-blog-content">
                        <div className="single-bulletin-blog-content-img">
                            <img src={bulletinImg} alt="single-bulletin" />
                        </div>
                        <div className="px-4 py-5">
                            <div className="single-bulletin-blog-content-header d-flex justify-content-between">
                                <div>
                                    <img src={bulletinImg} alt="single-bulletin" />
                                </div>
                                <div>
                                    <h5>John Doe</h5>
                                    <span>2100088999</span> | <span>dd-mm-yy</span>
                                </div>
                            </div>
                            <div>
                                <h4>Social Business basic - How to Establish a Sustainable Social Business</h4>
                            </div>
                            <div className="text-center">
                                <a href="/">Read More <FontAwesomeIcon icon={faChevronRight} /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlogSlide;