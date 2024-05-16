import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './hooks/useAuth';

import {
  Navbar,
  News
} from './components';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<News />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </AuthProvider>
  );
}

export default App;