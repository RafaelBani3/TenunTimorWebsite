import { useEffect, useState, useRef } from 'react'

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  return { ref: elementRef, isVisible }
}

export const scrollAnimationClasses = (isVisible, animationType = 'fade-up') => {
  const baseClasses = 'transition-all duration-700 ease-out'
  
  if (!isVisible) {
    switch (animationType) {
      case 'fade-up':
        return `${baseClasses} opacity-0 translate-y-8`
      case 'fade-left':
        return `${baseClasses} opacity-0 -translate-x-8`
      case 'fade-right':
        return `${baseClasses} opacity-0 translate-x-8`
      case 'scale':
        return `${baseClasses} opacity-0 scale-95`
      case 'flip':
        return `${baseClasses} opacity-0 rotate-y-12`
      default:
        return `${baseClasses} opacity-0 translate-y-8`
    }
  }
  
  switch (animationType) {
    case 'fade-up':
      return `${baseClasses} opacity-100 translate-y-0`
    case 'fade-left':
      return `${baseClasses} opacity-100 translate-x-0`
    case 'fade-right':
      return `${baseClasses} opacity-100 translate-x-0`
    case 'scale':
      return `${baseClasses} opacity-100 scale-100`
    case 'flip':
      return `${baseClasses} opacity-100 rotate-y-0`
    default:
      return `${baseClasses} opacity-100 translate-y-0`
  }
}