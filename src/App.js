import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./excercise/Navbar";
import Content from "./excercise/Content";
import Footer from "./excercise/Footer";
import Content2 from "./excercise/Content-2";
import E12_1 from "./excercise/E12_1";
import E12_2 from "./excercise/E12_2";
import E12_3 from "./excercise/E12_3";
import E12_4 from "./excercise/E12_4";
import E12_7 from "./excercise/E12_7";
import E12_5 from "./excercise/E12_5";
import E12_6 from "./excercise/E12_6";
import E13_1 from "./excercise/E13_1";
import E14_2 from "./excercise/E14_2";
function App() {
  return (
    <div className="App">
      <Navbar />
        <main>
          <E12_5/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
