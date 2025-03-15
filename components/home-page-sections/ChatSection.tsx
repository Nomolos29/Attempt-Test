import React from 'react';
import { FaUser, FaComment, FaSmile } from 'react-icons/fa';

const ChatSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-sm max-w-2xl w-full p-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="bg-blue-600 p-3 rounded-full">
            <FaUser className="text-white text-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">What is the best way to bulk up even with my condition?</h1>
            <p className="text-gray-600 mt-1">Hi Bryn, it is absolutely possible to talk up one with hyperemotion...</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="space-y-6">
          {/* Message 1 */}
          <div className="flex items-start space-x-4">
            <div className="bg-green-500 p-3 rounded-full">
              <FaComment className="text-white text-xl" />
            </div>
            <div className="flex-1">
              <p className="text-gray-800 text-lg leading-relaxed">
                I tested the your common and quick signage that you’re limited to maintenance. If you’ll be in Dft house
                today, we’ll need a widget to buy new good vehicles. If you agree, we could not deliver
                high-price most options and resistance-based vehicular sales results your condition is
                indicated today.
              </p>
            </div>
          </div>

          {/* Message 2 */}
          <div className="flex items-start space-x-4">
            <div className="bg-purple-500 p-3 rounded-full">
              <FaSmile className="text-white text-xl" />
            </div>
            <div className="flex-1">
              <p className="text-gray-800 text-lg leading-relaxed">
                How about your serious decision when one of our in-house model
                users’ hygiene, you can display a cigarette into your skin, vitamins, and salt water for your goal.
              </p>
            </div>
          </div>
        </div>

        {/* Follow-up Question */}
        <div className="mt-8">
          <p className="text-gray-600 text-lg">As is a follow-up question...</p>
        </div>

        {/* Footer */}
        <div className="mt-10 bg-blue-50 p-6 rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <FaUser className="text-white text-xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Al Chat</h2>
              <p className="text-gray-600">Asabe is Smart, adaptive, always learning, and your best friend.</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;