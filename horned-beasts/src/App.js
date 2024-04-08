import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div class="bg-green-600 w-9/12 shadow rounded">
      <Header />
      <Gallery />
      <Footer author="Aaron Imbrock" />
    </div>
  );
}

export default App;
