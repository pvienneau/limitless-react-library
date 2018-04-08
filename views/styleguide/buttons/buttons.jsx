import React from 'react'

import { Button, Panel, Container, DropdownMenu } from 'components'
import './buttons.scss'

const ITEMS = [
  {
    label: 'Action',
    icon: 'menu7',
  },
  {
    label: 'Another action',
    icon: 'screen-full',
  },
  {
    label: 'One more action',
    icon: 'mail5',
  },
  {
    label: 'Separated line',
    divider: true,
    icon: 'cog',
  },
]

export default class Buttons extends React.Component {
  render () {
    return (
      <Container className="Buttons">
        <h1>Buttons Styleguide</h1>

        <div className="row-theme">
          <Panel>
            <h6>Default button</h6>

            <p>Default light button example</p>

            <Button>
              Default button
            </Button>
          </Panel>

          <Panel>
            <h6>Default with icon</h6>

            <p>Available in both directions</p>

            <Button icon="home">
              With icon
            </Button>

            <Button icon="home" iconPosition="right">
              With icon
            </Button>
          </Panel>

          <Panel>
            <h6>Default with menu</h6>

            <p>Default button with dropdown</p>

            <DropdownMenu items={ITEMS}>
              Dropdown
            </DropdownMenu>
          </Panel>
        </div>

        <div className="row-theme">
          <Panel>
            <h6>Colored button</h6>

            <p>Default light button example</p>

            <Button primary>
              Default button
            </Button>
          </Panel>

          <Panel>
            <h6>Colored with icon</h6>

            <p>Available in both directions</p>

            <Button
              primary
              icon="home"
            >
              With icon
            </Button>

            <Button
              primary
              icon="home"
              iconPosition="right"
            >
              With icon
            </Button>
          </Panel>

          <Panel>
            <h6>Colored with menu</h6>

            <p>Colored button with dropdown</p>

            <DropdownMenu
              primary
              items={ITEMS}
            >
              Dropdown
            </DropdownMenu>
          </Panel>
        </div>

        <div className="row-theme">
          <Panel>
            <h6>Rounded button</h6>

            <p>Works with all button types</p>

            <Button
              danger
              rounded
            >
              Default button
            </Button>
          </Panel>

          <Panel>
            <h6>Rounded with icon</h6>

            <p>Available in both directions</p>

            <Button
              danger
              rounded
              icon="home"
            >
              With icon
            </Button>

            <Button
              danger
              rounded
              icon="home"
              iconPosition="right"
            >
              With icon
            </Button>
          </Panel>

          <Panel>
            <h6>Rounded with menu</h6>

            <p>Rounded button with dropdown</p>

            <DropdownMenu
              danger
              rounded
              items={ITEMS}
            >
              Dropdown
            </DropdownMenu>
          </Panel>
        </div>

        <div className="row-theme">
          <Panel>
            <h6>Labeled button</h6>

            <p>Works with all button colors</p>

            <Button
              danger
              labeled
              icon="home"
            >
              Default button
            </Button>
          </Panel>

          <Panel>
            <h6>Rounded with label</h6>

            <p>Available in both directions</p>

            <Button
              danger
              labeled
              rounded
              icon="home"
            >
              With icon
            </Button>

            <Button
              danger
              labeled
              rounded
              icon="home"
              iconPosition="right"
            >
              With icon
            </Button>
          </Panel>

          <Panel>
            <h6>Labeled with menu</h6>

            <p>Labeled button with dropdown</p>

            <DropdownMenu
              danger
              labeled
              icon="home"
              items={ITEMS}
            >
              Dropdown
            </DropdownMenu>
          </Panel>
        </div>

        <div className="row-theme">
          <Panel>
            <h6>Flat button</h6>

            <p>Transparent background</p>

            <Button
              danger
              flat
            >
              Transparent button
            </Button>
          </Panel>

          <Panel>
            <h6>Flat with icon</h6>

            <p>Available in both directions</p>

            <Button
              danger
              flat
              icon="home"
            >
              With icon
            </Button>

            <Button
              danger
              flat
              icon="home"
              iconPosition="right"
            >
              With icon
            </Button>
          </Panel>

          <Panel>
            <h6>Flat with menu</h6>

            <p>Flat button with dropdown</p>

            <DropdownMenu
              danger
              flat
              items={ITEMS}
            >
              Dropdown
            </DropdownMenu>
          </Panel>
        </div>

        <div className="row-theme">
          <Panel>
            <h6>Transparent button</h6>

            <p>Transparent background</p>

            <Button
              danger
              fill={false}
            >
              Flat button
            </Button>
          </Panel>

          <Panel>
            <h6>Transparent with icon</h6>

            <p>Available in both directions</p>

            <Button
              danger
              fill={false}
              icon="home"
            >
              With icon
            </Button>

            <Button
              danger
              fill={false}
              icon="home"
              iconPosition="right"
            >
              With icon
            </Button>
          </Panel>

          <Panel>
            <h6>Transparent with menu</h6>

            <p>Transparent button with dropdown</p>

            <DropdownMenu
              danger
              fill={false}
              items={ITEMS}
            >
              Dropdown
            </DropdownMenu>
          </Panel>
        </div>

        <div className="row-theme">
          <Panel>
            <h6>Single icon button</h6>

            <p>Button with a single icon only</p>

            <Button
              primary
              icon="menu"
            />
          </Panel>

          <Panel>
            <h6>Rounded icon button</h6>

            <p>Work with <em>all</em> button types</p>

            <Button
              rounded
              primary
              icon="menu"
            />
          </Panel>

          <Panel>
            <h6>Icon with menu</h6>

            <p>Icon buttons with dropdown</p>

            <DropdownMenu
              primary
              icon="menu"
              items={ITEMS}
            />
          </Panel>
        </div>

        <section>
          <div className="flex">
            <div className="flex-grow">
              <Panel>
                <h6 className="align-center">Available button styling</h6>

                <p className="align-center">Button sizing and color presets</p>

                <Button
                  xlarge
                  primary
                  icon="bubbles2"
                >
                  Extra large size
                </Button>

                <Button
                  large
                  danger
                  icon="bubbles2"
                >
                  Large size
                </Button>

                <Button
                  success
                  icon="bubbles2"
                >
                  Default size
                </Button>

                <Button
                  small
                  warning
                  icon="bubbles2"
                >
                  Small size
                </Button>

                <Button
                  mini
                  info
                  icon="bubbles2"
                >
                  Mini size
                </Button>
              </Panel>
            </div>

            <div className="flex-grow">
              <Panel>
                <h6 className="align-center">Labeled button styling</h6>

                <p className="align-center">Available styling of <code>labeled</code> button</p>

                <Button
                  xlarge
                  primary
                  icon="bubbles2"
                  labeled
                >
                  Extra large size
                </Button>

                <Button
                  large
                  danger
                  icon="bubbles2"
                  labeled
                >
                  Large size
                </Button>

                <Button
                  success
                  icon="bubbles2"
                  labeled
                >
                  Default size
                </Button>

                <Button
                  small
                  warning
                  icon="bubbles2"
                  labeled
                >
                  Small size
                </Button>

                <Button
                  mini
                  info
                  icon="bubbles2"
                  labeled
                >
                  Mini size
                </Button>
              </Panel>
            </div>

            <div className="flex-grow">
              <Panel>
                <h6 className="align-center">Rounded button styling</h6>

                <p className="align-center">Available styling of <code>rounded</code> button</p>

                <Button
                  xlarge
                  primary
                  icon="bubbles2"
                  rounded
                >
                  Extra large size
                </Button>

                <Button
                  large
                  danger
                  icon="bubbles2"
                  rounded
                >
                  Large size
                </Button>

                <Button
                  success
                  icon="bubbles2"
                  rounded
                >
                  Default size
                </Button>

                <Button
                  small
                  warning
                  icon="bubbles2"
                  rounded
                >
                  Small size
                </Button>

                <Button
                  mini
                  info
                  icon="bubbles2"
                  rounded
                >
                  Mini size
                </Button>
              </Panel>
            </div>
          </div>
        </section>
      </Container>
    )
  }
}
