import React from 'react'
import { mount } from 'utils/cypress'
import dateFormat from 'dateformat'

import { DatePicker } from 'components'

describe('DatePicker', () => {
  describe('Calendar', () => {
    describe('Single Date', () => {
      beforeEach(() => {
        mount(<DatePicker />)
      })

      it('should allow to select a single date', () => {
        const firstDate = new Date()
        const secondDate = new Date()
        firstDate.setDate(14)
        secondDate.setDate(firstDate.getDate() + 5)

        cy.get('input').focus()

        cy.get('.Calendar').first().contains('button', 14).click({ force: true })

        Cypress.component().its('state.selectedDates.0').should('haveDay', 14)

        cy.get('.Calendar').first().contains('button', 23).click({ force: true })

        Cypress.component().its('state.selectedDates.0').should('haveDay', 23)
      })
    })

    describe('Date Range', () => {
      const currentDate = new Date(1990, 2, 19)

      beforeEach(() => {
        mount(
          <DatePicker
            range
            currentDate={currentDate}
          />
        )
      })

      it('should allow to select a range of dates', () => {
        cy
          .get('input').focus()
          .get('.Calendar').first().find('button').contains(14).click()
          .get('.Calendar').last().find('button').contains(15).click()

        Cypress.component().its('state.selectedDates.0').should('haveDay', 14)
        Cypress.component().its('state.selectedDates.0').should('haveMonth', 2)
        Cypress.component().its('state.selectedDates.1').should('haveDay', 15)
        Cypress.component().its('state.selectedDates.1').should('haveMonth', 3)
      })

      it('should expand range when selecting dates outside of range', () => {
        cy
          .get('input').focus()
          .get('.Calendar').first().find('button').contains(12).click()
          .get('.Calendar').first().find('button').contains(16).click()
          .get('.Calendar').first().find('button').contains(10).click()
          .get('.Calendar').first().find('button').contains(21).click()

        Cypress.component().its('state.selectedDates.0').should('haveDay', 10)
        Cypress.component().its('state.selectedDates.1').should('haveDay', 21)
      })
    })
  })

  describe('Navigation', () => {
    const currentDate = new Date(2016, 5, 5)

    beforeEach(() => {
      mount(<DatePicker currentDate={currentDate} />)
    })

    it('should allow to navigate next/previous month', () => {
      Cypress.component().its('state.currentDate').should('equalDate', currentDate)

      cy
        .get('input').focus()
        .get('.Calendar').first().find('button.button-previous-month').click()
      Cypress.component().its('state.currentDate').should('haveMonth', 4)

      cy
        .get('.Calendar').last().find('button.button-next-month').click().click()

      Cypress.component().its('state.currentDate').should('haveMonth', 6)
    })
  })

  describe('Control box', () => {
    const currentDate = new Date()

    beforeEach(() => {
      mount(
        <DatePicker
          range
          currentDate={currentDate}
        />
      )
    })

    it('should update start and end date when selecting dates from calendar', () => {
      const startDate = new Date(currentDate.getTime())
      const endDate = new Date(currentDate.getTime())

      startDate.setDate(12)
      endDate.setDate(16)

      cy
        .get('input').focus()
        .get('.Calendar').first().find('button').contains(startDate.getDate()).click()
        .get('.Calendar').first().find('button').contains(endDate.getDate()).click()

      cy.get('.Controls').find('input[name=start_date]').should('have.value', dateFormat(startDate, 'yyyy/mm/dd'))
      cy.get('.Controls').find('input[name=end_date]').should('have.value', dateFormat(endDate, 'yyyy/mm/dd'))
    })
  })
})
