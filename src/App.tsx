import { Routes, Route } from 'react-router-dom';
import SwapPage from './pages/SwapPage';
import PerpsPage from './pages/PerpsPage';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        {/* Default route to the Swap Page */}
        <Route path="/" element={<SwapPage />} />
        <Route path="/swap" element={<SwapPage />} />
        <Route path="/perps" element={<PerpsPage />} />
      </Routes>
    </Layout>
  )
}

export default App;