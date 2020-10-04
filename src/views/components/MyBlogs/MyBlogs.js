import React from "react";
import PropTypes from "prop-types";

const MyBlogs = (props) => {
  return (
    <div className="site-section" id="blog-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <div className="block-heading-1" data-aos="fade-up" data-aos-delay>
              <span>Latest Blog Posts</span>
              <h2>Our Blog</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay>
            <div>
              <a href="single.html" className="mb-4 d-block">
                <img
                  src="images/hero_2.jpg"
                  alt=""
                  className="img-fluid rounded"
                />
              </a>
              <h2>
                <a href="single.html">How To Find Gold In Mining</a>
              </h2>
              <p className="text-muted mb-3 text-uppercase small">
                <span className="mr-2">January 18, 2019</span> By{" "}
                <a href="single.html" className="by">
                  James Cooper
                </a>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat et suscipit iste libero neque. Vitae quidem ducimus
                voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga
                veritatis culpa quis!
              </p>
              <p>
                <a href="single.html">Read More</a>
              </p>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div>
              <a href="single.html" className="mb-4 d-block">
                <img
                  src="images/hero_3.jpg"
                  alt=""
                  className="img-fluid rounded"
                />
              </a>
              <h2>
                <a href="single.html">How To Find Gold In Mining</a>
              </h2>
              <p className="text-muted mb-3 text-uppercase small">
                <span className="mr-2">January 18, 2019</span> By{" "}
                <a href="single.html" className="by">
                  James Cooper
                </a>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat et suscipit iste libero neque. Vitae quidem ducimus
                voluptatibus nemo cum odio ab enim nisi, itaque, libero fuga
                veritatis culpa quis!
              </p>
              <p>
                <a href="single.html">Read More</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MyBlogs.propTypes = {};

export default MyBlogs;
