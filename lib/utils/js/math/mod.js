function mod (num, bound) {
  if (num < 0) {
    const diff = Math.abs(num) % bound
    return bound - diff
  } else {
    return num % bound
  }
}

export default mod
