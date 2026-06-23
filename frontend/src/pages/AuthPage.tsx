import type { FormEvent } from 'react'
import { AuthForm } from '../components/auth/AuthForm'
import { Footer } from '../components/recipe-card/Footer'

type AuthPageProps = {
  view: 'login' | 'register'
  email: string
  password: string
  loading: boolean
  error: string
  successMessage: string
  onEmailChange: (value: string) => void
  onPasswordChange: (value: string) => void
  onLoginSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
  onRegisterSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
  onGoToLogin: () => void
  onGoToRegister: () => void
  onBackToLanding: () => void
}

export function AuthPage({
  view,
  email,
  password,
  loading,
  error,
  successMessage,
  onEmailChange,
  onPasswordChange,
  onLoginSubmit,
  onRegisterSubmit,
  onGoToLogin,
  onGoToRegister,
  onBackToLanding,
}: AuthPageProps) {
  return (
    <main className="page">
      <section className="card">
        <button type="button" className="link-like back-link" onClick={onBackToLanding}>
          Torna alla landing
        </button>
        <h1>{view === 'login' ? 'BENVENUTO/A' : 'Registrazione'}</h1>
        <p className="subtitle">
          {view === 'login'
            ? 'Accedi con le tue credenziali'
            : 'Crea il tuo account per continuare'}
        </p>

        <AuthForm
          mode={view}
          email={email}
          password={password}
          loading={loading}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
          onSubmit={view === 'login' ? onLoginSubmit : onRegisterSubmit}
        />

        {error && <p className="feedback error">{error}</p>}
        {successMessage && <p className="feedback success">{successMessage}</p>}

        {view === 'login' ? (
          <p className="hint">
            Non hai un account?
            {' '}
            <button type="button" className="link-like" onClick={onGoToRegister}>
              Registrati qui
            </button>
          </p>
        ) : (
          <p className="hint">
            Hai gia un account?
            {' '}
            <button type="button" className="link-like" onClick={onGoToLogin}>
              Torna al login
            </button>
          </p>
        )}
      </section>
      <Footer />
    </main>
  )
}
