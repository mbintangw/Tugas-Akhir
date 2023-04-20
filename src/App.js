import './App.css';
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import HumanCounting from './components/HumanCounting';
import FaceRecognition from './components/FaceRecog';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <HumanCounting/>
      <FaceRecognition/>
    </div>
  );
}

export default App;
