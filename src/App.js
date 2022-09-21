import { Route, Routes } from 'react-router-dom';
import Signin from './components/auth/signin';
// import AddDoctor from './components/addDoctor/AddDoctor';
// import Appointments from './components/Appointments';
import Signup from './components/auth/signup';
import Splashscreen from './components/auth/splash_screen';
// import DeleteDoctor from './components/DeleteDoctor';
// import Doctors from './components/Doctors';
// import Navbar from './components/Navbar';
// import NewAppointment from './components/NewAppointment';
import NotFound from './components/NotFound';

const App = () => (
  <div>
    <Splashscreen />

    <Routes>
      <Route path="/" element={<Splashscreen />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup" element={<Signin />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>

    {/* <Navbar />
    <section id="main-sec">
      <Routes>
        <Route path="/" element={<Doctors />} />
        <Route path="/add_doctor" element={<AddDoctor />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/new_appointment" element={<NewAppointment />} />
        <Route path="/delete_doctor" element={<DeleteDoctor />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </section> */}
  </div>
);

export default App;
