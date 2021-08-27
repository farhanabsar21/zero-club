import React from 'react';
import "./BulletinBoard.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import bulletinImg from "../../../assets/bulletin.jpg";
import Pagination from './Pagination/Pagination';

const BulletinBoard = () => {
    return (
        <section className="bulletin-board pb-5">
            <div className="three-zero-container">
                <div className="bulletin-board-header d-flex justify-content-between align-items-center py-5">
                    <div className="bulletin-board-header-content">
                        <h2>3ZERO Club - Bulletin Board</h2>
                        <p>Home &#8250; 3ZERO Club - ClubProfile &#8250; 3ZERO Club - Bulletin Board</p>
                    </div>
                    <div className="bulletin-board-header-button">
                        <button className="add-filter"><FontAwesomeIcon icon={faPlus} /> Add Filter</button>
                        <button><FontAwesomeIcon icon={faPlus} /> Add New Button</button>
                    </div>
                </div>
                <div className="bulletin-board-blogs mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="bulletin-blog-content">
                                <div className="bulletin-blog-content-img">
                                    <img src={bulletinImg} alt="bulletin" />
                                </div>
                                <div className="px-4 py-5">
                                    <div className="bulletin-blog-content-header d-flex justify-content-between">
                                        <div>
                                            <img src={bulletinImg} alt="bulletin" />
                                        </div>
                                        <div>
                                            <h5>John Doe</h5>
                                            <span>2100088999</span> | <span>dd-mm-yy</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Social Business basic - How to Establish a Sustainable Social Business</h4>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quidem quasi alias minus? Dolorem soluta officiis doloribus. Accusantium, dolore animi ipsa magni neque placeat voluptatem nemo corporis, repellat explicabo officiis</p>
                                    </div>
                                    <div className="text-center">
                                        <a href="/">Read More <FontAwesomeIcon icon={faChevronRight} /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* blog post */}
                        <div className="col-md-4">
                            <div className="bulletin-blog-content">
                                <div className="bulletin-blog-content-img">
                                    <img src={bulletinImg} alt="bulletin" />
                                </div>
                                <div className="px-4 py-5">
                                    <div className="bulletin-blog-content-header d-flex justify-content-between">
                                        <div>
                                            <img src={bulletinImg} alt="bulletin" />
                                        </div>
                                        <div>
                                            <h5>John Doe</h5>
                                            <span>2100088999</span> | <span>dd-mm-yy</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Social Business basic - How to Establish a Sustainable Social Business</h4>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quidem quasi alias minus? Dolorem soluta officiis doloribus. Accusantium, dolore animi ipsa magni neque placeat voluptatem nemo corporis, repellat explicabo officiis</p>
                                    </div>
                                    <div className="text-center">
                                        <a href="/">Read More <FontAwesomeIcon icon={faChevronRight} /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* blog post */}
                        <div className="col-md-4">
                            <div className="bulletin-blog-content">
                                <div className="bulletin-blog-content-img">
                                    <img src={bulletinImg} alt="bulletin" />
                                </div>
                                <div className="px-4 py-5">
                                    <div className="bulletin-blog-content-header d-flex justify-content-between">
                                        <div>
                                            <img src={bulletinImg} alt="bulletin" />
                                        </div>
                                        <div>
                                            <h5>John Doe</h5>
                                            <span>2100088999</span> | <span>dd-mm-yy</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Social Business basic - How to Establish a Sustainable Social Business</h4>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad quidem quasi alias minus? Dolorem soluta officiis doloribus. Accusantium, dolore animi ipsa magni neque placeat voluptatem nemo corporis, repellat explicabo officiis</p>
                                    </div>
                                    <div className="text-center">
                                        <a href="/">Read More <FontAwesomeIcon icon={faChevronRight} /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* pagination  */}
                        <div className="pagination-container p-5 w-100 d-flex justify-content-center align-items-center">
                            <Pagination/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BulletinBoard;