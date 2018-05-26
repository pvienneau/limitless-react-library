import React, { Component } from 'react'

import { Button, Popup } from 'components'

class PopupTitles extends Component {
  render () {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th colSpan="3">
                Heading options
              </th>
            </tr>

            <tr>
              <td width="20%">
                Modal with H1 heading
              </td>

              <td width="20%">
                <Button
                  icon="play3"
                  iconPosition="right"
                  onClick={() => this._h1Modal.open()}
                >
                  Launch
                </Button>
              </td>

              <td>
                Modal title in <code>H1</code> size. In all heading sizes, vertical position of the close button will be automatically adjusted to the middle of the modal header
              </td>
            </tr>

            <tr>
              <td width="20%">
                Modal with H2 heading
              </td>

              <td width="20%">
                <Button
                  icon="play3"
                  iconPosition="right"
                  onClick={() => this._h2Modal.open()}
                >
                  Launch
                </Button>
              </td>

              <td>
                Modal title in <code>H2</code> size
              </td>
            </tr>

            <tr>
              <td width="20%">
                Modal with H3 heading
              </td>

              <td width="20%">
                <Button
                  icon="play3"
                  iconPosition="right"
                  onClick={() => this._h3Modal.open()}
                >
                  Launch
                </Button>
              </td>

              <td>
                Modal title in <code>H3</code> size
              </td>
            </tr>

            <tr>
              <td width="20%">
                Modal with H4 heading
              </td>

              <td width="20%">
                <Button
                  icon="play3"
                  iconPosition="right"
                  onClick={() => this._h4Modal.open()}
                >
                  Launch
                </Button>
              </td>

              <td>
                Modal title in <code>H4</code> size
              </td>
            </tr>

            <tr>
              <td width="20%">
                Modal with H5 heading
              </td>

              <td width="20%">
                <Button
                  icon="play3"
                  iconPosition="right"
                  onClick={() => this._h5Modal.open()}
                >
                  Launch
                </Button>
              </td>

              <td>
                Modal title in <code>H5</code> size
              </td>
            </tr>

            <tr>
              <td width="20%">
                Modal with H6 heading
              </td>

              <td width="20%">
                <Button
                  icon="play3"
                  iconPosition="right"
                  onClick={() => this._h6Modal.open()}
                >
                  Launch
                </Button>
              </td>

              <td>
                Modal title in <code>H6</code> size
              </td>
            </tr>
          </tbody>
        </table>

        <Popup
          ref={ref => { this._h1Modal = ref }}
          title={<h1>H1 heading modal</h1>}
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
          ref={ref => { this._h2Modal = ref }}
          title={<h2>H2 heading modal</h2>}
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
          ref={ref => { this._h3Modal = ref }}
          title={<h3>H3 heading modal</h3>}
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
          ref={ref => { this._h4Modal = ref }}
          title={<h4>H4 heading modal</h4>}
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
          ref={ref => { this._h5Modal = ref }}
          title={<h5>H5 heading modal</h5>}
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
          ref={ref => { this._h6Modal = ref }}
          title={<h6>H6 heading modal</h6>}
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

export default PopupTitles
