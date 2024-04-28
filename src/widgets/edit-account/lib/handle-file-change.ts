export const handleFileChange = (
  file: File,
  setPreviewUrl: (res: string) => void
): void => {
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      setPreviewUrl(reader.result as string)
    }
    reader.readAsDataURL(file)
  }
}
