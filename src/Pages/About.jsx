import React from 'react';

function About() {
  const features = [
    {
      icon: '👑',
      title: 'Timeless Elegance',
      description: 'Our creations are designed to outlast fleeting trends, embodying a classic charm and sophistication that endures for generations.'
    },
    {
      icon: '🍃',
      title: 'Sustainable Luxury',
      description: 'We believe true luxury honors the earth. Our food is sourced with respect for both people and planet, ensuring ethical practices and sustainability at every step.'
    },
    {
      icon: '🎖️',
      title: 'Uncompromising Quality',
      description: 'Excellence is our standard. Every item is meticulously selected and handled with care, guaranteeing purity, authenticity, and unmatched craftsmanship in every order.'
    }
  ];

  return (
    <div style={{ 
      position: 'relative',
      minHeight: '100vh',
      padding: '80px 20px'
    }}>
      {/* Background Image */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?semt=ais_hybrid&w=740&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        zIndex: -2
      }}></div>
      
      {/* Blackish Transparent Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: -1
      }}></div>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto'
      }}>
        {/* Header Section */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '1px'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 'bold',
            marginBottom: '5px',
            color: '#ffffff',
            fontFamily: 'Georgia, serif',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            MealMates
          </h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#e0e0e0',
            maxWidth: '800px',
            margin: '5 auto',
            lineHeight: '1.8'
          }}>
            Discover what sets us apart as campus's most trusted source for premium quality meals.
          </p>
        </div>

        {/* Main Content */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '30px 30px',
          borderRadius: '12px',
          marginBottom: '10px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{
            fontSize: '1.05rem',
            lineHeight: '1.9',
            color: '#444',
            marginBottom: '10px',
            textAlign: 'justify'
          }}>
            At <strong>MealMates</strong>, we've redefined campus dining by combining tradition and modern convenience to deliver ethically sourced, 100% quality meals of premium taste.
          </p>
          <p style={{
            fontSize: '1.05rem',
            lineHeight: '1.9',
            color: '#444',
            marginBottom: '10px',
            textAlign: 'justify'
          }}>
            The art of creating delicious meals with patience and precision. From premium fresh ingredients to refined preparation techniques, every MealMates creation begins with the finest ethically sourced materials.
          </p>
          
        </div>

        {/* Three Cards Section */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginTop: '30px'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '12px',
                padding: '30px 30px',
                textAlign: 'center',
                boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
              }}
            >
              {/* Decorative circles in background */}
              <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '100px',
                height: '100px',
                backgroundColor: '#faf8f3',
                borderRadius: '50%',
                opacity: 0.5
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '-40px',
                left: '-40px',
                width: '120px',
                height: '120px',
                backgroundColor: '#faf8f3',
                borderRadius: '50%',
                opacity: 0.5
              }}></div>

              {/* Icon */}
              <div style={{
                width: '90px',
                height: '90px',
                backgroundColor: '#c9a961',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                fontSize: '3rem',
                position: 'relative',
                zIndex: 1
              }}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#2c3e50',
                marginBottom: '18px',
                fontFamily: 'Georgia, serif',
                position: 'relative',
                zIndex: 1
              }}>
                {feature.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.95rem',
                color: '#666',
                lineHeight: '1.7',
                margin: 0,
                position: 'relative',
                zIndex: 1
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll to Top Button */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '30px',
            left: '30px',
            width: '50px',
            height: '50px',
            backgroundColor: '#c9a961',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            zIndex: 1000
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.backgroundColor = '#b89550';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = '#c9a961';
          }}
        >
          <span style={{ fontSize: '1.5rem', color: 'white' }}>↑</span>
        </div>
      </div>
    </div>
  );
}

export default About;