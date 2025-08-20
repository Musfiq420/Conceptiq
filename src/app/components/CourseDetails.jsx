"use client"

import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { Star, Clock, Users, BookOpen, Award, ChevronDown, ChevronUp, CheckCircle, PlayCircle } from 'lucide-react';
// import { Course } from '../data/courseCategories';

// Mock data - In a real app, this would come from an API
const mockCourse = {
  id: '1',
  title: 'Advanced React Development',
  description: 'Master React with modern best practices, hooks, and advanced patterns.',
  category: 'Professional Skills',
  subcategory: 'Software Development',
  difficulty: 'Intermediate',
  duration: 8, // weeks
  price: 4999,
  language: 'English',
  rating: 4.8,
  students: 1245,
  thumbnail: `https://picsum.photos/800/450`,
  instructor: 'Sarah Johnson',
  featured: true
};

// Mock curriculum data
const mockCurriculum = [
  {
    id: '1',
    title: 'Getting Started with React',
    duration: 120, // minutes
    completed: true,
    lessons: [
      { id: '1-1', title: 'Introduction to React', duration: 15, completed: true },
      { id: '1-2', title: 'Setting up your environment', duration: 20, completed: true },
      { id: '1-3', title: 'Your first React component', duration: 25, completed: true },
    ]
  },
  {
    id: '2',
    title: 'React Hooks in Depth',
    duration: 180,
    completed: false,
    lessons: [
      { id: '2-1', title: 'useState and useEffect', duration: 30, completed: true },
      { id: '2-2', title: 'useContext and useReducer', duration: 40, completed: true },
      { id: '2-3', title: 'Custom Hooks', duration: 45, completed: false },
      { id: '2-4', title: 'useMemo and useCallback', duration: 35, completed: false },
    ]
  },
  // More chapters...
];

const CourseDetails = () => {
  // useParams();
  const [expandedChapters, setExpandedChapters] = useState(new Set(['1']));
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // In a real app, you would fetch the course data using the courseId
  const course = mockCourse;
  const curriculum = mockCurriculum;
  
  // Calculate progress
  const totalLessons = curriculum.reduce((sum, chapter) => sum + chapter.lessons.length, 0);
  const completedLessons = curriculum.reduce(
    (sum, chapter) => sum + chapter.lessons.filter(lesson => lesson.completed).length, 0
  );
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);
  
  const toggleChapter = (chapterId) => {
    setExpandedChapters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(chapterId)) {
        newSet.delete(chapterId);
      } else {
        newSet.add(chapterId);
      }
      return newSet;
    });
  };

  // Toggle mobile sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside
  const handleClickOutside = (e) => {
    const target = e.target;
    if (isSidebarOpen && !target.closest('.sidebar-content') && !target.closest('.sidebar-toggle')) {
      setIsSidebarOpen(false);
    }
  };

  // Close sidebar on route change
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      setIsSidebarOpen(false);
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pb-16" onClick={handleClickOutside}>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Content */}
          <div className="flex-1">
<div className="flex items-center gap-2 text-sm text-primary mb-2">
              <span>{course.category}</span>
              <span>•</span>
              <span>{course.subcategory}</span>
            </div>

            <h1 className="text-3xl font-bold text-textPrimary mb-4">
              {course.title}
            </h1>

            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full object-cover rounded-lg border border-surface"
            />

            <p className="text-textSecondary mb-4">
              {showFullDescription
                ? course.description + " ".repeat(200)
                : course.description.substring(0, 200) +
                  (course.description.length > 200 ? "..." : "")}
            </p>
            {course.description.length > 200 && (
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-accent hover:underline text-sm font-medium"
              >
                {showFullDescription ? "Show less" : "Show more"}
              </button>
            )}

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-textSecondary mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-secondary fill-current" />
                <span>{course.rating}</span>
                <span className="text-textSecondary/70">
                  ({Math.floor(course.students / 100) / 10}k+)
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-info" />
                <span>{course.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-warning" />
                <span>
                  {course.duration} weeks • {course.duration * 3} hours
                </span>
              </div>
            </div>

            {/* Instructor */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-textPrimary font-medium">
                {course.instructor.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-medium">
                  Created by {course.instructor}
                </p>
                <p className="text-xs text-textSecondary">Senior Instructor</p>
              </div>
            </div>

            {/* What you'll learn */}
            <div className="bg-background rounded-lg shadow-sm p-6 mb-6 border border-surface">
              <div className="mt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-textPrimary mb-2">
                    What you'll learn
                  </h3>
                  <ul className="space-y-2 text-sm text-textSecondary">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>Build modern React applications with hooks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>
                        Master state management with Context API and Redux
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>
                        Optimize performance with useMemo and useCallback
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                      <span>
                        Test your React applications with Jest and RTL
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium text-textPrimary mb-2">
                    This course includes:
                  </h3>
                  <ul className="space-y-2 text-sm text-textSecondary">
                    <li className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4 text-primary" />
                      <span>{totalLessons} hours on-demand video</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-secondary" />
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-info" />
                      <span>10 articles and 5 downloadable resources</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-warning" />
                      <span>Full lifetime access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Curriculum */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Course Content</h2>
              
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">Progress</span>
                  <span>{progressPercentage}% complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {completedLessons} of {totalLessons} lessons ({Math.round(completedLessons / totalLessons * 100)}%)
                </p>
              </div>
              
              {/* Curriculum List */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                {curriculum.map((chapter) => (
                  <div key={chapter.id} className="border-b border-gray-200 last:border-b-0">
                    <button
                      onClick={() => toggleChapter(chapter.id)}
                      className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {expandedChapters.has(chapter.id) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500" />
                        )}
                        <div>
                          <h3 className="font-medium text-gray-900">{chapter.title}</h3>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <span>{chapter.lessons.length} lessons</span>
                            <span>•</span>
                            <span>{Math.floor(chapter.duration / 60)}h {chapter.duration % 60}m</span>
                            {chapter.completed && (
                              <span className="text-green-600 font-medium">Completed</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        {chapter.completed ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <span className="text-xs font-medium text-primary">
                            {Math.round((chapter.lessons.filter(l => l.completed).length / chapter.lessons.length) * 100)}%
                          </span>
                        )}
                      </div>
                    </button>
                    
                    {expandedChapters.has(chapter.id) && (
                      <div className="bg-white">
                        {chapter.lessons.map((lesson) => (
                          <div 
                            key={lesson.id} 
                            className={`flex items-center justify-between p-4 border-t border-gray-100 ${lesson.completed ? 'bg-green-50' : 'hover:bg-gray-50'} transition-colors`}
                          >
                            <div className="flex items-center gap-3">
                              {lesson.completed ? (
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              ) : (
                                <PlayCircle className="w-5 h-5 text-gray-400 flex-shrink-0" />
                              )}
                              <span className={`${lesson.completed ? 'text-gray-700' : 'text-gray-700'} hover:text-primary transition-colors`}>
                                {lesson.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500">{lesson.duration} min</span>
                              {lesson.completed ? (
                                <span className="text-xs text-green-600 font-medium">Watched</span>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right Sidebar - Visible on larger screens */}
          <div className="hidden md:block w-80 flex-shrink-0 sidebar-content">
            <div className="sticky top-24 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="mb-4">
                  <span className="text-2xl font-bold">
                    {course.price > 0 ? `$${course.price}` : 'Free'}
                  </span>
                  {course.price > 0 && (
                    <span className="ml-2 text-sm text-gray-500 line-through">$99.99</span>
                  )}
                </div>
                
                <button className="w-full bg-accent hover:bg-accent/90 text-background font-medium py-3 px-4 rounded-md mb-4 transition-colors">
                  {completedLessons > 0 ? "Continue Learning" : "Enroll Now"}
                </button>
                
                <div className="text-center text-sm text-gray-600 mb-4">
                  {course.price > 0 ? '30-Day Money-Back Guarantee' : 'Full Lifetime Access'}
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Full lifetime access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{totalLessons} lessons ({Math.round(course.duration * 3)} hours)</span>
                  </div>
                </div>
              </div>
              {/* Instructor */}
              <div className="bg-background rounded-lg shadow-sm p-6 border border-surface hover:shadow-md transition-shadow duration-300">
                <h3 className="font-medium text-textPrimary mb-4">Instructor</h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-2xl font-bold text-textPrimary hover:bg-secondary/80 transition-colors cursor-pointer">
                    {course.instructor.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="font-medium text-textPrimary">{course.instructor}</h4>
                    <p className="text-sm text-textSecondary mb-2">Senior Instructor</p>
                    <div className="flex items-center gap-2 text-sm text-textSecondary">
                      <Star className="w-4 h-4 text-secondary fill-current" />
                      <span>{course.rating} Instructor Rating</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-textSecondary">
                      <Users className="w-4 h-4 text-info" />
                      <span>{Math.floor(course.students / 1000)}k+ Students</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-textSecondary">
                      <Award className="w-4 h-4 text-primary" />
                      <span>5 Courses</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Course Details */}
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-medium text-gray-900 mb-4">Course Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Skill Level</p>
                    <p className="font-medium">{course.difficulty}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Language</p>
                    <p className="font-medium">{course.language}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">{course.duration} weeks • {course.duration * 3} hours</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Prerequisites</p>
                    <p className="font-medium">Basic HTML, CSS, and JavaScript knowledge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
