import getFirstDayOfWeek from './get-first-day-of-week'

describe('getFirstDayOfWeek', () => {
  const firstDayOfWeekDate = new Date(2018, 3, 1)

  describe('Provided day is first day of week', () => {
    it('should return the same day', () => {
      expect(getFirstDayOfWeek(firstDayOfWeekDate)).to.equalDate(firstDayOfWeekDate)
    })
  })

  describe('Provided day is not the first day of week', () => {
    it('should return the first day of the week', () => {
      const date = new Date(firstDayOfWeekDate.getTime())
      date.setDate(date.getDay() + 3)

      expect(getFirstDayOfWeek(date)).to.equalDate(firstDayOfWeekDate)
    })
  })
})
