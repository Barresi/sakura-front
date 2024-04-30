const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря'
]
export function parseDateToYear(date: string | Date): string {
  const parseDate = new Date(date)
  const day = parseDate.getDate().toString()
  const month = (parseDate.getMonth() + 1).toString()
  return `${day.length < 2 ? '0' + day : day}.${
    month.length < 2 ? '0' + month : month
  }.${parseDate.getFullYear()}`
}
export function parseDateToMonth(date: string | Date): string {
  const parseDate = new Date(date)
  if (parseDate.getDate() === new Date().getDate()) return 'Сегодня'
  if (parseDate.getDate() === new Date().getDate() - 1) return 'Вчера'
  const day = parseDate.getDate()
  const month = parseDate.getMonth()

  return `${day} ${months[month]}`
}
export function parseDateToTime(date: string | Date): string {
  const parseDate = new Date(date)
  const hours = parseDate.getHours().toString()
  const min = parseDate.getMinutes().toString()
  return `${hours.length < 2 ? '0' + hours : hours}:${min.length < 2 ? '0' + min : min}`
}
