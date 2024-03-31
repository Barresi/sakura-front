import { type ChangeEvent } from 'react'

export const handleFileChange = (
  e: ChangeEvent<HTMLInputElement>,
  setPreviewUrl: (res: string) => void
): void => {
  const selectedFile = e.target.files ? e.target.files[0] : null
  if (selectedFile) {
    const reader = new FileReader()
    reader.onload = () => {
      setPreviewUrl(reader.result as string)
    }
    reader.readAsDataURL(selectedFile)
  }
}
