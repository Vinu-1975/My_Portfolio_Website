import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Testimonials() {
  // Demo testimonials - you can replace these later
  const testimonialData = [
    {
      id: 1,
      name: "Jay Makwana",
      position: "Founder of Bandlr",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      text: "Working with Vinayakan on our mobile app was a game-changer for our startup. His expertise in React Native helped us launch on both Android and iOS platforms simultaneously. The app's performance and user experience have received excellent feedback from our users."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials reveal" id="testimonials">
      <div className="container">
        <motion.div 
          className="info"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="title">Testimonials</h1>
          <p>What clients and collaborators say about working with me.</p>
        </motion.div>
        
        <div className="testimonial-slider">
          <button 
            className="slider-arrow prev" 
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          
          <motion.div 
            className="testimonial-card"
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="quote-icon start">
              <FaQuoteLeft />
            </div>
            
            <p className="testimonial-text">{testimonialData[currentIndex].text}</p>
            
            <div className="quote-icon end">
              <FaQuoteRight />
            </div>
            
            <div className="testimonial-author">
              <img 
                src={testimonialData[currentIndex].image} 
                alt={testimonialData[currentIndex].name} 
                className="author-image"
              />
              <div className="author-info">
                <h3>{testimonialData[currentIndex].name}</h3>
                <p>{testimonialData[currentIndex].position}</p>
              </div>
            </div>
          </motion.div>
          
          <button 
            className="slider-arrow next" 
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>
        
        <div className="testimonial-dots">
          {testimonialData.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;