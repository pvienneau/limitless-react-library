import React, { Component } from 'react'

import { Button, Popup, Alert, Icon } from 'components'

class PopupStylings extends Component {
  render () {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th colSpan="3">
                Basic popups
              </th>
            </tr>

            <tr>
              <td width="20%">
                Default popup dialog
              </td>

              <td width="20%">
                <Button
                  icon="play3"
                  iconPosition="right"
                  onClick={() => this._defaultModal.open()}
                >
                  Launch
                </Button>
              </td>

              <td>
                Basic popup dialog with <code>header</code>, <code>body</code> and <code>footer</code> areas. Default examples displays: header - contains a title and a close button; footer - contains buttons and body contains static or dynamic content
              </td>
            </tr>

            <tr>
              <td>
                Popup with icons
              </td>

              <td>
                <Button
                  icon="play3"
                  iconPosition="right"
                  onClick={() => this._popupIcons.open()}
                >
                  Launch
                </Button>
              </td>

              <td>
                Popup with icons added to the specified elements: heading title, footer control buttons and text inside modal body
              </td>
            </tr>

            <tr>
              <td>
                Disable backdrop
              </td>

              <td>
                <Button
                  icon="play3"
                  iconPosition="right"
                  onClick={() => this._popupBackdropDisabled.open()}
                >
                  Launch
                </Button>
              </td>

              <td>
                Disabled backdrop. Disable backdrop element using <code>noBackdrop</code>
              </td>
            </tr>

            <tr>
              <td>
                Disable backdrop
              </td>

              <td>
                <Button
                  icon="play3"
                  iconPosition="right"
                  onClick={() => this._popupBackdropDisabled.open()}
                >
                  Launch
                </Button>
              </td>

              <td>
                Disabled backdrop. Disable backdrop element using <code>noBackdrop</code>
              </td>
            </tr>

            <tr>
              <td>
                Disable keyboard interaction
              </td>

              <td>
                <Button
                  icon="play3"
                  iconPosition="right"
                  onClick={() => this._popupNoKeyClose.open()}
                >
                  Launch
                </Button>
              </td>

              <td>
                Disabled keyboard interaction. Disable closing the modal with keyboard interactions by setting the <code>noKeyClose</code> prop to <code>true</code>
              </td>
            </tr>
          </tbody>
        </table>

        <Popup
          ref={ref => { this._defaultModal = ref }}
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

        <Popup
          ref={ref => { this._popupIcons = ref }}
          title="Modal with icons"
          icon="menu7"
        >
          <Alert
            info
            bordered
            icon
          >
            <strong>Here we go!</strong> Example of an alert inside modal.
          </Alert>

          <h4>
            <Icon>balance</Icon>

            Sample heading with icon
          </h4>

          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>

          <hr />

          <p>
            <Icon>mention</Icon>

            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </p>
        </Popup>

        <Popup
          ref={ref => { this._popupBackdropDisabled = ref }}
          title="Disable Backdrop"
          noBackdrop
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

        <Popup
          ref={ref => { this._popupNoKeyClose = ref }}
          title="Disable keyboard interaction"
          noKeyClose
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
      </div>
    )
  }
}

export default PopupStylings
