import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import type { AuthView } from '../types/auth'
import { authRequest, buildApiBase } from '../utils/api'

export const useAuth = () => {
  const apiBase = useMemo(() => buildApiBase(import.meta.env.VITE_API_URL), [])

  const [view, setView] = useState<AuthView>(() => {
    return localStorage.getItem('activeEmail') ? 'home' : 'login'
  })
  const [activeEmail, setActiveEmail] = useState<string | null>(() => {
    return localStorage.getItem('activeEmail')
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const resetFeedback = () => {
    setError('')
    setSuccessMessage('')
  }

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    resetFeedback()

    try {
      const body = await authRequest(apiBase, 'login', email, password)
      localStorage.setItem('activeEmail', body.email)
      setActiveEmail(body.email)
      setView('home')
      setPassword('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore di rete')
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    resetFeedback()

    try {
      const body = await authRequest(apiBase, 'register', email, password)
      setSuccessMessage(`${body.message}. Ora puoi fare login.`)
      setView('login')
      setPassword('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Errore di rete')
    } finally {
      setLoading(false)
    }
  }

  const goToLogin = () => {
    setView('login')
    resetFeedback()
  }

  const goToRegister = () => {
    setView('register')
    resetFeedback()
  }

  const logout = () => {
    localStorage.removeItem('activeEmail')
    setActiveEmail(null)
    setPassword('')
    setView('login')
    resetFeedback()
  }

  return {
    view,
    activeEmail,
    email,
    password,
    loading,
    error,
    successMessage,
    setEmail,
    setPassword,
    handleLogin,
    handleRegister,
    goToLogin,
    goToRegister,
    logout,
  }
}
