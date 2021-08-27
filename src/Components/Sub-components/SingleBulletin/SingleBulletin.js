import React from 'react';
import "./SingleBulletin.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import bulletinImg from "../../../assets/bulletin.jpg";
import SingleBlogSlide from './SingleBlogSlide/SingleBlogSlide';

const SingleBulletin = () => {
    return (
        <section className="bulletin-board pb-5">
            <div className="three-zero-container">
                <div className="bulletin-board-header d-flex justify-content-between align-items-center py-5">
                    <div className="bulletin-board-header-content">
                        <h2>3ZERO Club - Bulletin Board</h2>
                        <p>Home &#8250; 3ZERO Club - ClubProfile &#8250; 3ZERO Club - Bulletin Board</p>
                    </div>
                </div>
                {/* main blog */}
                <article>
                    <div className="article-header-image-container">
                        <img src={bulletinImg} alt="" />
                    </div>
                    <div className="article-body p-5">
                        <div className="article-body-header d-flex justify-content-between">
                            <div>
                                <img src={bulletinImg} alt="bulletin" />
                            </div>
                            <div>
                                <h5>John Doe</h5>
                                <span>2100088999</span> | <span>dd-mm-yy</span>
                            </div>
                        </div>
                        <div className="mt-5">
                            <h2>Social Business basic - How to Establish a Sustainable Social Business</h2>
                        </div>
                        <div className="mt-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quisquam omnis praesentium voluptate eveniet, nobis, obcaecati sit voluptas atque expedita porro officia culpa optio quam aliquam neque pariatur, exercitationem debitis quae. Ducimus laboriosam eum accusamus modi ex iusto soluta unde tenetur explicabo at totam, ullam odit necessitatibus, quidem, enim dolores?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum et, cum dicta sequi laborum reprehenderit quisquam labore illo laudantium corporis porro modi ab itaque nisi tenetur id unde, atque, sint magni impedit. Officiis neque animi alias culpa sint voluptatum.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum et, cum dicta sequi laborum reprehenderit quisquam labore illo laudantium corporis porro modi ab itaque nisi tenetur id unde, atque, sint magni impedit. Officiis neque animi alias culpa sint voluptatum.</p>
                        </div>
                        <div className="article-links mt-4">
                            <a href="/">#SocialBusiness</a>  
                            <a href="/">#AWorldof3Zeros</a>
                            <a href="/">#BeTheChange</a>
                        </div>
                    </div>
                </article>
                <div className="similar-bulletin p-5 mt-5">
                    <div className="py-4">
                        <h2>Similar Bulletin</h2>
                    </div>
                    <SingleBlogSlide/>
                </div>
            </div>
        </section>
    );
};

export default SingleBulletin;