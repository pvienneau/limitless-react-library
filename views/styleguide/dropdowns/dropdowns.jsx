import React from 'react'

import { DropdownMenu, Panel } from 'components'
import './dropdowns.scss'

const ITEMS = [
  'Item 1',
  'Item 2',
  'Item 3',
]

const NESTED_ITEMS = [
  ...ITEMS,
  {
    label: 'Another menu',
    divider: true,
    items: [
      ...ITEMS,
    ],
  },
]

export default class Dropdowns extends React.Component {
  render () {
    return (
      <div className="Dropdowns">
        <section>
          <h6>Dropdown positioning</h6>

          <div className="flex">
            <div className="flex-grow">
              <Panel>
                <h6>Position top</h6>

                <p>Change <code>position</code> prop to <code>top</code></p>

                <DropdownMenu
                  position="top"
                  items={ITEMS}
                >
                  Settings
                </DropdownMenu>
              </Panel>
            </div>

            <div className="flex-grow">
              <Panel>
                <h6>Position right</h6>

                <p>Change <code>position</code> prop to <code>right</code></p>

                <DropdownMenu
                  position="right"
                  items={ITEMS}
                >
                  Settings
                </DropdownMenu>
              </Panel>
            </div>

            <div className="flex-grow">
              <Panel>
                <h6>Position bottom</h6>

                <p>Change <code>position</code> prop to <code>bottom</code></p>

                <DropdownMenu
                  position="bottom"
                  items={ITEMS}
                >
                  Settings
                </DropdownMenu>
              </Panel>
            </div>

            <div className="flex-grow">
              <Panel>
                <h6>Position left</h6>

                <p>Change <code>position</code> prop to <code>left</code></p>

                <DropdownMenu
                  position="left"
                  items={ITEMS}
                >
                  Settings
                </DropdownMenu>
              </Panel>
            </div>
          </div>
        </section>

        <section>
          <h6>Nested menus</h6>

          <div className="flex">
            <div className="flex-grow">
              <Panel>
                <h6>Position top</h6>

                <p>Change <code>position</code> prop to <code>top</code></p>

                <DropdownMenu
                  items={NESTED_ITEMS}
                >
                  Settings
                </DropdownMenu>
              </Panel>
            </div>

            <div className="flex-grow">&nbsp;</div>

            <div className="flex-grow">&nbsp;</div>

            <div className="flex-grow">&nbsp;</div>
          </div>
        </section>
      </div>
    )
  }
}
