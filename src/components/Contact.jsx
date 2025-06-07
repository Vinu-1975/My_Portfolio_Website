import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
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
    setFormStatus({ ...formStatus, submitting: true });
    
    emailjs.send(
      'service_48l89pu',
      'template_46s82fn',
      {
        from_name: formData.name,
        to_name: 'Vinayakan V S',
        from_email: formData.email,
        to_email: 'vinayakanvs2003@gmail.com',
        message: formData.message
      },
      '2mPdkHPhIbKBMHWMQ'
    )
    .then(() => {
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Thank you! I will get back to you as soon as possible."
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitting: false,
          success: false,
          error: false,
          message: ""
        });
      }, 5000);
      
    }, (error) => {
      console.log(error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Something went wrong. Please try again later."
      });
    });
  };

  return (
    <section className="contact reveal" id="contact">
      <div className="container">
        <motion.div 
          className="info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="title">Get In Touch</h1>
          <p>Have a project in mind or just want to say hello? I'd love to hear from you!</p>
        </motion.div>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="contact-item">
              <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="details">
                <h3>Location</h3>
                <p>Kerala, India</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><i className="fas fa-envelope"></i></div>
              <div className="details">
                <h3>Email</h3>
                <p className="email">vinayakanvs2003@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><i className="fas fa-phone"></i></div>
              <div className="details">
                <h3>Phone</h3>
                <p>+91 7994377697</p>
              </div>
            </div>
            <div className="social-links">
              <motion.a 
                href="https://github.com/Vinu-1975" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fab fa-github"></i>
              </motion.a>
              <motion.a 
                href="www.linkedin.com/in/vinayakan-v-s-9a2a9a222" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/vinu__1975?igsh=MXdraGprdjczNWJvNA==" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="form-3d">
              <form onSubmit={handleSubmit}>
                <div className="input-row">
                  <div className="input-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                    />
                    <span className="input-highlight"></span>
                  </div>
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your Email"
                    />
                    <span className="input-highlight"></span>
                  </div>
                </div>
                <div className="input-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                    rows="6"
                  ></textarea>
                  <span className="input-highlight textarea-highlight"></span>
                </div>
                
                {formStatus.message && (
                  <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <motion.button 
                  type="submit" 
                  className="submit-btn"
                  disabled={formStatus.submitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{formStatus.submitting ? 'Sending...' : 'Send Message'}</span>
                  <i className="fas fa-paper-plane"></i>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
