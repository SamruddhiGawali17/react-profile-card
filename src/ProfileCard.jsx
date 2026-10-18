import React from 'react';

function ProfileCard({ name, image, description }) {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      borderRadius: '12px', 
      width: '260px', 
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif',
      margin: '20px auto',
      backgroundColor: '#ffffff'
    }}>
      <img 
        src={image} 
        alt={name} 
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} 
      />
      <h2 style={{ color: '#333', margin: '10px 0' }}>{name}</h2>
      <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.4' }}>{description}</p>
    </div>
  );
}

export default ProfileCard;
