import { useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from '../features/home/components/HomePage'
import AI4BPage from '../features/ai4b/components/AI4BPage'
import AdvisoryCouncilPage from '../features/advisory/components/AdvisoryCouncilPage'
import CareersPage from '../features/careers/components/CareersPage'
import ContactPage from '../features/contact/components/ContactPage'
import TendersPage from '../features/tenders/components/TendersPage'
import TendersPageV2 from '../features/tenders/components/TendersPageV2'
import TendersPageV3 from '../features/tenders/components/TendersPageV3'
import TendersPageV4 from '../features/tenders/components/TendersPageV4'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/advisory-council" element={<AdvisoryCouncilPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/tenders" element={<TendersPage />} />
      <Route path="/tenders-v2" element={<TendersPageV2 />} />
      <Route path="/tenders-v3" element={<TendersPageV3 />} />
      <Route path="/tenders-v4" element={<TendersPageV4 />} />
    </Routes>
  )
}

export default App
