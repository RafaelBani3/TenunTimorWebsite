import React, { useState, useEffect } from 'react'

const SimpleWelcomeLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    console.log('SimpleWelcomeLoader: Starting...')
    
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 10
        console.log('SimpleWelcomeLoader: Progress', newProgress)
        if (newProgress >= 100) {
          clearInterval(interval)
          console.log('SimpleWelcomeLoader: Complete!')
          setTimeout(() => {
            console.log('SimpleWelcomeLoader: Calling onComplete')
            onComplete()
          }, 500)
          return 100
        }
        return newProgress
      })
    }, 200)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: '#111827',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold'
    }}>
      <div>
        <div style={{ marginBottom: '20px', textAlign: 'center' }}>
          TenunTimor
        </div>
        <div style={{ 
          width: '200px', 
          height: '4px', 
          backgroundColor: '#374151', 
          borderRadius: '2px',
          overflow: 'hidden',
          margin: '0 auto'
        }}>
          <div style={{
            height: '100%',
            backgroundColor: 'white',
            width: `${progress}%`,
            transition: 'width 0.3s ease-out'
          }}></div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px' }}>
          {progress}%
        </div>
      </div>
    </div>
  )
}

export default SimpleWelcomeLoader