
import { Calculator, Atom, FlaskConical, Dna, Clock, Users, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Advanced Mathematics',
    description: 'Master calculus, algebra, and statistics with interactive problem-solving tools and step-by-step visualizations.',
    icon: Calculator,
    color: 'bg-info',
    lightColor: 'bg-info/10',
    borderColor: 'border-info/30',
    students: '12.5K',
    rating: 4.9,
    duration: '6 months',
    topics: ['Calculus', 'Algebra', 'Statistics', 'Geometry'],
    features: ['3D Graphing Tools', 'Step-by-step Solutions', 'Practice Problems']
  },
  {
    id: 2,
    title: 'Physics Fundamentals',
    description: 'Explore mechanics, thermodynamics, and electromagnetism through immersive simulations and experiments.',
    icon: Atom,
    color: 'bg-secondary',
    lightColor: 'bg-secondary/10',
    borderColor: 'border-secondary/30',
    students: '9.8K',
    rating: 4.8,
    duration: '5 months',
    topics: ['Mechanics', 'Thermodynamics', 'Waves', 'Electromagnetism'],
    features: ['Physics Simulations', 'Virtual Lab', 'Real-world Applications']
  },
  {
    id: 3,
    title: 'Chemistry Mastery',
    description: 'Understand molecular structures, reactions, and chemical processes with 3D models and virtual experiments.',
    icon: FlaskConical,
    color: 'bg-success',
    lightColor: 'bg-success/10',
    borderColor: 'border-success/30',
    students: '8.2K',
    rating: 4.9,
    duration: '4 months',
    topics: ['Organic Chemistry', 'Inorganic Chemistry', 'Physical Chemistry', 'Biochemistry'],
    features: ['3D Molecular Models', 'Virtual Experiments', 'Reaction Animations']
  },
  {
    id: 4,
    title: 'Biology Exploration',
    description: 'Dive into cellular biology, genetics, and ecology with interactive diagrams and virtual dissections.',
    icon: Dna,
    color: 'bg-primary',
    lightColor: 'bg-primary/10',
    borderColor: 'border-primary/30',
    students: '11.3K',
    rating: 4.8,
    duration: '5 months',
    topics: ['Cell Biology', 'Genetics', 'Evolution', 'Ecology'],
    features: ['Virtual Microscopy', 'DNA Sequencing', 'Ecosystem Simulations']
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-textPrimary mb-4">
            Interactive Science Courses
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Master high school sciences through hands-on learning with cutting-edge simulations, 
            visualizations, and interactive content designed by education experts.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <div
                key={course.id}
                className={`bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 ${course.borderColor} hover:scale-105`}
              >
                {/* Course Header */}
                <div className={`${course.lightColor} p-6 border-b ${course.borderColor}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${course.color} p-3 rounded-xl`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-textSecondary">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-warning" />
                        {course.rating}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {course.duration} • {course.topics.length} Modules
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-textPrimary mb-2">{course.title}</h3>
                  <p className="text-textSecondary mb-4">{course.description}</p>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  {/* Topics */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-textPrimary mb-3">What You'll Learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm rounded-full bg-surface text-textPrimary"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-medium text-textPrimary">Key Features:</h4>
                    <ul className="space-y-2 text-sm text-textSecondary">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-textSecondary">
                          <div className={`w-2 h-2 ${course.color} rounded-full mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <button className={`w-full ${course.color} text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity`}>
                    Start Learning
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Can't decide? Try our learning path quiz!</p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
            Find My Perfect Course
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;