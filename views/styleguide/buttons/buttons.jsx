import React from 'react';

import { Button, Panel, Container, Dropdown } from 'components';
import './buttons.scss';

const ITEMS = [
  {
    label: 'Item 1',
  },
  {
    label: 'Item 2',
  },
  {
    label: 'Item 3',
  },
]

export default class Buttons extends React.Component {
  render() {
    return (
      <Container className="Buttons">
        <h1>Buttons Styleguide</h1>

        <div className="row-theme">
          <Panel primary>
            <h6>Default button</h6>

            <p>Default light button example</p>

            <Button>
              Default button
            </Button>
          </Panel>

          <Panel primary>
            <h6>Default with icon</h6>

            <p>Available in both directions</p>

            <Button icon="home">
              With icon
            </Button>

            <Button icon="home" iconPosition="right">
              With icon
            </Button>
          </Panel>

          <Panel primary>
            <h6>Default with menu</h6>

            <p>Default button with dropdown</p>

            <Dropdown items={ITEMS}>
              Dropdown
            </Dropdown>
          </Panel>
        </div>

        <div className="row-theme">
          <Panel primary>
            <h6>Colored button</h6>

            <p>Default light button example</p>

            <Button primary>
              Default button
            </Button>
          </Panel>

          <Panel primary>
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

          <Panel primary>
            <h6>Colored with menu</h6>

            <p>Colored button with dropdown</p>

            <Dropdown
              primary
              items={ITEMS}
            >
              Dropdown
            </Dropdown>
          </Panel>
        </div>

        <div className="row-theme">
          <Panel primary>
            <h6>Rounded button</h6>

            <p>Works with all button types</p>

            <Button
              danger
              rounded
            >
              Default button
            </Button>
          </Panel>

          <Panel primary>
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

          <Panel primary>
            <h6>Rounded with menu</h6>

            <p>Rounded button with dropdown</p>

            <Dropdown
              danger
              rounded
              items={ITEMS}
            >
              Dropdown
            </Dropdown>
          </Panel>
        </div>

        <div className="row-theme">
          <Panel primary>
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

          <Panel primary>
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

          <Panel primary>
            <h6>Labeled with menu</h6>

            <p>Labeled button with dropdown</p>

            <Dropdown
              danger
              labeled
              icon="home"
              items={ITEMS}
            >
              Dropdown
            </Dropdown>
          </Panel>
        </div>

        <div className="row-theme">
          <Panel primary>
            <h6>Flat button</h6>

            <p>Transparent background</p>

            <Button
              danger
              flat
            >
              Flat button
            </Button>
          </Panel>

          <Panel primary>
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

          <Panel primary>
            <h6>Flat with menu</h6>

            <p>Flat button with dropdown</p>

            <Dropdown
              danger
              flat
              items={ITEMS}
            >
              Dropdown
            </Dropdown>
          </Panel>
        </div>

        <div className="row-theme">
          <Panel primary>
            <h6>Transparent button</h6>

            <p>Transparent background</p>

            <Button
              danger
              fill={false}
            >
              Flat button
            </Button>
          </Panel>

          <Panel primary>
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

          <Panel primary>
            <h6>Transparent with menu</h6>

            <p>Transparent button with dropdown</p>

            <Dropdown
              danger
              fill={false}
              items={ITEMS}
            >
              Dropdown
            </Dropdown>
          </Panel>
        </div>
      </Container>
    );
  }
}
