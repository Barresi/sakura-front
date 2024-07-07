export const handleFilesChange = (
  files: FileList,
  setPreviewUrls: (res: string[]) => void
): void => {
  const fileReaders: FileReader[] = []
  const urls: string[] = []

  Array.from(files).forEach((file) => {
    const reader = new FileReader()
    fileReaders.push(reader)

    reader.onload = () => {
      urls.push(reader.result as string)
      if (urls.length === files.length) {
        setPreviewUrls(urls)
      }
    }

    reader.readAsDataURL(file)
  })
}
