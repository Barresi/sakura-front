import { useLocation } from 'react-router-dom'
import { AppRoutes } from '../types/routes'

export function useCurrentRoute(location: AppRoutes): boolean {
  const { pathname } = useLocation()
  if (location === AppRoutes.CHAT) {
    if (pathname.includes(AppRoutes.MESSENGER) && pathname.length > 16) return true
  }
  return false
}
