import { Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddDoctor from './AddDoctor';
import Appointments from './Appointments';
import DeleteDoctor from './DeleteDoctor';
import Doctors from './Doctors';
import Navbar from './Navbar';
import NewAppointment from './NewAppointment';
import NotFound from './NotFound';
import Welcome from './splash_screen/Welcome';

const Homepage = (prop) => {
    const u = prop
    const {user} =u

    if (user === 'yes')
    {
        return (
            <Welcome />
        )
    }

    else
     return (
      <div>
        {/* <Routes>
        <Route path="/" element={<Splashscreen/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        </Routes> */}
        <Navbar/>
        <section id="main-sec">
        <Routes>
          <Route path="/" element={<Doctors/>}/>
          <Route path="/add_doctor" element={<AddDoctor/>}/> 
          <Route path="/appointments" element={<Appointments/>}/> 
          <Route path="/new_appointment" element={<NewAppointment/>}/>
          <Route path="/delete_doctor" element={<DeleteDoctor/>}/>
          <Route path="/*" element={<NotFound/>} />
        </Routes>
        </section>
      </div>
    )
    
}


  
export default Homepage