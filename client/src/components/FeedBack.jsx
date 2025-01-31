import React, { useState } from 'react';

const Feedback = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleFeedbackChange = (e) => setFeedback(e.target.value);
  const handleRatingChange = (e) => setRating(parseInt(e.target.value));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, feedback, rating });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Share Your Feedback</h2>

        {submitted ? (
          <div className="text-center text-green-600 font-semibold text-lg">
            <p>Thank you for your feedback, {name}!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="p-4 bg-green-100 rounded-lg flex flex-col">
              <label className="font-medium text-gray-800 mb-1">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
                className="p-2 rounded-md border border-gray-400 focus:ring focus:ring-green-300 w-full text-gray-900"
              />
            </div>

            <div className="p-4 bg-green-100 rounded-lg flex flex-col">
              <label className="font-medium text-gray-800 mb-1">Rating</label>
              <select
                value={rating}
                onChange={handleRatingChange}
                className="p-2 rounded-md border border-gray-400 focus:ring focus:ring-green-300 w-full text-gray-900"
              >
                <option value={1}>1 - Poor</option>
                <option value={2}>2 - Fair</option>
                <option value={3}>3 - Good</option>
                <option value={4}>4 - Very Good</option>
                <option value={5}>5 - Excellent</option>
              </select>
            </div>

            <div className="p-4 bg-green-100 rounded-lg flex flex-col">
              <label className="font-medium text-gray-800 mb-1">Your Feedback</label>
              <textarea
                value={feedback}
                onChange={handleFeedbackChange}
                placeholder="Share your thoughts here..."
                className="p-2 rounded-md border border-gray-400 focus:ring focus:ring-green-300 w-full text-gray-900 h-24 resize-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition duration-200 text-lg font-semibold"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Feedback;