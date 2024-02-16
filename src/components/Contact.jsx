import { useState } from "react";

function Contact() {
  // template_46s82fn
  // service_48l89pu
  // 2mPdkHPhIbKBMHWMQ

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // You can add your logic to submit the form data
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="info">
          <h1 className="title">Contact</h1>
          <p>Connect with me!</p>
        </div>
        <div className="form-container">
          <div className="login-box">
            <form onSubmit={handleSubmit}>
              <div className="user-box" style={{ marginTop: "10px" }}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label>Your Name</label>
              </div>
              <div className="user-box">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label>Your email</label>
              </div>
              <div className="user-box">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <label>Subject</label>
              </div>
              <div className="user-box">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label>Message</label>
              </div>
              <center style={{ marginTop: "-60px" }}>
                <button type="submit">
                  SEND
                  <span></span>
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
