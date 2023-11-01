import { type ClassValue, clsx } from 'clsx'
import { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn (...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function useWindowSize (maxWidth: string | number): boolean {
  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = (event: Event): void => {
    setWidth((event.target as Window).innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return width < Number(maxWidth)
}
