import React from 'react';

import { Menu, Panel, Container, Badge, Tag, Icon, Toggle, Checkbox, Radio } from 'components';
import './menus.scss';

export default () => (
  <Container className="Menus">
    <h6>Menu Styleguide</h6>

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
            <h6 className="align-center">Basic submenu</h6>

            <p className="align-center">&nbsp;</p>

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
            <h6 className="align-center">Dropup submenu</h6>

            <p className="align-center">Change <code>vertical</code> prop to <code>top</code></p>

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
            <h6 className="align-center">Left submenu</h6>

            <p className="align-center">Change <code>horizontal</code> prop to <code>left</code></p>

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

    <section>
      <h6>Additional sizes</h6>

      <div className="flex">
        <div className="flex-grow">
          <Panel>
            <h6 className="align-center">Large menu size</h6>

            <p className="align-center">&nbsp;</p>

            <Menu
              large
              items={[
                {
                  label: 'Action',
                  icon: 'menu',
                  children: (<Tag primary>Added</Tag>)
                },
                {
                  label: 'Another action',
                  icon: 'folder',
                  children: (<Badge danger>98</Badge>)
                },
                {
                  label: 'Something else here',
                  icon: 'newspaper',
                  children: <span className="flex"><Icon>command</Icon>F</span>,
                },
                {
                  label: 'More options',
                  divider: true,
                  icon: 'cog',
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
            <h6 className="align-center">Small menu size</h6>

            <p className="align-center">&nbsp;</p>

            <Menu
              small
              items={[
                {
                  label: 'Action',
                  icon: 'menu',
                  children: (<Tag primary>Added</Tag>)
                },
                {
                  label: 'Another action',
                  icon: 'folder',
                  children: (<Badge danger>98</Badge>)
                },
                {
                  label: 'Something else here',
                  icon: 'newspaper',
                  children: <span className="flex"><Icon>command</Icon>F</span>,
                },
                {
                  label: 'More options',
                  divider: true,
                  icon: 'cog',
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
            <h6 className="align-center">Mini menu size</h6>

            <p className="align-center">&nbsp;</p>

            <Menu
              mini
              items={[
                {
                  label: 'Action',
                  icon: 'menu',
                  children: (<Tag primary>Added</Tag>)
                },
                {
                  label: 'Another action',
                  icon: 'folder',
                  children: (<Badge danger>98</Badge>)
                },
                {
                  label: 'Something else here',
                  icon: 'newspaper',
                  children: <span className="flex"><Icon>command</Icon>F</span>,
                },
                {
                  label: 'More options',
                  divider: true,
                  icon: 'cog',
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

    <section>
      <h6>Menu components</h6>

      <p>Icons, checkboxes, radios, switches, etc.</p>

      <div className="flex">
        <div className="flex-grow">
          <Panel>
            <h6 className="align-center">Left menu item icons</h6>

            <p className="align-center">Icon in <code>position</code> prop set to <code>left</code></p>

            <Menu
              small
              items={[
                {
                  label: 'Action',
                  icon: 'menu'
                },
                {
                  label: 'Another action',
                  icon: 'folder'
                },
                {
                  label: 'Something else here',
                  icon: 'newspaper'
                },
                {
                  label: 'One more separated line',
                  divider: true,
                  icon: 'cog',
                },
              ]}
            />
          </Panel>
        </div>

        <div className="flex-grow">
          <Panel>
            <h6 className="align-center">Right menu item icons</h6>

            <p className="align-center">Icon in <code>position</code> prop set to <code>right</code></p>

            <Menu
              small
              items={[
                {
                  label: 'Action',
                  icon: 'move-up'
                },
                {
                  label: 'Another action',
                  icon: 'move-down'
                },
                {
                  label: 'Something else here',
                  icon: 'make-group'
                },
                {
                  label: 'One more separated line',
                  divider: true,
                  icon: 'ungroup',
                },
              ]}
            />
          </Panel>
        </div>

        <div className="flex-grow">
          <Panel>
            <h6 className="align-center">Icon and text combo</h6>

            <p className="align-center">Combine text and icons for annotations</p>

            <Menu
              small
              items={[
                {
                  label: 'Find',
                  children: <span className="flex"><Icon>command</Icon>F</span>
                },
                {
                  label: 'Find next',
                  children: <span className="flex"><Icon>command</Icon>G</span>
                },
                {
                  label: 'Find previous',
                  children: <span className="flex"><Icon>shift</Icon><Icon>command</Icon>G</span>
                },
                {
                  label: 'Incremental find',
                  divider: true,
                  children: <span className="flex"><Icon>command</Icon>I</span>
                },
              ]}
            />
          </Panel>
        </div>
      </div>

      <div className="flex">
        <div className="flex-grow">
          <Panel>
            <h6 className="align-center">Menu with tags</h6>

            <p className="align-center">Menu items with <code>Tag</code></p>

            <Menu
              small
              items={[
                {
                  label: 'Action',
                  children: <Tag primary>Added</Tag>
                },
                {
                  label: 'Another action',
                  children: <Tag danger>Bugs</Tag>
                },
                {
                  label: 'Something else here',
                  children: <Tag success>Done</Tag>
                },
                {
                  label: 'One more separated line',
                  divider: true,
                  children: <Tag info>New</Tag>
                },
              ]}
            />
          </Panel>
        </div>

        <div className="flex-grow">
          <Panel>
            <h6 className="align-center">Menu with badges</h6>

            <p className="align-center">Menu items with <code>Badge</code></p>

            <Menu
              small
              items={[
                {
                  label: 'Action',
                  children: <Badge primary>65</Badge>
                },
                {
                  label: 'Another action',
                  children: <Badge danger>23</Badge>
                },
                {
                  label: 'Something else here',
                  children: <Badge success>83</Badge>
                },
                {
                  label: 'One more separated line',
                  divider: true,
                  children: <Badge info>98</Badge>
                },
              ]}
            />
          </Panel>
        </div>

        <div className="flex-grow">
          &nbsp;
        </div>
      </div>

      <div className="flex">
        <div className="flex-grow">
          <Panel>
            <h6 className="align-center">Menu with checkboxes</h6>

            <p className="align-center">&nbsp;</p>

            <Menu
              small
              items={[
                {
                  label: 'Some action',
                  children: <Checkbox />
                },
                {
                  label: 'Selected action',
                  children: <Checkbox checked />
                },
                {
                  label: 'Disabled action',
                  divider: true,
                  children: <Checkbox disabled />
                },
                {
                  label: 'Another action',
                  children: <Checkbox checked />
                },
              ]}
            />
          </Panel>
        </div>

        <div className="flex-grow">
          <Panel>
            <h6 className="align-center">Menu with radios</h6>

            <p className="align-center">&nbsp;</p>

            <Menu
              small
              items={[
                {
                  label: 'Some action',
                  children: <Radio />
                },
                {
                  label: 'Selected action',
                  children: <Radio checked />
                },
                {
                  label: 'Disabled action',
                  divider: true,
                  children: <Radio disabled />
                },
                {
                  label: 'Another action',
                  children: <Radio checked />
                },
              ]}
            />
          </Panel>
        </div>

        <div className="flex-grow">
          <Panel>
            <h6 className="align-center">Menu with switches</h6>

            <p className="align-center">&nbsp;</p>

            <Menu
              small
              items={[
                {
                  label: 'Some action',
                  children: <Toggle mini />
                },
                {
                  label: 'Selected action',
                  children: <Toggle mini checked />
                },
                {
                  label: 'Disabled action',
                  divider: true,
                  children: <Toggle mini disabled />
                },
                {
                  label: 'Another action',
                  children: <Toggle mini checked />
                },
              ]}
            />
          </Panel>
        </div>
      </div>
    </section>
  </Container>
)
