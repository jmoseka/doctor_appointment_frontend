import { Route, Routes } from 'react-router-dom';
import AddDoctor from './components/addDoctor/AddDoctor';
import Appointments from './components/my_appointment/Appointments';
// import Signup from './components/auth/signup';
// import Splashscreen from './components/auth/splash_screen';
// import Signin from './components/auth/signin';
import DeleteDoctor from './components/DeleteDoctor';
import DoctorDetails from './components/DoctorDetails';
import Doctors from './components/Doctors';
import Navbar from './components/Navbar';
import NewAppointment from './components/new-appointment/NewAppointment';
import NotFound from './components/NotFound';
// import localStorages from './helpers/localStorage';

const App = () => (
  <div>
    <Navbar />
    <section id="main-sec">
      <Routes>
        <Route path="/" element={<Doctors />} />
        <Route path="/add_doctor" element={<AddDoctor />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/new_appointment" element={<NewAppointment />} />
        <Route path="/delete_doctor" element={<DeleteDoctor />} />
        <Route path="/doctor_details/:id" element={<DoctorDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </section>
  </div>
);

export default App;
