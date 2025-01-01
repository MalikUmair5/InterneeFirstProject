import React from 'react';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
                <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">About Us</h1>
                <p className="text-gray-600 mb-4">
                    Welcome to our website! We are dedicated to providing the best service possible. Our team is passionate and committed to excellence.
                </p>
                <p className="text-gray-600 mb-4">
                    Our mission is to deliver high-quality products that bring value to our customers. We believe in innovation, integrity, and customer satisfaction.
                </p>
                <p className="text-gray-600">
                    Thank you for visiting our site. We hope you find what you are looking for and enjoy your experience with us.
                </p>
            </div>
        </div>
    );
};

export default About;