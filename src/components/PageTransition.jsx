import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const PageTransition = ({ children }) => {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState('fadeIn')

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut')
    }
  }, [location, displayLocation])

  useEffect(() => {
    if (transitionStage === 'fadeOut') {
      const timeout = setTimeout(() => {
        setDisplayLocation(location)
        setTransitionStage('fadeIn')
      }, 150) // Faster transition for better UX

      return () => clearTimeout(timeout)
    }
  }, [transitionStage, location])

  return (
    <div 
      className={`transition-all duration-150 ease-out ${
        transitionStage === 'fadeOut' 
          ? 'opacity-0 scale-[0.98]' 
          : 'opacity-100 scale-100'
      }`}
    >
      {children}
    </div>
  )
}

export default PageTransition