import React from 'react';

const ProfilePage = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <img src="car.jpg" alt="Profile Picture" className="w-24 h-24 rounded-full object-cover mr-4" />
        <div>
          <div className="flex gap-2 mb-1">
            <span className="text-xl font-bold">Pramananda Sarkar</span>
            <span className="text-sm text-gray-500">Client ID: 12827617863</span>
          </div>
          <div className="text-gray-600">
            <span>0j3e8@example.com</span>
            <span className="ml-2">12 Road, Dhaka, Bangladesh</span> {/* Added some spacing */}
          </div>
        </div>
      </div>

      <div className="mb-6"> {/* About Me Section */}
        <h3 className="text-lg font-semibold mb-2">About Me</h3>
        <p className="text-gray-700">
          Write a short and engaging bio here. Mention your skills, experience, and interests.
        </p>
      </div>

      <div className="mb-6"> {/* Contact Information */}
        <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
        <p className="text-gray-700">Phone: (123) 456-7890</p>
        <p className="text-gray-700">
          LinkedIn: <a href="#" className="text-blue-500 hover:underline">linkedin.com/in/yourprofile</a>
        </p>
      </div>


      

    </div>
  );
};

export default ProfilePage;