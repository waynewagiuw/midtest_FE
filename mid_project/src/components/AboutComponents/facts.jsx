const Facts = () => {
  return (
    <div>
      {/* ======= Facts Section ======= */}
      <section id="facts" className="facts">
        <div className="container">
          <div className="section-title">
            <h2>Facts</h2>
            <p>
            I am a curious and passionate individual with a love for exploration, technology, and the arts. Whether experimenting with new cuisines, staying active through fitness, or expressing creativity in various forms, I embrace a diverse range of interests. A language enthusiast and advocate for sustainability, I am committed to continuous learning and making a positive impact on the world around me.
            </p>
          </div>
          <div className="row no-gutters">
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
            >
              <div className="count-box">
                <i className="bi bi-emoji-smile" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={232}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>
                  <strong>Happy Clients</strong> 
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="count-box">
                <i className="bi bi-journal-richtext" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={521}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>
                  <strong>Projects</strong> 
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="count-box">
                <i className="bi bi-headset" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={1453}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>
                  <strong>Hours Of Support</strong>
                </p>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="count-box">
                <i className="bi bi-people" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={32}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>
                  <strong>Hard Workers</strong> 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Facts Section */}
    </div>
  );
};

export default Facts;
