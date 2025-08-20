import { Routes, Route, Navigate } from 'react-router-dom'
import { Login, Home, RegisterPage } from './pages/index.ts'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login-page" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/registration" element={<RegisterPage />} />

      <Route path="*" element={<Navigate to="/login-page" />} />
    </Routes>
  )
}
