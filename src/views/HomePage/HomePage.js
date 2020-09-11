import React from "react";
import PropTypes from "prop-types";
import { BannerHeader } from "./components";

const HomePage = (props) => {
  return (
    <div>
      {/* contents */}
      <div className="site-wrap" id="home-section">
        <BannerHeader />
        <div className="site-section" id="services-section">
          <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-md-7 text-center">
                <div
                  className="block-heading-1"
                  data-aos="fade-up"
                  data-aos-delay
                >
                  <h2>Services</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facere at delectus laudantium, deserunt, atque eveniet.
                    Voluptatem, fuga quos rerum inventore.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-delay
              >
                <div className="block__35630">
                  <div className="icon mb-3">
                    <span className="flaticon-skateboard-4" />
                  </div>
                  <h3 className="mb-3 text-white">Skate for Beginner</h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur dolores voluptas obcaecati quo consequuntur mollitia
                  facilis.
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="block__35630">
                  <div className="icon mb-3">
                    <span className="flaticon-skateboard" />
                  </div>
                  <h3 className="mb-3 text-white">Personal Training</h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur dolores voluptas obcaecati quo consequuntur mollitia
                  facilis.
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="block__35630">
                  <div className="icon mb-3">
                    <span className="flaticon-skateboard-1" />
                  </div>
                  <h3 className="mb-3 text-white">Best Skater</h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur dolores voluptas obcaecati quo consequuntur mollitia
                  facilis.
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-delay
              >
                <div className="block__35630">
                  <div className="icon mb-3">
                    <span className="flaticon-skateboard-2" />
                  </div>
                  <h3 className="mb-3 text-white">Advance Skater</h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur dolores voluptas obcaecati quo consequuntur mollitia
                  facilis.
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="block__35630">
                  <div className="icon mb-3">
                    <span className="flaticon-skateboard-3" />
                  </div>
                  <h3 className="mb-3 text-white">Novice to Pro Skater</h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur dolores voluptas obcaecati quo consequuntur mollitia
                  facilis.
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="block__35630">
                  <div className="icon mb-3">
                    <span className="flaticon-skateboarding" />
                  </div>
                  <h3 className="mb-3 text-white">Skate Boarding</h3>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Pariatur dolores voluptas obcaecati quo consequuntur mollitia
                  facilis.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="block__73694 mb-2">
            <div className="container">
              <div className="row d-flex no-gutters align-items-stretch">
                <div
                  className="col-12 col-lg-6 block__73422"
                  style={{ backgroundImage: 'url("images/img_1.jpg")' }}
                  data-aos="fade-right"
                  data-aos-delay
                ></div>
                <div
                  className="col-lg-5 ml-auto p-lg-5 mt-4 mt-lg-0"
                  data-aos="fade-left"
                  data-aos-delay
                >
                  <h2 className="mb-3 text-primary">My Best Performance</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus id dignissimos nemo minus perspiciatis ullam itaque
                    voluptas iure vero, nesciunt unde odit aspernatur
                    distinctio, maiores facere officiis. Cum, esse, iusto?
                  </p>
                  <p>
                    Minus perspiciatis ullam itaque voluptas iure vero, nesciunt
                    unde odit aspernatur distinctio, maiores facere officiis.
                    Cum, esse, iusto?
                  </p>
                  <ul className="ul-check primary list-unstyled mt-5">
                    <li>Lorem ipsum dolor.</li>
                    <li>Quod, amet. Provident.</li>
                    <li>Quo, adipisci, quis.</li>
                    <li>Cumque perspiciatis, blanditiis?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="block__73694">
            <div className="container">
              <div className="row d-flex no-gutters align-items-stretch">
                <div
                  className="col-12 col-lg-6 block__73422 order-lg-2"
                  style={{ backgroundImage: 'url("images/img_2.jpg")' }}
                  data-aos="fade-left"
                  data-aos-delay
                ></div>
                <div
                  className="col-lg-5 mr-auto p-lg-5 mt-4 mt-lg-0 order-lg-1"
                  data-aos="fade-right"
                  data-aos-delay
                >
                  <h2 className="mb-3 text-primary">My Best Mentor</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus id dignissimos nemo minus perspiciatis ullam itaque
                    voluptas iure vero, nesciunt unde odit aspernatur
                    distinctio, maiores facere officiis. Cum, esse, iusto?
                  </p>
                  <p>
                    Minus perspiciatis ullam itaque voluptas iure vero, nesciunt
                    unde odit aspernatur distinctio, maiores facere officiis.
                    Cum, esse, iusto?
                  </p>
                  <ul className="ul-check primary list-unstyled mt-5">
                    <li>Lorem ipsum dolor.</li>
                    <li>Quod, amet. Provident.</li>
                    <li>Quo, adipisci, quis.</li>
                    <li>Cumque perspiciatis, blanditiis?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section" id="about-section">
          <div className="container">
            <div className="row justify-content-center mb-4 block-img-video-1-wrap">
              <div className="col-md-12 mb-5">
                <figure className="block-img-video-1" data-aos="fade">
                  <a
                    href="https://vimeo.com/45830194"
                    data-fancybox
                    data-ratio={2}
                  >
                    <span className="icon">
                      <span className="icon-play" />
                    </span>
                    <img
                      src="images/hero_2.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </a>
                </figure>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div
                    className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
                    data-aos="fade-up"
                    data-aos-delay
                  >
                    <div className="block-counter-1">
                      <span className="number text-primary">
                        <span data-number={30}>0</span>+
                      </span>
                      <span className="caption">Year of Experience</span>
                    </div>
                  </div>
                  <div
                    className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <div className="block-counter-1">
                      <span className="number text-primary">
                        <span data-number={4}>0</span>+
                      </span>
                      <span className="caption">Expert Trainer</span>
                    </div>
                  </div>
                  <div
                    className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="block-counter-1">
                      <span className="number text-primary">
                        <span data-number={4}>0</span>+
                      </span>
                      <span className="caption">Number of Trainer</span>
                    </div>
                  </div>
                  <div
                    className="col-6 col-md-6 mb-4 col-lg-0 col-lg-3"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <div className="block-counter-1">
                      <span className="number text-primary">
                        <span data-number={1500}>0</span>+
                      </span>
                      <span className="caption">Number of Members</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section" id="team-section">
          <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-md-7 text-center">
                <div
                  className="block-heading-1"
                  data-aos="fade-up"
                  data-aos-delay
                >
                  <h2>Our Team</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facere at delectus laudantium, deserunt, atque eveniet.
                    Voluptatem, fuga quos rerum inventore.
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
      </div>
      <section className="site-section" id="pricing-section">
        <div className="container">
          <div className="row mb-5 justify-content-center text-center">
            <div className="col-md-7">
              <div
                className="block-heading-1"
                data-aos="fade-up"
                data-aos-delay
              >
                <h2>Session Pricing</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque quae temporibus tenetur vitae iusto suscipit alias,
                  laudantium, porro unde tempora.
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div
              className="col-md-6 mb-4 mb-lg-0 col-lg-4"
              data-aos="fade-up"
              data-aos-delay
            >
              <div className="pricing">
                <h3 className="text-center text-white">Basic</h3>
                <div className="price text-center mb-4 ">
                  <span>
                    <span>$47</span> / year
                  </span>
                </div>
                <ul className="list-unstyled ul-check success mb-5">
                  <li>Officia quaerat eaque neque</li>
                  <li>Possimus aut consequuntur incidunt</li>
                  <li className="remove">Lorem ipsum dolor sit amet</li>
                  <li className="remove">Consectetur adipisicing elit</li>
                  <li className="remove">
                    Dolorum esse odio quas architecto sint
                  </li>
                </ul>
                <p className="text-center">
                  <a href="#" className="btn btn-secondary btn-md">
                    Buy Now
                  </a>
                </p>
              </div>
            </div>
            <div
              className="col-md-6 mb-4 mb-lg-0 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="pricing">
                <h3 className="text-center text-white">Premium</h3>
                <div className="price text-center mb-4 ">
                  <span>
                    <span>$200</span> / year
                  </span>
                </div>
                <ul className="list-unstyled ul-check success mb-5">
                  <li>Officia quaerat eaque neque</li>
                  <li>Possimus aut consequuntur incidunt</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipisicing elit</li>
                  <li className="remove">
                    Dolorum esse odio quas architecto sint
                  </li>
                </ul>
                <p className="text-center">
                  <a href="#" className="btn btn-primary btn-md text-white">
                    Buy Now
                  </a>
                </p>
              </div>
            </div>
            <div
              className="col-md-6 mb-4 mb-lg-0 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="pricing">
                <h3 className="text-center text-white">Professional</h3>
                <div className="price text-center mb-4 ">
                  <span>
                    <span>$750</span> / year
                  </span>
                </div>
                <ul className="list-unstyled ul-check success mb-5">
                  <li>Officia quaerat eaque neque</li>
                  <li>Possimus aut consequuntur incidunt</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipisicing elit</li>
                  <li>Dolorum esse odio quas architecto sint</li>
                </ul>
                <p className="text-center">
                  <a href="#" className="btn btn-secondary btn-md">
                    Buy Now
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row site-section" id="faq-section">
            <div className="col-12 text-center" data-aos="fade">
              <h2 className="section-title text-primary">
                Frequently Ask Questions
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="text-primary h4 mb-4">
                  Can I accept both Paypal and Stripe?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </p>
              </div>
              <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="text-primary h4 mb-4">
                  What available is refund period?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </p>
              </div>
              <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="text-primary h4 mb-4">
                  Can I accept both Paypal and Stripe?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </p>
              </div>
              <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="text-primary h4 mb-4">
                  What available is refund period?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="text-primary h4 mb-4">Where are you from?</h3>
                <p>
                  Voluptatum nobis obcaecati perferendis dolor totam unde
                  dolores quod maxime corporis officia et. Distinctio assumenda
                  minima maiores.
                </p>
              </div>
              <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="text-primary h4 mb-4">
                  What is your opening time?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </p>
              </div>
              <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="text-primary h4 mb-4">
                  Can I accept both Paypal and Stripe?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </p>
              </div>
              <div className="mb-5" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="text-primary h4 mb-4">
                  What available is refund period?
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam assumenda eum blanditiis perferendis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <div className="site-section" id="blog-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <div
                className="block-heading-1"
                data-aos="fade-up"
                data-aos-delay
              >
                <span>Latest Blog Posts</span>
                <h2>Our Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 col-lg-6"
              data-aos="fade-up"
              data-aos-delay
            >
              <div>
                <a href="single.html" className="mb-4 d-block">
                  <img
                    src="images/hero_2.jpg"
                    alt="Image"
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
                    alt="Image"
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
      <div className="site-section" id="contact-section">
        <div className="container">
          <div className="row">
            <div
              className="col-12 text-center mb-5"
              data-aos="fade-up"
              data-aos-delay
            >
              <div className="block-heading-1">
                <span>Get In Touch</span>
                <h2>Contact Me</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-6 mb-5"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <form action="#" method="post">
                <div className="form-group row">
                  <div className="col-md-6 mb-4 mb-lg-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <textarea
                      name
                      id
                      className="form-control"
                      placeholder="Write your message."
                      cols={30}
                      rows={10}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 ml-auto">
                    <input
                      type="submit"
                      className="btn btn-block btn-primary text-white py-3 px-5"
                      defaultValue="Send Message"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col-lg-4 ml-auto"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <h2 className="text-primary">
                Need to know more on details. Get In Touch
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores, distinctio! Harum quibusdam nisi, illum nulla
                aspernatur aut quidem aperiam, quae non tempora recusandae
                voluptatibus fugit impedit.
              </p>
              <p>
                <a href="#" className="btn btn-primary text-white">
                  Get Started
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* contents */}
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;
