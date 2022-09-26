import { Route, Routes } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import AddDoctor from './components/addDoctor/AddDoctor';
import Signup from './components/auth/signup';
import Splashscreen from './components/auth/splash_screen';
import Signin from './components/auth/signin';
import DeleteDoctor from './components/delete_doctor/DeleteDoctor';
import DoctorDetails from './components/DoctorDetails';
import Doctors from './components/Doctors';
import Navbar from './components/Navbar';
import NewAppointment from './components/new-appointment/NewAppointment';
import NotFound from './components/NotFound';
import localStorages from './helpers/localStorage';
import 'react-notifications/lib/notifications.css';
import Appointments from './components/my_appointment/Appointments';

const App = () => {
  const hasAccount = localStorages.getUser();
  // console.log('have', localStorages.getUser().user).getItem('user');

  if (hasAccount?.user) {
    return (
      <div>
        <NotificationContainer />
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
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splashscreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>

    </div>

  );
};

export default App;
