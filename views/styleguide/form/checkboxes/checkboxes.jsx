import React from 'react';

import { Container, RadioGroup, CheckboxGroup, Panel } from 'components';

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
                label="Stacked default"
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

              <CheckboxGroup
                label="Inline default"
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

            <div className="flex-grow">
              <RadioGroup
                label="Stacked default"
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
                label="Inline default"
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
                label="Checkboxes"
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
      </Container>
    );
  }
}
