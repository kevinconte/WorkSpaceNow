export type ApiSuccess = {
  success: boolean
  message: string
  email: string
}

export type ApiError = {
  message?: string
}

export type AuthView = 'login' | 'register' | 'home'
