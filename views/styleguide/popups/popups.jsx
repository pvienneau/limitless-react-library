import React, { Component } from 'react'

import { Panel, PopupProvider } from 'components'
import PopupStylings from './popup-stylings'
import PopupSizings from './popup-sizings'
import PopupTitles from './popup-titles'
import './popups.scss'

export default class Popups extends Component {
  render () {
    return (
      <div className="Popups">
        <PopupProvider>
          <Panel
            flat
            title="Modal dialogs"
          >
            <p>
              Popup dialogs are a small window that communicates information to the user and prompt them for a response. Dialog boxes are classified as <code>"modal"</code> or <code>"modeless"</code>, depending on whether or not they block interaction with the page that initiated the dialog. Table below contains basic popup dialog examples. Click <code>Launch</code> button to run popup examples.
            </p>

            <PopupStylings />

            <PopupSizings />

            <PopupTitles />
          </Panel>
        </PopupProvider>
      </div>
    )
  }
}
