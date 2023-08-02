import React from 'react';
import ProfileView from '@/components/Profile';

const UserProfilePage: React.FC = () => {

  const user= {
    name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main Street",
    phoneNumber: "555-123-4567",
    avatar: "https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=600",
    orderHistory: [
      { orderId: "order1", orderDate: new Date("2023-06-15") },
      { orderId: "order2", orderDate: new Date("2023-07-02") },
      { orderId: "order3", orderDate: new Date("2023-07-25") },
    ],
    paymentHistory: [
      { paymentId: "payment1", paymentDate: new Date("2023-06-15") },
      { paymentId: "payment2", paymentDate: new Date("2023-07-02") },
      { paymentId: "payment3", paymentDate: new Date("2023-07-25") },
    ],
    createdAt: "2023-01-01",
  };

  return (
    <div className="container w-full">
      <h1 className="text-3xl font-bold m-6 text-center w-[100vw]">User Profile</h1>
      <ProfileView user={user}/>
    </div>
  );
};

export default UserProfilePage;
