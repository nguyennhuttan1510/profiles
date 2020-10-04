import React from "react";
import PropTypes from "prop-types";

const Command = (props) => {
  return (
    <div
      className="site-section block-13"
      id="testimonials-section"
      data-aos="fade"
    >
      <div className="container">
        <div className="text-center mb-5">
          <div className="block-heading-1">
            <h2>Testimonial</h2>
          </div>
        </div>
        <div className="owl-carousel nonloop-block-13">
          <div>
            <div className="block-testimony-1 text-center">
              <blockquote className="mb-4">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem, fugit excepturi sapiente voluptatum nulla odio
                  quaerat quibusdam tempore similique doloremque veritatis et
                  cupiditate, maiores cumque repudiandae explicabo tempora
                  deserunt consequuntur?”
                </p>
              </blockquote>
              <figure>
                <img
                  src="images/person_1.jpg"
                  alt="Image"
                  className="img-fluid rounded-circle mx-auto"
                />
              </figure>
              <h3 className="font-size-20 text-black">Ricky Fisher</h3>
            </div>
          </div>
          <div>
            <div className="block-testimony-1 text-center">
              <figure>
                <img
                  src="images/person_2.jpg"
                  alt="Image"
                  className="img-fluid rounded-circle mx-auto"
                />
              </figure>
              <h3 className="font-size-20 mb-4 text-black">Ken Davis</h3>
              <blockquote className="mb-4">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem, fugit excepturi sapiente voluptatum nulla odio
                  quaerat quibusdam tempore similique doloremque veritatis et
                  cupiditate, maiores cumque repudiandae explicabo tempora
                  deserunt consequuntur?”
                </p>
              </blockquote>
            </div>
          </div>
          <div>
            <div className="block-testimony-1 text-center">
              <blockquote className="mb-4">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem, fugit excepturi sapiente voluptatum nulla odio
                  quaerat quibusdam tempore similique doloremque veritatis et
                  cupiditate, maiores cumque repudiandae explicabo tempora
                  deserunt consequuntur?”
                </p>
              </blockquote>
              <figure>
                <img
                  src="images/person_1.jpg"
                  alt="Image"
                  className="img-fluid rounded-circle mx-auto"
                />
              </figure>
              <h3 className="font-size-20 text-black">Mellisa Griffin</h3>
            </div>
          </div>
          <div>
            <div className="block-testimony-1 text-center">
              <figure>
                <img
                  src="images/person_3.jpg"
                  alt="Image"
                  className="img-fluid rounded-circle mx-auto"
                />
              </figure>
              <h3 className="font-size-20 mb-4 text-black">Robert Steward</h3>
              <blockquote className="mb-4">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorem, fugit excepturi sapiente voluptatum nulla odio
                  quaerat quibusdam tempore similique doloremque veritatis et
                  cupiditate, maiores cumque repudiandae explicabo tempora
                  deserunt consequuntur?”
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Command.propTypes = {};

export default Command;
