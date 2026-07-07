import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Leads from './pages/Leads'
import Placeholder from './pages/Placeholder'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sell" element={<Placeholder title="Sell" />} />
        <Route path="shop" element={<Placeholder title="Shop" />} />
        <Route path="wishlist" element={<Placeholder title="Wishlist" />} />
        <Route path="orders" element={<Placeholder title="Orders" />} />
        <Route path="leads" element={<Leads />} />
        <Route path="stock" element={<Placeholder title="Stock" />} />
        <Route path="listings" element={<Placeholder title="Listings" />} />
        <Route path="users" element={<Placeholder title="Users" />} />
        <Route path="settings" element={<Placeholder title="Settings" />} />
      </Route>
    </Routes>
  )
}
