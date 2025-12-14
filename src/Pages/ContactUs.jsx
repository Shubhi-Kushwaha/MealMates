import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.message) {
      console.log('Form submitted:', formData);
      alert('Thank you for contacting us! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div>
      {/* Hero Section with Background Image */}
      <div style={{
        position: 'relative',
        height: '300px',
        backgroundImage:  `url('https://static.vecteezy.com/system/resources/thumbnails/037/236/624/small/ai-generated-beautuful-fast-food-background-with-copy-space-free-photo.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}></div>
        
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <p style={{
            fontSize: '0.9rem',
            letterSpacing: '2px',
            marginBottom: '10px',
            textTransform: 'uppercase'
          }}>
            FOR MEALMATES STORE INQUIRIES
          </p>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 'bold',
            margin: 0
          }}>
            CONTACT US
          </h1>
        </div>
      </div>

      {/* Contact Info Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '60px auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Hours of Operation */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              HOURS OF OPERATION
            </h3>
            <p style={{
              color: '#666',
              fontSize: '0.95rem',
              margin: 0
            }}>
              9:00 to 17:00, Mon-Fri (Excluding Holidays)
            </p>
          </div>

          {/* Phone */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              PHONE
            </h3>
            <a href="tel:+919151257425" style={{
              color: '#666',
              fontSize: '0.95rem',
              textDecoration: 'none'
            }}>
              +91 9151257425
            </a>
          </div>

          {/* General Inquiries */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '15px',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              GENERAL INQUIRIES
            </h3>
            <a href="mailto:kushwahashubhi25@gmail.com" style={{
              color: '#666',
              fontSize: '0.95rem',
              textDecoration: 'none'
            }}>
              kushwahashubhi25@gmail.com
            </a>
          </div>
        </div>

        {/* Customer Service Message */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <p style={{
            fontSize: '1.1rem',
            color: '#333',
            marginBottom: '10px',
            fontWeight: '500'
          }}>
            Our customer service team is waiting to assist you
          </p>
          <p style={{
            fontSize: '0.95rem',
            color: '#666',
            marginBottom: '5px'
          }}>
            Please allow up to 2-Business days response time in order for us to fully address your inquiries.
          </p>
          <p style={{
            fontSize: '0.95rem',
            color: '#666'
          }}>
            You can also check your order status through our website.
          </p>
        </div>

        {/* Contact Form */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: '#f8f9fa',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0.5,0.5)'
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            CONTACT FORM
          </h2>
          <p style={{
            color: '#666',
            fontSize: '0.9rem',
            marginBottom: '30px'
          }}>
            Please fill out all fields
          </p>

          <div>
            {/* Name */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Phone */}
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Message */}
            <div style={{ marginBottom: '25px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                fontSize: '0.95rem'
              }}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                  resize: 'vertical'
                }}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              style={{
                backgroundColor: '#333',
                color: 'white',
                padding: '14px 40px',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;