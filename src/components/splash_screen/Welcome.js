import { Route, Routes } from 'react-router-dom';
import Signin from './signin';
import Signup from './signup';
import Splashscreen from './splashscreen';

const Welcome = () => {
    return (
      <div>
        <Splashscreen />
        <div>
        <Routes>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        
        </Routes>
        </div>
      </div>
    )
  }
  
  export default Welcome