/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
  return (
    <div>
      {/* ======= Hero Section ======= */}
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Wayne Gilbert Wagiuw</h1>
          <p>
          Front End Developer.{" "}
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            />
          </p>
        </div>
      </section>
      {/* End Hero */}
    </div>
  );
};

export default Hero;
