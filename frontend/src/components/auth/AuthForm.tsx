import type { FormEvent } from 'react'

type AuthFormProps = {
  mode: 'login' | 'register'
  email: string
  password: string
  loading: boolean
  onEmailChange: (value: string) => void
  onPasswordChange: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
}

export function AuthForm({
  mode,
  email,
  password,
  loading,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: AuthFormProps) {
  return (
    <form onSubmit={onSubmit} className="form">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        autoComplete="email"
        placeholder="nome@dominio.it"
        value={email}
        onChange={(event) => onEmailChange(event.target.value)}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
        placeholder="Almeno 6 caratteri"
        value={password}
        onChange={(event) => onPasswordChange(event.target.value)}
        required
        minLength={6}
      />

      <button type="submit" disabled={loading}>
        {loading
          ? mode === 'login'
            ? 'Accesso in corso...'
            : 'Registrazione in corso...'
          : mode === 'login'
            ? 'Accedi'
            : 'Registrati'}
      </button>
    </form>
  )
}
