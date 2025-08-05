// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
// import CourseSelection from './components/CourseSelection';
// import CourseDetails from './components/CourseDetails';

function App() {
  return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
                <Courses />
                <Features />
                <Testimonials />
                <Pricing />
        </main>
        <Footer />
      </div>
  );
}

export default App;
