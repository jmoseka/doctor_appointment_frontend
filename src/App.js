import { Route, Routes } from 'react-router-dom';
import AddDoctor from "./components/AddDoctor"
import Appointments from "./components/Appointments"
import DeleteDoctor from "./components/DeleteDoctor"
import Doctors from "./components/Doctors"
import Homepage from './components/Homepage';
import Navbar from "./components/Navbar"
import NewAppointment from "./components/NewAppointment"
import NotFound from './components/NotFound';
import Signin from './components/splash_screen/signin';
import Signup from './components/splash_screen/signup';
import Splashscreen from './components/splash_screen/splashscreen';
import Welcome from './components/splash_screen/Welcome';

const App = () => {

    return (
      <Homepage user='yes' />
    )
}

export default App
