import { useEffect, useState } from 'react'

export function useWindowSize(maxWidth: string | number): boolean {
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
