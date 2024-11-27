import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../component/shared/Layout'
import Register from './Register'
import Dashboard from './Dashboard'
import AllUsers from './AllUsers'
import Companies from './Companies'
import Offers from './Offers'




function Admin() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<AllUsers />} />
                    <Route path="companies" element={<Companies />} />
                    <Route path="offers" element={<Offers />} />

                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    )
}

export default Admin