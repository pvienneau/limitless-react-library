import React from 'react';

import { DropdownMenu, Panel } from 'components';

import './dropdowns.scss';

export default class Dropdowns extends React.Component {
  render() {
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
                  items={[
                    'Item 1',
                    'Item 2',
                    'Item 3',
                  ]}
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
                  items={[
                    'Item 1',
                    'Item 2',
                    'Item 3',
                  ]}
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
                  items={[
                    'Item 1',
                    'Item 2',
                    'Item 3',
                  ]}
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
                  items={[
                    'Item 1',
                    'Item 2',
                    'Item 3',
                  ]}
                >
                  Settings
                </DropdownMenu>
              </Panel>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
