import { NotificationContainer } from 'react-notifications';
import { Route, Routes } from 'react-router-dom';
import AddDoctor from './addDoctor/AddDoctor';
import DeleteDoctor from './delete_doctor/DeleteDoctor';
import DoctorDetails from './DoctorDetails';
import Doctors from './Doctors';
import Navbar from './Navbar';
import Appointments from './my_appointment/Appointments';
import NewAppointment from './new-appointment/NewAppointment';
import NotFound from './NotFound';
import NoAuth from './auth/no_auth';

const Home = () => (
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
        <Route path="/401" element={<NoAuth />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </section>
  </div>
);

export default Home;
