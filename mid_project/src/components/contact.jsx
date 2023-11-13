const Contact = () => {
    return (
        <div>
            {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
            </div>
            <div className="row" data-aos="fade-in">
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt" />
                    <h4>Location:</h4>
                    <p>Perum Lumoring Jaya, Kema 1</p>
                  </div>
                  <div className="email">
                    <i className="bi bi-envelope" />
                    <h4>Email:</h4>
                    <p>wagiuwwayne@gmail.com</p>
                  </div>
                  <div className="phone">
                    <i className="bi bi-phone" />
                    <h4>Call:</h4>
                    <p>082215378469</p>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/place/Perumahan+Lumoring+jaya/@1.3830505,125.0742636,17z/data=!3m1!4b1!4m6!3m5!1s0x32870508861250e5:0x76b64e80e2429bb1!8m2!3d1.3830451!4d125.078877!16s%2Fg%2F11j4929m07?hl=id&entry=ttu"
                    frameBorder={0}
                    style={{ border: 0, width: "100%", height: 290 }}
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows={10}
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
        </div>
    )
}

export default Contact;