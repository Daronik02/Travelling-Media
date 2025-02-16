import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AutoSlider from './ImageSlider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AutoSlider />
  </StrictMode>,
)
