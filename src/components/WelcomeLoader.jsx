import React, { useState, useEffect } from 'react'

const WelcomeLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Delay showing content for smoother entrance
    setTimeout(() => setShowContent(true), 300)
    
    // Slower progress animation
    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 8 + 3 // Slower increment (3-11%)
        const newProgress = Math.min(prev + increment, 100)
        console.log('WelcomeLoader: Progress', newProgress)
        return newProgress
      })
    }, 300) // Slower interval (300ms vs 200ms)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      console.log('WelcomeLoader: Progress complete, starting smooth fade out...')
      setTimeout(() => {
        setIsFadingOut(true)
      }, 800) // Delay before fade out for better feel
      
      const timer = setTimeout(() => {
        console.log('WelcomeLoader: Calling onComplete')
        onComplete()
      }, 2500) // Longer fade out duration
      
      return () => clearTimeout(timer)
    }
  }, [progress, onComplete])

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#111827',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      color: 'white',
      opacity: isFadingOut ? 0 : 1,
      transition: 'opacity 1.5s ease-out', // Slower fade out
      visibility: isFadingOut ? 'hidden' : 'visible'
    }}>
      <div style={{ 
        textAlign: 'center',
        transform: isFadingOut ? 'scale(0.95)' : (showContent ? 'scale(1)' : 'scale(0.9)'),
        transition: 'transform 1.5s ease-out', // Slower transform
        opacity: showContent ? 1 : 0,
        transitionProperty: 'transform, opacity',
        transitionDuration: '1.5s',
        transitionTimingFunction: 'ease-out'
      }}>
        {/* Logo dengan animasi yang lebih smooth */}
        <div style={{
          fontSize: '52px', // Slightly larger
          fontWeight: '300', // Lighter weight
          marginBottom: '16px',
          letterSpacing: '2px', // More spacing
          transform: progress < 100 ? 'scale(1)' : 'scale(1.05)', // Subtle scale
          transition: 'transform 0.8s ease-out', // Slower transition
          textShadow: '0 2px 20px rgba(255,255,255,0.1)' // Soft glow
        }}>
          TenunTimor
        </div>
        
        {/* Subtitle dengan animasi yang lebih halus */}
        <div style={{ 
          fontSize: '16px', 
          marginBottom: '50px', 
          opacity: 0.7,
          fontWeight: '300',
          letterSpacing: '1px',
          transition: 'opacity 1s ease-out'
        }}>
          Kain Tenun Tradisional NTT
        </div>
        
        {/* Progress bar container dengan rounded yang lebih smooth */}
        <div style={{ 
          width: '320px', // Wider
          height: '8px', // Taller
          backgroundColor: '#1f2937', // Darker background
          borderRadius: '4px', // More rounded
          overflow: 'hidden',
          margin: '0 auto 20px',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)', // Inner shadow
          position: 'relative'
        }}>
          {/* Progress bar fill dengan efek yang lebih halus */}
          <div style={{
            height: '100%',
            background: 'linear-gradient(90deg, #ffffff 0%, #f3f4f6 100%)', // Gradient fill
            width: `${progress}%`,
            transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)', // Smooth easing
            borderRadius: '4px',
            boxShadow: '0 0 20px rgba(255,255,255,0.3)' // Softer glow
          }}></div>
          {/* Pulse effect on complete */}
          {progress >= 100 && (
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(255,255,255,0.1)',
              animation: 'pulse 1s infinite',
              borderRadius: '4px'
            }}></div>
          )}
        </div>
        
        {/* Progress text yang lebih elegan */}
        <div style={{ 
          fontSize: '13px', 
          opacity: progress >= 100 ? 0.9 : 0.6,
          fontWeight: '300',
          letterSpacing: '0.5px',
          transition: 'opacity 0.8s ease-out',
          marginBottom: '8px'
        }}>
          {Math.round(progress)}%
        </div>
        
        {/* Status text yang berubah */}
        <div style={{ 
          fontSize: '14px', 
          opacity: 0.5,
          fontWeight: '300',
          fontStyle: 'italic',
          transition: 'opacity 0.8s ease-out'
        }}>
          {progress >= 100 ? 'Selesai...' : 'Memuat keindahan budaya Timor...'}
        </div>
        
        {/* Animated dots yang lebih subtle */}
        <div style={{ 
          marginTop: '30px', 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '8px',
          opacity: progress >= 100 ? 0 : 0.4,
          transition: 'opacity 0.8s ease-out'
        }}>
          {[0, 200, 400].map((delay, index) => (
            <div
              key={index}
              style={{
                width: '5px',
                height: '5px',
                backgroundColor: 'rgba(255,255,255,0.6)',
                borderRadius: '50%',
                animation: `bounce 2s infinite ease-in-out`,
                animationDelay: `${delay}ms`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Cultural pattern background yang lebih subtle */}
      <div style={{
        position: 'absolute',
        bottom: '60px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '20px',
        opacity: isFadingOut ? 0 : 0.15,
        transition: 'opacity 1.5s ease-out'
      }}>
        {[0, 700, 1400].map((delay, index) => (
          <div
            key={index}
            style={{
              width: '10px',
              height: '10px',
              border: '1px solid rgba(156, 163, 175, 0.4)',
              transform: 'rotate(45deg)',
              animation: 'pulse 3s infinite',
              animationDelay: `${delay}ms`
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default WelcomeLoader