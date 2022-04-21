import './App.css';
import Footer from './components/Footer';
import Slider from './components/Slider';
import MainContent from './components/MainContent';
import SubFooter from './components/SubFooter';

const App = () => {
  return (
    <div>
      {/* <Slider /> */}
      <MainContent />
      <SubFooter />
      <Footer />
    </div>
  );
}

export default App;
