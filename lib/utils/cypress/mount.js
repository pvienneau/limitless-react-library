import { mount } from 'cypress-react-unit-test'

export default function (content) {
  const document = cy.state('document')

  mount(content)

  cy.window({ log: false })
    .its('ReactDOM.render')
    .then(render => {
      /*
       * STEP 1: Include CSS bundle file to mount of component
       */

      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = '/public/bundle.css'

      document.head.appendChild(link)
    })
    .then(() => {
      /*
       * STEP 2: Check to see if rendered compnent is an HOC.
       *         If so, get pure component in order to properly access its state
       */

      Cypress.component().then(node => {
        if (node.__wrappedComponent) Cypress._component = node.__wrappedComponent
        if (node.__wrappedInstance) Cypress._component = node.__wrappedInstance
      })
    })
}
