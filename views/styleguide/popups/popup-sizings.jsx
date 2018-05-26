import React, { Component } from 'react'

import { Button, Popup } from 'components'

class PopupSizings extends Component {
  render () {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th colSpan="3">
                Modal Sizing
              </th>
            </tr>

            <tr>
              <td width="20%">
                Mini size modal
              </td>

              <td width="20%">
                <Button
                  icon="play3"
                  iconPosition="right"
                  onClick={() => this._miniModal.open()}
                >
                  Launch
                </Button>
              </td>

              <td>
                Modal in mini size. Mini modal width is <code>300px</code>. To use, add <code>mini</code> prop
              </td>
            </tr>

            <tr>
              <td width="20%">
                Small size modal
              </td>

              <td width="20%">
                <Button
                  icon="play3"
                  iconPosition="right"
                  onClick={() => this._smallModal.open()}
                >
                  Launch
                </Button>
              </td>

              <td>
                Modal in small size. Mini modal width is <code>400px</code>. To use, add <code>small</code> prop
              </td>
            </tr>

            <tr>
              <td width="20%">
                Default size modal
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
                Modal in default size. Default modal width is <code>600px</code>. Since this is a default size, sizing prop isn't required
              </td>
            </tr>

            <tr>
              <td width="20%">
                Large size modal
              </td>

              <td width="20%">
                <Button
                  icon="play3"
                  iconPosition="right"
                  onClick={() => this._largeModal.open()}
                >
                  Launch
                </Button>
              </td>

              <td>
                Modal in large size. Default modal width is <code>900px</code>. To use, add <code>large</code> prop
              </td>
            </tr>

            <tr>
              <td width="20%">
                Full size modal
              </td>

              <td width="20%">
                <Button
                  icon="play3"
                  iconPosition="right"
                  onClick={() => this._fullModal.open()}
                >
                  Launch
                </Button>
              </td>

              <td>
                Modal in full width size. This modal has <code>94%</code> width of the window. To use, add <code>full</code> prop
              </td>
            </tr>
          </tbody>
        </table>

        <Popup
          ref={ref => { this._miniModal = ref }}
          title="Mini modal"
          mini
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
          ref={ref => { this._smallModal = ref }}
          title="Small modal"
          small
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
          ref={ref => { this._defaultModal = ref }}
          title="Default modal"
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
          ref={ref => { this._largeModal = ref }}
          title="Large modal"
          large
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
          ref={ref => { this._fullModal = ref }}
          title="Full modal"
          full
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

export default PopupSizings
