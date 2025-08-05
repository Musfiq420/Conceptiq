"use client"

import { useState, useEffect } from 'react';
import { Search, X, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { 
  categories, 
  difficultyLevels, 
  durationFilters, 
  priceFilters, 
  languageFilters, 
  sortOptions,

  Course
} from '../data/courseCategories';
import CourseCard from './CourseCard';

// Mock data generator - replace with actual API call
const generateMockCourses = () => {
  const mockCourses = [];
  const courseTitles = [
    'Introduction to Web Development', 'Advanced JavaScript Patterns', 
    'Data Science Fundamentals', 'Machine Learning with Python',
    'Digital Marketing Masterclass', 'UI/UX Design Principles',
    'Business Communication Skills', 'Project Management Professional',
    'Financial Planning 101', 'Creative Writing Workshop'
  ];
  
  const instructors = [
    'Dr. Sarah Johnson', 'Prof. Michael Chen', 'Dr. Ayesha Rahman',
    'John Smith', 'Maria Garcia', 'David Kim', 'Fatima Ahmed', 'Alex Wong'
  ];

  categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      const title = `${category.name}: ${courseTitles[Math.floor(Math.random() * courseTitles.length)]}`;
      const priceTiers = [0, 1999, 4999, 9999];
      const price = priceTiers[Math.floor(Math.random() * priceTiers.length)];
      
      mockCourses.push({
        id: `course-${mockCourses.length + 1}`,
        title,
        description: `Comprehensive course covering all aspects of ${subcategory.toLowerCase()}. Learn from industry experts with hands-on projects.`,
        category: category.name,
        subcategory,
        difficulty: difficultyLevels[Math.floor(Math.random() * difficultyLevels.length)],
        duration: Math.floor(Math.random() * 16) + 4, // 4-20 weeks
        price,
        language: languageFilters[Math.floor(Math.random() * languageFilters.length)].label,
        rating: 3.5 + Math.random() * 1.5, // 3.5-5.0
        students: Math.floor(Math.random() * 10000) + 100,
        thumbnail: `https://picsum.photos/seed/${encodeURIComponent(title)}/400/225`,
        instructor: instructors[Math.floor(Math.random() * instructors.length)],
        featured: Math.random() > 0.7,
        isBookmarked: false
      });
    });
  });

  return mockCourses;
};

const CourseSelection = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [sortBy, setSortBy] = useState('popularity');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    difficulty: true,
    duration: true,
    price: true,
    language: true
  });

  // Load courses on component mount
  useEffect(() => {
    // In a real app, this would be an API call
    const mockCourses = generateMockCourses();
    setCourses(mockCourses);
    setFilteredCourses(mockCourses);
  }, []);

  // Apply filters and search
  useEffect(() => {
    let result = [...courses];

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(course => 
        course.title.toLowerCase().includes(query) || 
        course.description.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (selectedCategory) {
      result = result.filter(course => 
        course.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Apply subcategory filter
    if (selectedSubcategories.length > 0) {
      result = result.filter(course => 
        selectedSubcategories.includes(course.subcategory)
      );
    }

    // Apply difficulty filter
    if (selectedDifficulties.length > 0) {
      result = result.filter(course => 
        selectedDifficulties.includes(course.difficulty)
      );
    }

    // Apply duration filter
    if (selectedDurations.length > 0) {
      result = result.filter(course => {
        const weeks = course.duration;
        return selectedDurations.some(duration => {
          if (duration === 'short') return weeks <= 4;
          if (duration === 'medium') return weeks > 4 && weeks <= 12;
          if (duration === 'long') return weeks > 12;
          return true;
        });
      });
    }

    // Apply price filter
    if (selectedPrices.length > 0) {
      result = result.filter(course => {
        return selectedPrices.some(price => {
          if (price === 'free') return course.price === 0;
          if (price === 'low') return course.price > 0 && course.price < 3000;
          if (price === 'medium') return course.price >= 3000 && course.price < 8000;
          if (price === 'high') return course.price >= 8000;
          return true;
        });
      });
    }

    // Apply language filter
    if (selectedLanguages.length > 0) {
      result = result.filter(course => 
        selectedLanguages.includes(course.language)
      );
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.students - a.students; // Using students as a proxy for newness in mock data
        case 'rating':
          return b.rating - a.rating;
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'popularity':
        default:
          return b.students - a.students;
      }
    });

    setFilteredCourses(result);
  }, [
    courses, 
    searchQuery, 
    selectedCategory, 
    selectedSubcategories, 
    selectedDifficulties, 
    selectedDurations, 
    selectedPrices, 
    selectedLanguages, 
    sortBy
  ]);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleSubcategory = (subcategory) => {
    setSelectedSubcategories(prev =>
      prev.includes(subcategory)
        ? prev.filter(item => item !== subcategory)
        : [...prev, subcategory]
    );
  };

  const toggleFilter = (
    value, 
    _selectedValues, 
    setSelectedValues
  ) => {
    setSelectedValues(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategory(null);
    setSelectedSubcategories([]);
    setSelectedDifficulties([]);
    setSelectedDurations([]);
    setSelectedPrices([]);
    setSelectedLanguages([]);
    setSearchQuery('');
  };

  const toggleBookmark = (courseId) => {
    setCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === courseId
          ? { ...course, isBookmarked: !course.isBookmarked }
          : course
      )
    );
  };

  const selectedCategoryData = categories.find(cat => 
    cat.name.toLowerCase() === selectedCategory?.toLowerCase()
  );

  const activeFilterCount = [
    selectedCategory ? 1 : 0,
    selectedSubcategories.length,
    selectedDifficulties.length,
    selectedDurations.length,
    selectedPrices.length,
    selectedLanguages.length
  ].reduce((sum, count) => sum + count, 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Find Your Perfect Course</h1>
          <p className="mt-2 text-gray-600">Browse our extensive catalog of courses to enhance your skills and knowledge.</p>
          
          {/* Search Bar */}
          <div className="mt-6 relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-primary focus:border-primary text-base"
              placeholder="Search courses, instructors, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            {/* Mobile filter toggle */}
            <div className="lg:hidden mb-4">
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              >
                <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
                <Filter className="h-4 w-4 text-gray-500" />
              </button>
            </div>

            <div className={`${isMobileFiltersOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  {activeFilterCount > 0 && (
                    <button
                      type="button"
                      onClick={clearAllFilters}
                      className="text-sm font-medium text-primary hover:text-primary/80"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {/* Category Filter */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <button
                    type="button"
                    className="flex justify-between items-center w-full text-left py-2 font-medium text-gray-900"
                    onClick={() => toggleSection('categories')}
                  >
                    <span>Category</span>
                    {expandedSections.categories ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  
                  {expandedSections.categories && (
                    <div className="mt-2 space-y-2">
                      {categories.map((category) => (
                        <div key={category.id} className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id={`category-${category.id}`}
                              name="category"
                              type="radio"
                              className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                              checked={selectedCategory === category.name}
                              onChange={() => setSelectedCategory(category.name)}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor={`category-${category.id}`} className="text-gray-700">
                              {category.name}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Subcategory Filter (only shown when a category is selected) */}
                {selectedCategory && selectedCategoryData && (
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <button
                      type="button"
                      className="flex justify-between items-center w-full text-left py-2 font-medium text-gray-900"
                      onClick={() => toggleSection('subcategories')}
                    >
                      <span>Subcategories</span>
                      {expandedSections.subcategories ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                    
                    {expandedSections.subcategories && (
                      <div className="mt-2 space-y-2 max-h-60 overflow-y-auto">
                        {selectedCategoryData.subcategories.map((subcategory) => (
                          <div key={subcategory} className="relative flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id={`subcategory-${subcategory}`}
                                name="subcategory"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                checked={selectedSubcategories.includes(subcategory)}
                                onChange={() => toggleSubcategory(subcategory)}
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor={`subcategory-${subcategory}`} className="text-gray-700">
                                {subcategory}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Difficulty Filter */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <button
                    type="button"
                    className="flex justify-between items-center w-full text-left py-2 font-medium text-gray-900"
                    onClick={() => toggleSection('difficulty')}
                  >
                    <span>Difficulty Level</span>
                    {expandedSections.difficulty ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  
                  {expandedSections.difficulty && (
                    <div className="mt-2 space-y-2">
                      {difficultyLevels.map((level) => (
                        <div key={level} className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id={`difficulty-${level}`}
                              name="difficulty"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              checked={selectedDifficulties.includes(level)}
                              onChange={() => 
                                toggleFilter(level, selectedDifficulties, setSelectedDifficulties)
                              }
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor={`difficulty-${level}`} className="text-gray-700">
                              {level}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Duration Filter */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <button
                    type="button"
                    className="flex justify-between items-center w-full text-left py-2 font-medium text-gray-900"
                    onClick={() => toggleSection('duration')}
                  >
                    <span>Duration</span>
                    {expandedSections.duration ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  
                  {expandedSections.duration && (
                    <div className="mt-2 space-y-2">
                      {durationFilters.map((filter) => (
                        <div key={filter.value} className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id={`duration-${filter.value}`}
                              name="duration"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              checked={selectedDurations.includes(filter.value)}
                              onChange={() => 
                                toggleFilter(filter.value, selectedDurations, setSelectedDurations)
                              }
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor={`duration-${filter.value}`} className="text-gray-700">
                              {filter.label}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Filter */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <button
                    type="button"
                    className="flex justify-between items-center w-full text-left py-2 font-medium text-gray-900"
                    onClick={() => toggleSection('price')}
                  >
                    <span>Price</span>
                    {expandedSections.price ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  
                  {expandedSections.price && (
                    <div className="mt-2 space-y-2">
                      {priceFilters.map((filter) => (
                        <div key={filter.value} className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id={`price-${filter.value}`}
                              name="price"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              checked={selectedPrices.includes(filter.value)}
                              onChange={() => 
                                toggleFilter(filter.value, selectedPrices, setSelectedPrices)
                              }
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor={`price-${filter.value}`} className="text-gray-700">
                              {filter.label}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Language Filter */}
                <div className="pb-4">
                  <button
                    type="button"
                    className="flex justify-between items-center w-full text-left py-2 font-medium text-gray-900"
                    onClick={() => toggleSection('language')}
                  >
                    <span>Language</span>
                    {expandedSections.language ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  
                  {expandedSections.language && (
                    <div className="mt-2 space-y-2">
                      {languageFilters.map((filter) => (
                        <div key={filter.value} className="relative flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id={`language-${filter.value}`}
                              name="language"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                              checked={selectedLanguages.includes(filter.label)}
                              onChange={() => 
                                toggleFilter(
                                  filter.label, 
                                  selectedLanguages, 
                                  setSelectedLanguages
                                )
                              }
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor={`language-${filter.value}`} className="text-gray-700">
                              {filter.label}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Filters Summary */}
            {(selectedCategory || 
              selectedSubcategories.length > 0 || 
              selectedDifficulties.length > 0 ||
              selectedDurations.length > 0 ||
              selectedPrices.length > 0 ||
              selectedLanguages.length > 0) && (
              <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {selectedCategory && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      {selectedCategory}
                      <button 
                        type="button" 
                        className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full bg-primary/20 hover:bg-primary/30"
                        onClick={() => setSelectedCategory(null)}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                  
                  {selectedSubcategories.map(subcategory => (
                    <span key={subcategory} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      {subcategory}
                      <button 
                        type="button" 
                        className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full bg-blue-200 hover:bg-blue-300"
                        onClick={() => toggleSubcategory(subcategory)}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  
                  {selectedDifficulties.map(level => (
                    <span key={level} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {level}
                      <button 
                        type="button" 
                        className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full bg-green-200 hover:bg-green-300"
                        onClick={() => 
                          toggleFilter(level, selectedDifficulties, setSelectedDifficulties)
                        }
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  
                  {selectedDurations.map(duration => {
                    const label = durationFilters.find(f => f.value === duration)?.label || duration;
                    return (
                      <span key={duration} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        {label}
                        <button 
                          type="button" 
                          className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full bg-yellow-200 hover:bg-yellow-300"
                          onClick={() => 
                            toggleFilter(duration, selectedDurations, setSelectedDurations)
                          }
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    );
                  })}
                  
                  {selectedPrices.map(price => {
                    const label = priceFilters.find(f => f.value === price)?.label || price;
                    return (
                      <span key={price} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                        {label}
                        <button 
                          type="button" 
                          className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full bg-purple-200 hover:bg-purple-300"
                          onClick={() => 
                            toggleFilter(price, selectedPrices, setSelectedPrices)
                          }
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    );
                  })}
                  
                  {selectedLanguages.map(language => (
                    <span key={language} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                      {language}
                      <button 
                        type="button" 
                        className="ml-1.5 inline-flex items-center justify-center h-4 w-4 rounded-full bg-pink-200 hover:bg-pink-300"
                        onClick={() => 
                          toggleFilter(language, selectedLanguages, setSelectedLanguages)
                        }
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="ml-2 text-sm font-medium text-primary hover:text-primary/80"
                  >
                    Clear all
                  </button>
                </div>
              </div>
            )}

            {/* Sort and Results Count */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <p className="text-sm text-gray-700 mb-2 sm:mb-0">
                Showing <span className="font-medium">{filteredCourses.length}</span> courses
                {searchQuery && ` for "${searchQuery}"`}
              </p>
              
              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-sm font-medium text-gray-700">
                  Sort by:
                </label>
                <select
                  id="sort"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Courses Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onBookmarkToggle={toggleBookmark}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No courses found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search or filter criteria to find what you're looking for.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSelection;
