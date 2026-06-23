import { useState } from 'react'
import './styles/app.css'
import { useAuth } from './hooks/useAuth'
import { AuthPage } from './pages/AuthPage'
import { DashboardPage } from './pages/DashboardPage'
import { LandingPage } from './pages/LandingPage'

function App() {
  const [pageMode, setPageMode] = useState<'landing' | 'auth'>('landing')

  const {
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
  } = useAuth()

  if (view === 'home' && activeEmail) {
    return (
      <DashboardPage
        email={activeEmail}
        onBackToLanding={() => {
          logout()
          setPageMode('landing')
        }}
      />
    )
  }

  if (pageMode === 'landing') {
    return <LandingPage onGoToAuth={() => setPageMode('auth')} />
  }

  return (
    <AuthPage
      view={view === 'home' ? 'login' : view}
      email={email}
      password={password}
      loading={loading}
      error={error}
      successMessage={successMessage}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onLoginSubmit={handleLogin}
      onRegisterSubmit={handleRegister}
      onGoToLogin={goToLogin}
      onGoToRegister={goToRegister}
      onBackToLanding={() => setPageMode('landing')}
    />
  )
}

export default App
