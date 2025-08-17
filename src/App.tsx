import { Routes, Route, Navigate } from 'react-router-dom';
import SwapPage from './pages/SwapPage';
import PerpsPage from './pages/PerpsPage';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<Navigate to="/swap" replace />} />
        
        <Route path="/swap" element={<SwapPage />} />
        <Route path="/perps" element={<PerpsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;