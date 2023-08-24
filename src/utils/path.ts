export const convertPathToName = (path: string): string | null => {
  const regex = /\/([^/]+)\.webp$/
  const match = path.match(regex)
  if (match) {
    return match[1]
  } else return null
}
