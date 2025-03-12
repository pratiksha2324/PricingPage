import React, { useState } from "react";
import ReviewCard from "./ReviewCard";

const initialReviews = [
  {
    name: "Michael Stevens",
    title: "Freelancer & Caffeine Addict",
    text: "This coffee has transformed my mornings. The smooth taste and perfect balance of acidity give me the energy boost I need to tackle my projects. I appreciate the sustainable sourcing, too! It's a win-win.",
  },
  {
    name: "Ava Martinez",
    title: "Student & Coffee Aficionado",
    text: "This coffee has been a game-changer for my study sessions! The flavor is rich, and it keeps me focused and alert. Plus, the packaging is so stylish that it looks great on my desk!",
  },
  {
    name: "Sophia Chen",
    title: "Barista & Coffee Expert",
    text: "As a barista, I am quite picky about my coffee. This blend exceeded my expectations with its complex flavor profile and delightful finish. I serve it at my café, and customers rave about it!",
  },
];

const morePositiveReviews = [
  {
    name: "Liam Watson",
    title: "Coffee Blogger",
    text: "Absolutely love the aroma and the richness of this blend. It’s a treat every morning!",
  },
  {
    name: "Emma Brooks",
    title: "Graphic Designer",
    text: "This coffee keeps me energized during long hours of work. The packaging is lovely too!",
  },
];

const moreNegativeReviews = [
  {
    name: "Noah Taylor",
    title: "Student",
    text: "The flavor was too strong for my taste. I prefer a milder roast.",
  },
  {
    name: "Olivia Green",
    title: "Office Worker",
    text: "Not my favorite. It had a bit of bitterness I didn’t enjoy.",
  },
];

const ReviewSection = () => {
  const [showAllPositive, setShowAllPositive] = useState(false);
  const [showAllNegative, setShowAllNegative] = useState(false);

  const [highlightedPositiveIndex, setHighlightedPositiveIndex] = useState(null);
  const [highlightedNegativeIndex, setHighlightedNegativeIndex] = useState(null);

  const positiveReviews = showAllPositive
    ? [...initialReviews, ...morePositiveReviews]
    : initialReviews;

  const negativeReviews = showAllNegative
    ? [...initialReviews, ...moreNegativeReviews]
    : initialReviews;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Positive Reviews */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">Positive Reviews</h2>
          {positiveReviews.map((review, index) => (
            <div key={index} onClick={() => setHighlightedPositiveIndex(index)}>
              <ReviewCard
                review={review}
                highlight={highlightedPositiveIndex === index}
              />
            </div>
          ))}
          {!showAllPositive && (
            <p
              className="text-blue-600 font-medium text-sm text-center mt-2 cursor-pointer"
              onClick={() => setShowAllPositive(true)}
            >
              View all positive reviews &gt;
            </p>
          )}
        </div>

        {/* Negative Reviews */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">Negative Reviews</h2>
          {negativeReviews.map((review, index) => (
            <div key={index} onClick={() => setHighlightedNegativeIndex(index)}>
              <ReviewCard
                review={review}
                highlight={highlightedNegativeIndex === index}
              />
            </div>
          ))}
          {!showAllNegative && (
            <p
              className="text-blue-600 font-medium text-sm text-center mt-2 cursor-pointer"
              onClick={() => setShowAllNegative(true)}
            >
              View all negative reviews &gt;
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
