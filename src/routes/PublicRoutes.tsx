import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from '../pages/About';
import Courses from '../pages/Courses';
import NotFound from '../pages/NotFound';
import Education from '../pages/Education';
import Blog from '../pages/Blog';
import Stuff from '../pages/Stuff'

import Navbar from '../components/CustomNavbar';
import Footer from '../components/Footer';

export const PublicRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/education' element={<Education />} />
          <Route path='/stuff' element={<Stuff />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>

  );
};
