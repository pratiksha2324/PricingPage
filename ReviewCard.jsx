import React from "react";

const ReviewCard = ({ review, highlight }) => {
  return (
    <div
      className={`p-4 rounded-xl shadow-md mb-4 transition-all duration-300 ${
        highlight ? "bg-green-200 border-2 border-green-500" : "bg-white"
      }`}
    >
      <h3 className="font-semibold text-lg">{review.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{review.title}</p>
      <p className="text-gray-700">{review.text}</p>
    </div>
  );
};

export default ReviewCard;
