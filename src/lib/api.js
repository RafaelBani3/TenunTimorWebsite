import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add CSRF token if available
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')
    if (csrfToken) {
      config.headers['X-CSRF-TOKEN'] = csrfToken
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor - Re-enabled with safeguards
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle 401 errors with safeguards to prevent redirect loops
    if (error.response?.status === 401) {
      // Only redirect if:
      // 1. Not on auth check endpoint (prevents loop on app load)
      // 2. Not already on login/register page (prevents loop on auth pages)
      // 3. Not in a redirect loop (check recent redirects)
      const currentPath = window.location.pathname
      const isAuthCheck = error.config?.url?.includes('/auth/me')
      const isAuthPage = currentPath.includes('/auth/')
      
      if (!isAuthCheck && !isAuthPage) {
        console.log('401 detected - redirecting to login with safeguards')
        // Add timestamp to prevent rapid redirects
        const lastRedirect = sessionStorage.getItem('lastAuthRedirect')
        const now = Date.now()
        
        if (!lastRedirect || (now - parseInt(lastRedirect)) > 5000) { // 5 second cooldown
          sessionStorage.setItem('lastAuthRedirect', now.toString())
          window.location.href = '/auth/login'
        } else {
          console.log('Redirect cooldown active - preventing rapid redirects')
        }
      } else {
        console.log('401 on auth check or auth page - no redirect needed')
      }
    }
    return Promise.reject(error)
  }
)

export default api