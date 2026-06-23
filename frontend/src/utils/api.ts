import type { ApiError, ApiSuccess } from '../types/auth'

export const buildApiBase = (rawValue: string | undefined) => {
  const rawApiBase = rawValue?.trim() ?? ''
  const normalizedBase = rawApiBase.length > 0 ? rawApiBase.replace(/\/$/, '') : '/api'
  return normalizedBase.endsWith('/api') ? normalizedBase : `${normalizedBase}/api`
}

export const readErrorMessage = async (response: Response) => {
  const contentType = response.headers.get('content-type') ?? ''

  if (contentType.includes('application/json')) {
    const body = (await response.json()) as ApiError
    return body.message ?? 'Richiesta non valida'
  }

  const bodyText = await response.text()
  return bodyText || 'Richiesta non valida'
}

export const authRequest = async (
  apiBase: string,
  endpoint: 'login' | 'register',
  email: string,
  password: string,
): Promise<ApiSuccess> => {
  const response = await fetch(`${apiBase}/auth/${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

  if (!response.ok) {
    const message = await readErrorMessage(response)
    throw new Error(message)
  }

  return (await response.json()) as ApiSuccess
}
