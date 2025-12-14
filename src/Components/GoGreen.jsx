import React from 'react';

function GoGreen() {
  const features = [
    {
      icon: '🌿',
      title: 'No Extra Packaging',
      description: 'Minimal packaging for a cleaner environment'
    },
    {
      icon: '♻️',
      title: 'Recycled Container Discount',
      description: 'Get rewards for bringing your own containers'
    },
    {
      icon: '📦',
      title: 'Bulk Order Discounts',
      description: 'Save more when you order in bulk quantities'
    },
    {
      icon: '📉',
      title: 'Waste Saved Tracker',
      description: 'Track your environmental impact (Coming Soon)'
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8f9fa',
      padding: '50px 10px'
    }}>
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
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: '#2c3e50',
            fontFamily: 'Georgia, serif'
          }}>
            Go Green
          </h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#555',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Discover what sets us apart as the campus's most trusted source for sustainable and eco-friendly practices.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '30px',
          marginBottom: '40px'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#faf8f3',
                border: '2px solid #e8e4d9',
                borderRadius: '16px',
                padding: '40px 30px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
                e.currentTarget.style.borderColor = '#28a745';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
                e.currentTarget.style.borderColor = '#e8e4d9';
              }}
            >
              {/* Icon Circle */}
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#d4c5a9',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                fontSize: '2.5rem'
              }}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 'bold',
                color: '#2c3e50',
                marginBottom: '12px',
                fontFamily: 'Arial, sans-serif'
              }}>
                {feature.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.95rem',
                color: '#666',
                lineHeight: '1.5',
                margin: 0
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div style={{
          textAlign: 'center',
          marginTop: '50px'
        }}>
          <p style={{
            fontSize: '1.1rem',
            color: '#28a745',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            <span>Help us build a greener campus</span>
            <span style={{ fontSize: '1.5rem' }}>🌍</span>
          </p>
        </div>
      </div>


    </div>
  );
}

export default GoGreen;