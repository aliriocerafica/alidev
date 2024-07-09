'use client'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/home.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false); // State to track if message is sent

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs.send(
      'service_04g4vib', // Your EmailJS service ID
      'template_4g87k1n', // Your EmailJS template ID
      {
        to_name: 'Alejandro',
        from_name: formData.name,
        message: formData.message
      },
      'OSA-4KXYSqHWlOiW9' // Replace with your EmailJS user ID
    )
      .then((response) => {
        console.log('Email sent!', response.status, response.text);
        setIsSent(true); // Set isSent to true on successful email send
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Failed to send email. Error:', error);
        alert('Failed to send email. Please try again later.');
      });
  };

  return (
    <div className="flex justify-center mx-auto items-center  w-4/5">
      <div className="w-4/6 mb-10">
        <div className="container p-4 text-white">
          <h1 className="text-3xl gradient-text font-semibold mb-4 text-center">Contact Me</h1>
          <form onSubmit={handleSubmit} className="max-w-full">
            <div className="mb-4 flex flex-wrap">
              <div className="w-full md:w-1/2 md:pr-2">
                <label htmlFor="name" className="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-2">
                <label htmlFor="email" className="block mb-2"> Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border text-black border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-white">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 text-black rounded-md"
                required
              />
            </div>
            {isSent && (
              <p className="text-green-500 mb-4 text-center">Email sent successfully!</p>
            )}
            <div className="text-center">
              <button type="submit" className="border-2 border-[#7484dd] p-2 text-sm rounded-lg mt-2 hover:bg-[#4855a3] hover:text-white hover:border-white w-32">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
