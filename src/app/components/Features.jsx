import React from 'react';
import { Zap, Brain, Target, Gamepad2, BarChart3, Users2 } from 'lucide-react';
import DemoSlider from './DemoSlider';

const features = [
  {
    icon: Zap,
    title: 'Interactive Simulations',
    description: 'Experience physics laws, chemical reactions, and biological processes through realistic 3D simulations.',
    color: 'text-warning',
    bgColor: 'bg-warning/10'
  },
  {
    icon: Brain,
    title: 'Adaptive Learning',
    description: 'AI-powered system adapts to your learning pace and style, providing personalized content recommendations.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10'
  },
  {
    icon: Target,
    title: 'Instant Feedback',
    description: 'Get immediate feedback on quizzes and assignments with detailed explanations for every answer.',
    color: 'text-error',
    bgColor: 'bg-error/10'
  },
  {
    icon: Gamepad2,
    title: 'Gamified Learning',
    description: 'Earn points, unlock achievements, and compete with friends while mastering complex concepts.',
    color: 'text-success',
    bgColor: 'bg-success/10'
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed analytics and performance insights.',
    color: 'text-info',
    bgColor: 'bg-info/10'
  },
  {
    icon: Users2,
    title: 'Collaborative Learning',
    description: 'Join study groups, participate in discussions, and learn together with peers worldwide.',
    color: 'text-primary',
    bgColor: 'bg-primary/10'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-textPrimary mb-4">
            Why Choose LearnLab?
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with proven educational methods 
            to create the most engaging learning experience possible.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-surface hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className={`${feature.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-textPrimary mb-3">{feature.title}</h3>
                <p className="text-textSecondary leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-textPrimary mb-4">
                See It In Action
              </h3>
              <p className="text-lg text-textSecondary mb-6">
                Experience our interactive learning environment with a live demo. 
                Watch how complex scientific concepts become easy to understand through visualization.
              </p>
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-colors shadow-lg">
                Try Interactive Demo
              </button>
            </div>
            
            {/* Demo Preview */}
            <div className="relative">
              <DemoSlider />
              {/* <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-textPrimary">Chemistry Lab Simulation</h4>
                  <div className="bg-background p-4 rounded-lg shadow-md">
                    <div className="h-3 w-3/4 bg-primary/20 rounded-full mb-2"></div>
                    <div className="h-3 w-5/6 bg-primary/20 rounded-full mb-2"></div>
                    <div className="h-3 w-2/3 bg-primary/20 rounded-full"></div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg h-40 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-3 animate-pulse"></div>
                    <p className="text-sm text-textSecondary">3D Molecular Visualization</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm text-textSecondary">
                  <span>Progress: 75%</span>
                  <span className="bg-success/20 text-success px-2 py-1 rounded">Correct!</span>
                </div>
              </div> */}
              
              {/* Floating badges */}
              <div className="absolute -top-3 -right-3 bg-warning text-warning-foreground px-3 py-1 rounded-full text-xs font-medium animate-bounce">
                Live Demo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;