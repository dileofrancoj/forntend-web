import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import About from '../pages/About'
import Courses from '../pages/Courses'
import NotFound from '../pages/NotFound'
import Navbar from '../components/CustomNavbar'

export const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>

                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="*" element={<NotFound />} />
            </Routes >
        </BrowserRouter >
    )
}
