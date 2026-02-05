import { Routes, Route } from "react-router-dom"
import HomePage from '../features/home/components/HomePage'
import AI4BPage from '../features/ai4b/components/AI4BPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ai4b" element={<AI4BPage />} />
    </Routes>
  )
}

export default App
