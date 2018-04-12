import React, { Component } from 'react'

import { Button, Popup, PopupProvider } from 'components'
import './popups.scss'

export default class Popups extends Component {
  render () {
    return (
      <div className="Popups">
        <PopupProvider>
          <Button onClick={() => this._popup.open()}>Open</Button>

          <Popup
            ref={ref => { this._popup = ref }}
            title="Basic modal"
            icon="menu7"
          >
            <h4>Text in a modal</h4>

            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>

            <hr />

            <h4>Another paragraph</h4>

            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>

            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
          </Popup>
        </PopupProvider>
      </div>
    )
  }
}
