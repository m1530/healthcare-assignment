import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Shared/Menu/Menu';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
