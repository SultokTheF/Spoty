import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './hooks/useAuth';

import {
  Navbar,
  News,
  Signup,
  Login,
  AlbumList,
  // Album
} from './components';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<News />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/albums" element={<AlbumList />} />
        {/* <Route path="/albums/:artist/:album" element={<Album />} /> */}
      </Routes>
    </AuthProvider>
  );
}

export default App;