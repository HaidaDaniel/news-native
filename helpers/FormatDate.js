export const FormatDate = (publishedAt) => {
  const date = new Date(publishedAt)
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
  return date.toLocaleString('en-US', options)
}
