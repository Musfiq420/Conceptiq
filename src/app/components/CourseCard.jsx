import { Star, Bookmark, Clock, Users } from 'lucide-react';

const CourseCard = ({ course, onBookmarkToggle }) => {
  const getPriceRange = (price) => {
    if (price === 0) return 'Free';
    if (price < 1000) return `৳${price}`;
    return `৳${(price / 1000).toFixed(1)}k`;
  };

  const getDurationText = (weeks) => {
    if (weeks < 4) return `${weeks} ${weeks === 1 ? 'week' : 'weeks'}`;
    const months = Math.ceil(weeks / 4);
    return `${months} ${months === 1 ? 'month' : 'months'}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Course Thumbnail */}
      <div className="relative h-40 bg-gray-100">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => onBookmarkToggle(course.id)}
          className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label={course.isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
        >
          <Bookmark 
            className={`w-5 h-5 ${course.isBookmarked ? 'fill-primary text-primary' : 'text-gray-400'}`} 
          />
        </button>
        {course.featured && (
          <div className="absolute top-3 left-3 bg-accent text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </div>
          
        )}
      </div>

      {/* Course Info */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <span className="px-3 py-1 bg-secondary/30 text-textSecondary/80 text-xs font-medium rounded-full">
            {course.category}
          </span>
          <span className="text-sm font-medium text-gray-900">
            {getPriceRange(course.price)}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 h-14">
          {course.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-10">
          {course.description}
        </p>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{getDurationText(course.duration)}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
              <span>{course.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
