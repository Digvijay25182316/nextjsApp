// pages/profile.tsx
import React from 'react';
import ProfileEdit from '@/components/ProfileEdit';

const User = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '1234 Main St, City, Country',
    avatar: 'https://example.com/avatar.jpg', // Replace with the actual avatar URL
    // Add more fields as needed
  };
  

const Profile: React.FC = () => {
  return <ProfileEdit/>;
};

export default Profile;
