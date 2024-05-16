import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './hooks/useAuth';

import {
  Navbar,
  News,
  Signup,
  Login
} from './components';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<News />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;