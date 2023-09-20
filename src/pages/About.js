import React from 'react';

function About() {
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <h1>About</h1>
          <ul>
            <li>
              <a href="index">Home</a>
            </li>
            <li>
              <i className="fas fa-caret-right"></i>
            </li>
            <li>
              <span>About</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="OurBestPlatform">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="PlatformImg">
                <img src="assets/images/platform-img.png" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="PlatformCon">
                <h2 className="theme-h2">Development Of Our Best Platform</h2>
                <div id="projectFacts" className="sectionclassName">
                  <div className="fullWidth eight columns">
                    <div className="projectFactsWrap ">
                      <div
                        className="item wow fadeInUpBig animated animated"
                        data-number="12"
                        style={{ visibility: 'visible' }}
                      >
                        <p>Our Users</p>
                        <p id="number1" className="number">
                          12 <span>M+</span>
                        </p>
                      </div>
                      <div
                        className="item wow fadeInUpBig animated animated"
                        data-number="55"
                        style={{ visibility: 'visible' }}
                      >
                        <p>Active Transaction</p>
                        <p id="number2" className="number">
                          55
                        </p>
                      </div>
                      <div
                        className="item wow fadeInUpBig animated animated"
                        data-number="359"
                        style={{ visibility: 'visible' }}
                      >
                        <p>Brand Partner</p>
                        <p id="number3" className="number">
                          359
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  Has become the best choice to become a platform that <br />{' '}
                  accommodates users in asset transactions
                </p>
                <a href="#">Let’s know more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="BestFeatures">
        <div className="container">
          <div className="section-title">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <h2 className="theme-h2">
                  Best Features For Users Convenience
                </h2>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <p className="theme-para">
                  Here our features that we present to make it easier for each
                  of our users <a href="#">Let’s know more</a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="FeatureBox">
                <div className="FeatureImg">
                  <img src="assets/images/payment.png" />
                </div>
                <div className="FeatureCon">
                  <h3>Easy Payment</h3>
                  <p>
                    Easier payments with many options to sell or buy in our
                    transactions
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="FeatureBox">
                <div className="FeatureImg">
                  <img src="assets/images/security.png" />
                </div>
                <div className="FeatureCon">
                  <h3>High Security</h3>
                  <p>
                    Security system with high technology and encryption of every
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="FeatureBox">
                <div className="FeatureImg">
                  <img src="assets/images/ecosystem.png" />
                </div>
                <div className="FeatureCon">
                  <h3>Best Ecosystem</h3>
                  <p>
                    The services we provide with full support for the
                    convenience of our
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="VideoSec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="PlatformCon">
                <h2 className="theme-h2">
                  Learn More Tips In Our Transactions
                </h2>
                <p>
                  We provide various tutorials in the form of videos <br />{' '}
                  specifically for our users to be able to maximize our
                </p>
                <div className="theme-btn">
                  <a className="vc_general" href="#">
                    See Details <img src="assets/images/btn-bf02.png" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="PlatformImg">
                <img src="assets/images/tips-img.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
