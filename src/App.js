import { Route, Routes } from 'react-router-dom';
import Signup from './components/auth/signup';
import Splashscreen from './components/auth/splash_screen';
import Signin from './components/auth/signin';
import localStorages from './helpers/localStorage';
import 'react-notifications/lib/notifications.css';
import Home from './components/Home';

const App = () => {
  const hasAccount = localStorages.getUser();

  if (hasAccount?.user) {
    return (
      <Home />
    );
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Splashscreen />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>

    </div>

  );
};

export default App;
