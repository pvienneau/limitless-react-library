import React from 'react';

import { Container, RadioGroup, CheckboxGroup, Panel, ToggleGroup } from 'components';

export default class Checkboxes extends React.Component {
  render() {
    return (
      <Container className="Checkboxes">
        <Panel
          title="Checkboxes and Radios"
          canCollapse
        >
          <div className="flex">
            <div className="flex-grow">
              <CheckboxGroup
                label="Stacked default checkboxes"
                value={['checked-default']}
                options={[
                  {
                    name: 'Checked default',
                    value: 'checked-default',
                  },
                  {
                    name: 'Unchecked default',
                    value: 'unchecked-default',
                  },
                  {
                    name: 'Disabled default',
                    value: 'disabled-default',
                    disabled: true,
                  }
                ]}
              />

              <CheckboxGroup
                label="Inline default checkboxes"
                value={['checked-default']}
                inline
                options={[
                  {
                    name: 'Checked default',
                    value: 'checked-default',
                  },
                  {
                    name: 'Unchecked default',
                    value: 'unchecked-default',
                  }
                ]}
              />
            </div>

            <div className="flex-grow">
              <RadioGroup
                label="Stacked default radios"
                value="default"
                options={[
                  {
                    name: 'Checked default',
                    value: 'default',
                  },
                  {
                    name: 'Unchecked default',
                    value: 'unchecked',
                  },
                  {
                    name: 'Disabled default',
                    value: 'disabled',
                    disabled: true,
                  }
                ]}
              />

              <RadioGroup
                label="Inline default radios"
                value="default"
                inline
                options={[
                  {
                    name: 'Checked default',
                    value: 'default',
                  },
                  {
                    name: 'Unchecked default',
                    value: 'unchecked',
                  }
                ]}
              />
            </div>
          </div>
        </Panel>

        <Panel
          title="Color options"
          canCollapse
        >
          <div className="flex">
            <div className="flex-grow">
              <CheckboxGroup
                label="Checkboxes"
                value={['primary', 'danger', 'success', 'warning', 'info']}
                options={[
                  {
                    name: 'Primary checkbox',
                    value: 'primary',
                    primary: true,
                  },
                  {
                    name: 'Danger checkbox',
                    value: 'danger',
                    danger: true,
                  },
                  {
                    name: 'Success checkbox',
                    value: 'success',
                    success: true,
                  },
                  {
                    name: 'Warning checkbox',
                    value: 'warning',
                    warning: true,
                  },
                  {
                    name: 'Info checkbox',
                    value: 'info',
                    info: true,
                  }
                ]}
              />
            </div>

            <div className="flex-grow">
              <RadioGroup
                label="Radios"
                value="primary"
                options={[
                  {
                    name: 'Primary checkbox',
                    value: 'primary',
                    primary: true,
                  },
                  {
                    name: 'Danger checkbox',
                    value: 'danger',
                    danger: true,
                  },
                  {
                    name: 'Success checkbox',
                    value: 'success',
                    success: true,
                  },
                  {
                    name: 'Warning checkbox',
                    value: 'warning',
                    warning: true,
                  },
                  {
                    name: 'Info checkbox',
                    value: 'info',
                    info: true,
                  }
                ]}
              />
            </div>
          </div>
        </Panel>

        <Panel
          title="Switchery toggles"
          canCollapse
        >
          <div className="flex">
            <div className="flex-grow">
              <h3>Single label</h3>
              <ToggleGroup
                value={['checked-default', 'checked-disabled']}
                options={[
                  {
                    name: 'Checked switch',
                    value: 'checked-default',
                  },
                  {
                    name: 'Unchecked switch',
                    value: 'unchecked-default',
                  },
                  {
                    name: 'Checked disabled',
                    value: 'checked-disabled',
                    disabled: true,
                  },
                  {
                    name: 'Unchecked disabled',
                    value: 'unchecked-disabled',
                    disabled: true,
                  },
                ]}
              />
            </div>

            <div className="flex-grow">
              <h3>Switcher colors</h3>
              <ToggleGroup
                value={['toggle-primary', 'toggle-danger', 'toggle-info', 'toggle-warning']}
                options={[
                  {
                    name: 'Switch using the <code>primary</code> prop',
                    value: 'toggle-primary',
                    primary: true,
                  },
                  {
                    name: 'Switch using the <code>danger</code> prop',
                    value: 'toggle-danger',
                    danger: true,
                  },
                  {
                    name: 'Switch using the <code>info</code> prop',
                    value: 'toggle-info',
                    info: true,
                  },
                  {
                    name: 'Switch using the <code>warning</code> prop',
                    value: 'toggle-warning',
                    warning: true,
                  },
                ]}
              />
            </div>
          </div>

          <div className="flex">
            <div className="flex-grow">
              <h3>Single label</h3>
              <ToggleGroup
                value={['toggle-large', 'toggle-default', 'toggle-small', 'toggle-mini']}
                options={[
                  {
                    name: 'Switch using the <code>primary</code> prop',
                    value: 'toggle-large',
                    large: true,
                  },
                  {
                    name: 'Switch using the <code>danger</code> prop',
                    value: 'toggle-default',
                  },
                  {
                    name: 'Switch using the <code>info</code> prop',
                    value: 'toggle-small',
                    small: true,
                  },
                  {
                    name: 'Switch using the <code>warning</code> prop',
                    value: 'toggle-mini',
                    mini: true,
                  },
                ]}
              />
            </div>

            <div className="flex-grow"></div>
          </div>
        </Panel>
      </Container>
    );
  }
}
