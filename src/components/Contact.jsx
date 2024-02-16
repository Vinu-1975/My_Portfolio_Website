function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="info">
          <h1 className="title">Contact</h1>
          <p>Connect with me!</p>
        </div>
        <div className="form-container">
          <div className="login-box">
            <form>
              <div className="user-box" style={{marginTop:'10px'}}>
                <input type="text" name="" required />
                <label>Your Name</label>
              </div>
              <div className="user-box">
                <input type="email" name="" required />
                <label>Your email</label>
              </div>
              <div className="user-box">
                <input type="email" name="" required />
                <label>Subject</label>
              </div>
              <div className="user-box">
                <textarea name="" required></textarea>
                <label>Message</label>
              </div>
              <center style={{marginTop:'-60px'}}>
                <a href="#">
                  SEND
                  <span></span>
                </a>
              </center>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
