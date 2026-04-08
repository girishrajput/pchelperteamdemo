// Define the structure of a review
interface Review {
  id: number;
  name: string;
  date: string;
  rating: number; // 1 to 5
  comment: string;
  imageUrl?: string;
  reviewUrl?: string;
}

// Example usage: You can pass this data from a parent component or API
const reviews: Review[] = [
  {
    id: 1,
    name: "Alice Johnson",
    date: "2 years ago",
    rating: 5,
    comment: "I've had a problem with my Mac that I've literally been trying to fix for years. They were able to fit me in same day!",
    imageUrl: "/images/user1.jpg",
    reviewUrl: "#",
  },
  {
    id: 2,
    name: "Bob Smith",
    date: "6 months ago",
    rating: 4,
    comment: "Quick and efficient service. Highly recommend for all your PC needs.",
    imageUrl: "/images/user2.jpg",
    reviewUrl: "#",
  },
  {
    id: 3,
    name: "Charlie Davis",
    date: "1 year ago",
    rating: 5,
    comment: "Professional and friendly staff. Fixed my laptop in no time.",
    imageUrl: "/images/user3.jpg",
    reviewUrl: "#",
  },
];

// Component accepts reviews as a prop
const GoogleReview = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white p-6 rounded-lg relative shadow-sm border border-gray-300">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={review.imageUrl || "/images/placeholder.jpg"}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold">{review.name}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
            </div>
            <div className="text-blue-600 text-lg font-bold">
              <img src="/images/g-icon.svg" alt="Google Review" width="20" />
            </div>
          </div>
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                fill={i < review.rating ? "#3b82f6" : "none"}
                className="w-3 h-3"
              />
            ))}
          </div>
          <p className="text-sm text-gray-700 line-clamp-4">{review.comment}</p>
          <button
            className="text-xs text-gray-400 mt-4 hover:underline"
            onClick={() => window.open(review.reviewUrl, "_blank")}
            aria-label="Read full review"
          >
            Read more
          </button>
        </div>
      ))}
    </div>
  );
};

export default GoogleReview;