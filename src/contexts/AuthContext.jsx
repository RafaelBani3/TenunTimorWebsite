import React, { createContext, useContext, useState, useEffect } from 'react'
import { api } from '@/lib/api'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const hasCheckedAuth = React.useRef(false)
  const retryCount = React.useRef(0)
  const maxRetries = 3

  useEffect(() => {
    // Prevent multiple auth checks
    if (hasCheckedAuth.current) return
    
    // Only check auth if not on login/register pages
    const currentPath = window.location.pathname
    if (currentPath.includes('/auth/')) {
      setLoading(false)
      return
    }
    
    hasCheckedAuth.current = true
    console.log('Starting initial auth check...')
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      console.log('Starting auth check...')
      const response = await api.get('/auth/me')
      console.log('Auth check successful:', response.data.user)
      setUser(response.data.user)
      retryCount.current = 0 // Reset retry count on success
    } catch (error) {
      console.log('Auth check failed:', error.message)
      setUser(null)
      
      // Handle specific error cases
      if (error.response?.status === 401) {
        console.log('User not authenticated - staying on current page')
        retryCount.current = 0 // Don't retry on 401
      } else if (error.response?.status === 500) {
        console.log('Server error - will retry later')
        retryWithBackoff()
      } else {
        console.log('Network error - will retry later')
        retryWithBackoff()
      }
    } finally {
      setLoading(false)
    }
  }

  const retryWithBackoff = () => {
    if (retryCount.current < maxRetries) {
      retryCount.current++
      const delay = Math.pow(2, retryCount.current) * 1000 // Exponential backoff
      console.log(`Retrying auth check in ${delay}ms (attempt ${retryCount.current}/${maxRetries})`)
      
      setTimeout(() => {
        if (!hasCheckedAuth.current) {
          hasCheckedAuth.current = true
          checkAuth()
        }
      }, delay)
    } else {
      console.log('Max auth retries reached - giving up')
    }
  }

  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password })
      setUser(response.data.user)
      return { success: true }
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Login failed' 
      }
    }
  }

  const register = async (userData) => {
    try {
      const response = await api.post('/auth/register', userData)
      setUser(response.data.user)
      return { success: true }
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Registration failed' 
      }
    }
  }

  const logout = async () => {
    try {
      await api.post('/auth/logout')
      setUser(null)
    } catch (error) {
      console.error('Logout error:', error)
      setUser(null)
    }
  }

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    checkAuth
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}