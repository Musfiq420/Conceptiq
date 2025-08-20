import CourseDetails from "../../components/CourseDetails";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function App() {
  return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <CourseDetails />
        </main>
        <Footer />
      </div>
  );
}

export default App;
