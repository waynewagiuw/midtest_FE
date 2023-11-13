const About = () => {
  return (
    <div>
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
            <p>
            I am a recent graduate with a degree in Computer Science, eager to explore the realm of software development. Drawing upon the knowledge gained during my academic journey, I have chosen to specialize as a front-end developer. My strength lies in translating captivating designs into functional user interfaces. I take pleasure in crafting responsive and user-friendly interfaces using various cutting-edge technologies such as HTML, CSS, and JavaScript. My learning experiences in the coding world have propelled me to continually evolve and keep pace with the ever-changing landscape of technology. I am enthusiastic about contributing to the creation of compelling and user-centric web experiences.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="assets/img/wyn_cj.jpg" className="img-fluid" alt />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>UI/UX Designer &amp; Web Developer.</h3>
              <p className="fst-italic">
              Hello there! Im a passionate professional in the field of UI/UX design and web development. 
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Birthday:</strong> <span>4 Nov 2002</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Website:</strong> <span>www.wagiuwwayne.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Phone:</strong> <span>082215378469</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>City:</strong> <span>North Sulawesi, Manado</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Age:</strong> <span>21</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Degree:</strong> <span>Master</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Email:</strong>{" "}
                      <span>wagiuwwayne@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right" />{" "}
                      <strong>Freelance:</strong> <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p>
              Armed with a masters degree and a dedication to my craft, I am continually honing my skills to stay at the forefront of industry trends. I am open to freelance opportunities, always eager to take on new and exciting projects. Lets collaborate and bring your ideas to life!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </div>
  );
};

export default About;
