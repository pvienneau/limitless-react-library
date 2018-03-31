export default function (date) {
  const newDate = new Date(date.getTime())
  newDate.setDate(newDate.getDate() - newDate.getDay())

  return newDate
}
