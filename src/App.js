import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./excercise/Navbar";
import Content from "./excercise/Content";
import Footer from "./excercise/Footer";
import Content2 from "./excercise/Content-2";
function App() {
  return (
    <div className="App">
      <Navbar />
        <main>
            <Content2/>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
