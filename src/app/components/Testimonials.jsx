
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'High School Senior',
    school: 'Lincoln High School',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
    text: "LearnLab completely transformed how I understand chemistry. The 3D molecular models made complex reactions so much clearer. I went from struggling with organic chemistry to acing my AP exam!"
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Junior Student',
    school: 'Roosevelt Academy',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
    text: "The physics simulations are incredible! Being able to manipulate variables and see real-time results helped me grasp concepts like wave interference and electromagnetic fields that I never understood before."
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Sophomore',
    school: 'Washington Prep',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    rating: 5,
    text: "Math was always my weakest subject until I found LearnLab. The step-by-step visualizations and interactive problem solving made calculus actually enjoyable. My grades improved dramatically!"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-textPrimary mb-4">
            What Students Say
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Join thousands of students who have transformed their learning experience 
            and achieved academic success with LearnLab.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-primary p-3 rounded-full">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-warning fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-textSecondary mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Student Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-textPrimary">{testimonial.name}</h4>
                  <p className="text-sm text-textSecondary">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.school}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-background rounded-3xl shadow-lg p-8 lg:p-12 border border-surface">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50,000+</div>
              <p className="text-textSecondary">Active Students</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">95%</div>
              <p className="text-textSecondary">Success Rate</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-info mb-2">4.9/5</div>
              <p className="text-textSecondary">Student Rating</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-warning mb-2">1M+</div>
              <p className="text-textSecondary">Lessons Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;