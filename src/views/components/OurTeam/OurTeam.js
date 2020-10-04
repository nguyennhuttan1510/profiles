import React from "react";
import PropTypes from "prop-types";

const OurTeam = (props) => {
  return (
    <div className="site-section" id="team-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-7 text-center">
            <div className="block-heading-1" data-aos="fade-up" data-aos-delay>
              <h2>Our Team</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
                at delectus laudantium, deserunt, atque eveniet. Voluptatem,
                fuga quos rerum inventore.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
            <div className="block-team-member-1 text-center rounded">
              <figure>
                <img
                  src="images/person_1.jpg"
                  alt="Image"
                  className="img-fluid rounded-circle"
                />
              </figure>
              <h3 className="font-size-20 text-black">Jean Smith</h3>
              <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">
                Skateboard Trainer
              </span>
              <div className="block-social-1">
                <a
                  href="#"
                  className="btn border-w-2 rounded primary-primary-outline--hover"
                >
                  <span className="icon-facebook" />
                </a>
                <a
                  href="#"
                  className="btn border-w-2 rounded primary-primary-outline--hover"
                >
                  <span className="icon-twitter" />
                </a>
                <a
                  href="#"
                  className="btn border-w-2 rounded primary-primary-outline--hover"
                >
                  <span className="icon-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 mb-4"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="block-team-member-1 text-center rounded">
              <figure>
                <img
                  src="images/person_2.jpg"
                  alt="Image"
                  className="img-fluid rounded-circle"
                />
              </figure>
              <h3 className="font-size-20 text-black">Bob Carry</h3>
              <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">
                Skateboard Trainer
              </span>
              <div className="block-social-1">
                <a
                  href="#"
                  className="btn border-w-2 rounded primary-primary-outline--hover"
                >
                  <span className="icon-facebook" />
                </a>
                <a
                  href="#"
                  className="btn border-w-2 rounded primary-primary-outline--hover"
                >
                  <span className="icon-twitter" />
                </a>
                <a
                  href="#"
                  className="btn border-w-2 rounded primary-primary-outline--hover"
                >
                  <span className="icon-instagram" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 mb-4"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="block-team-member-1 text-center rounded">
              <figure>
                <img
                  src="images/person_1.jpg"
                  alt="Image"
                  className="img-fluid rounded-circle"
                />
              </figure>
              <h3 className="font-size-20 text-white">Ricky Fisher</h3>
              <span className="d-block font-gray-5 letter-spacing-1 text-uppercase font-size-12 mb-3">
                Skateboard Trainer
              </span>
              <div className="block-social-1">
                <a
                  href="#"
                  className="btn border-w-2 rounded primary-primary-outline--hover"
                >
                  <span className="icon-facebook" />
                </a>
                <a
                  href="#"
                  className="btn border-w-2 rounded primary-primary-outline--hover"
                >
                  <span className="icon-twitter" />
                </a>
                <a
                  href="#"
                  className="btn border-w-2 rounded primary-primary-outline--hover"
                >
                  <span className="icon-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OurTeam.propTypes = {};

export default OurTeam;
