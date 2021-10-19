import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Shared/Menu/Menu';
import Home from './components/Home/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Services from './components/Home/Services/Services';
import Doctors from './components/Home/Doctors/Doctors';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import Service from './components/Home/Service/Service';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Doctor from './components/Home/Doctor/Doctor';
import About from './components/Home/About/About';
import Hotline from './components/SubMenu/Hotline';
import Booking from './components/Home/Booking/Booking';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Menu></Menu>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            {/* <PrivateRoute path="/service/:serviceId">
              <Service></Service>
            </PrivateRoute> */}
            <PrivateRoute path="/service/:serviceId">
              <Service></Service>
            </PrivateRoute>
            <PrivateRoute path="/doctor/:doctorId">
              <Doctor></Doctor>
            </PrivateRoute>
            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/hotline">
              <Hotline></Hotline>
            </Route>
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
