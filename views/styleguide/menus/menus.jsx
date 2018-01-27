import React from 'react';

import { Menu, Panel, Container } from 'components';
import './menus.scss';

export default () => (
  <Container className="Menus">
    <h1>Menu Styleguide</h1>

    <section>
      <h6>Basic Menus</h6>

      <div className="flex">
        <div className="flex-grow">
          <Panel>
            <h6 className="align-center">
              Basic Menus
            </h6>

            <p className="align-center">
              Default menu styling
            </p>

            <Menu
              items={[
                'Action',
                'Another action',
                'Something else here',
                {
                  divider: true,
                },
                'One more separated line'
              ]}
            />
          </Panel>
        </div>

        <div className="flex-grow">
          <Panel>
            <h6 className="align-center">
              Disabled items
            </h6>

            <p className="align-center">
              Disable with <code>disabled</code> prop
            </p>

            <Menu
              items={[
                'Action',
                'Another action',
                {
                  label: 'Disabled item',
                  disabled: true,
                },
                {
                  divider: true,
                },
                'One more separated line'
              ]}
            />
          </Panel>
        </div>

        <div className="flex-grow">
          <Panel>
            <h6 className="align-center">
              Active menu item
            </h6>

            <p className="align-center">
              Make the item active with <code>active</code> prop
            </p>

            <Menu
              items={[
                'Action',
                {
                  label: 'Active item',
                  active: true,
                },
                'Something else here',,
                {
                  divider: true,
                },
                'One more separated line'
              ]}
            />
          </Panel>
        </div>
      </div>
    </section>

    <section>
      <h6>Menu headers</h6>

      <div className="flex">
        <div className="flex-grow">
          <Panel>
            <h6 className="align-center">
              Default header
            </h6>

            <p className="align-center">
              Basic header styling
            </p>

            <Menu
              items={[
                {
                  label: 'Header first',
                  header: true,
                },
                'Action',
                'Another action',
                {
                  label: 'Header second',
                  header: true,
                },
                'Something else here',
                'One more line'
              ]}
            />
          </Panel>
        </div>

        <div className="flex-grow">
          <Panel>
            <h6 className="align-center">
              Highlighted header
            </h6>

            <p className="align-center">
              Highlight header using <code>highlight</code> prop
            </p>

            <Menu
              items={[
                {
                  label: 'Header first',
                  header: true,
                  highlight: true,
                },
                'Action',
                'Another action',
                {
                  label: 'Header second',
                  header: true,
                  highlight: true,
                },
                'Something else here',
                'One more line'
              ]}
            />
          </Panel>
        </div>

        <div className="flex-grow">
          &nbsp;
        </div>
      </div>
    </section>

    <section>
      <h6>Submenus</h6>

      <div className="flex">
        <div className="flex-grow">
          <Panel>
            <h6>Basic submenu</h6>

            <p>&nbsp;</p>

            <Menu
              items={[
                {
                  label: 'Action',
                },
                {
                  label: 'Another action',
                },
                {
                  label: 'Something else here',
                },
                {
                  label: 'More options',
                  divider: true,
                  items: [
                    {
                      label: 'Second level link',
                    },
                    {
                      label: 'Second level link',
                      items: [
                        {
                          label: 'Third level link',
                        },
                        {
                          label: 'Third level link',
                        },
                        {
                          label: 'Third level link',
                        },
                      ],
                    },
                    {
                      label: 'Second level link',
                    },
                  ],
                },
              ]}
            />
          </Panel>
        </div>

        <div className="flex-grow">
          <Panel>
            <h6>Dropup submenu</h6>

            <p>Change <code>vertical</code> prop to <code>top</code></p>

            <Menu
              items={[
                {
                  label: 'Action',
                },
                {
                  label: 'Another action',
                },
                {
                  label: 'Something else here',
                },
                {
                  label: 'More options',
                  divider: true,
                  items: [
                    {
                      label: 'Second level link',
                    },
                    {
                      label: 'Second level link',
                      items: [
                        {
                          label: 'Third level link',
                        },
                        {
                          label: 'Third level link',
                        },
                        {
                          label: 'Third level link',
                        },
                      ],
                    },
                    {
                      label: 'Second level link',
                    },
                  ],
                },
              ]}
            />
          </Panel>
        </div>

        <div className="flex-grow">
          <Panel>
            <h6>Left submenu</h6>

            <p>Change <code>horizontal</code> prop to <code>left</code></p>

            <Menu
              items={[
                {
                  label: 'Action',
                },
                {
                  label: 'Another action',
                },
                {
                  label: 'Something else here',
                },
                {
                  label: 'More options',
                  divider: true,
                  items: [
                    {
                      label: 'Second level link',
                    },
                    {
                      label: 'Second level link',
                      items: [
                        {
                          label: 'Third level link',
                        },
                        {
                          label: 'Third level link',
                        },
                        {
                          label: 'Third level link',
                        },
                      ],
                    },
                    {
                      label: 'Second level link',
                    },
                  ],
                },
              ]}
            />
          </Panel>
        </div>
      </div>
    </section>
  </Container>
)
