// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import SwapPage from './pages/SwapPage';
import PerpsPage from './pages/PerpsPage';

function App() {
  return (
    <Routes>
      {/* Default route to the Swap Page */}
      <Route path="/" element={<SwapPage />} />
      <Route path="/swap" element={<SwapPage />} />
      <Route path="/perps" element={<PerpsPage />} />
    </Routes>
  )
}

export default App;