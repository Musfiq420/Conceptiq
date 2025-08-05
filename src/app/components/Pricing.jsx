
import { Check, Star, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: 0,
    period: 'forever',
    description: 'Perfect for trying out our platform',
    features: [
      'Access to 3 courses',
      'Basic quizzes and exercises',
      'Community support',
      'Mobile app access',
      'Progress tracking'
    ],
    limitations: [
      'Limited simulations',
      'No offline access',
      'Basic support only'
    ],
    buttonText: 'Get Started Free',
    buttonStyle: 'bg-textSecondary hover:bg-textSecondary/90',
    popular: false
  },
  {
    name: 'Student',
    price: 19,
    period: 'month',
    description: 'Everything you need for academic success',
    features: [
      'Access to all courses',
      'Unlimited interactive simulations',
      'Advanced quizzes with explanations',
      'Offline content download',
      'Priority support',
      'Study groups and collaboration',
      'Detailed progress analytics',
      'Mobile and desktop apps'
    ],
    limitations: [],
    buttonText: 'Start Free Trial',
    buttonStyle: 'bg-primary hover:bg-primary/90',
    popular: true
  },
  {
    name: 'Premium',
    price: 39,
    period: 'month',
    description: 'For serious learners who want it all',
    features: [
      'Everything in Student plan',
      'AI-powered personal tutor',
      'Custom learning paths',
      'Advanced lab simulations',
      '1-on-1 expert sessions',
      'Exam preparation courses',
      'Certificate of completion',
      'Early access to new content'
    ],
    limitations: [],
    buttonText: 'Go Premium',
    buttonStyle: 'bg-secondary hover:bg-secondary/90',
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-textPrimary mb-4">
            Choose Your Learning Journey
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Start free and upgrade anytime. All plans include our core interactive features 
            and access to our supportive learning community.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 p-8 ${
                plan.popular 
                  ? 'border-primary shadow-xl scale-105' 
                  : 'border-surface hover:border-primary/50'
              } transition-all duration-300 hover:shadow-lg`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-5xl font-bold text-textPrimary mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-textPrimary">${plan.price}</span>
                  <span className="text-2xl text-textSecondary">/{plan.period}</span>
                </div>
                <p className="text-textSecondary mb-8">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600 mb-2">
                    <Check className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                    <span className="text-textPrimary">{feature}</span>
                  </li>
                ))}
                
                {/* Limitations for free plan */}
                {plan.limitations.map((limitation, limitIndex) => (
                  <div key={limitIndex} className="flex items-center text-textSecondary/70 mb-2">
                    <div className="w-5 h-5 rounded-full bg-surface mr-3 flex-shrink-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-textSecondary/50 rounded-full"></div>
                    </div>
                    <span className="text-sm">{limitation}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full ${plan.buttonStyle} text-white py-4 rounded-xl font-semibold transition-colors shadow-lg`}>
                {plan.buttonText}
              </button>

              {/* Additional Info */}
              {plan.name === 'Student' && (
                <p className="text-center text-sm text-gray-500 mt-4">
                  14-day free trial • Cancel anytime
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12 p-8 bg-green-50 rounded-2xl">
          <div className="flex items-center justify-center mb-4">
            <Zap className="h-8 w-8 text-green-600 mr-2" />
            <h3 className="text-xl font-bold text-gray-900">30-Day Money-Back Guarantee</h3>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Not satisfied with your learning experience? Get a full refund within 30 days, 
            no questions asked. We're confident you'll love learning with LearnLab.
          </p>
        </div>

        {/* FAQ Teaser */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Have questions about our plans?</p>
          <button className="text-indigo-600 hover:text-indigo-700 font-semibold">
            View Frequently Asked Questions →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;