export default function (num) {
  if (isNaN(num)) return false

  const segments = (`${num}`).split('.')

  if (segments[0].length < 2) segments[0] = ('0' + segments[0]).slice(-2)

  const newNum = segments.join('.')

  return newNum
}
