import React, { Component } from 'react'

import { Panel, Tab } from 'components'
import './tabs.scss'

const generateItems = (activeContent) => [
  {
    label: 'Active',
    render: activeContent,
  },
  {
    label: 'Inactive',
    render: 'Food truck fixie locavore, accusamus mcsweeney\'s marfa nulla single-origin coffee squid laeggin.',
  },
  {
    label: 'Dropdown',
    items: [
      {
        label: 'Dropdown tab',
        render: 'DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg whatever.',
      },
      {
        label: 'Another tab',
        render: 'Aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthet.',
      },
    ],
  },
]

export default class Tabs extends Component {
  render () {
    return (
      <div className="Tabs">
        <section>
          <h4>
            Basic tabs layout
            <small>Default tabs layout options</small>
          </h4>

          <div className="tabs-container">
            <Panel title="Basic tabs" flat>
              <Tab
                items={generateItems(
                  <span>Basic tabs example.</span>
                )}
              />
            </Panel>

            <Panel title="Basic justified" flat>
              <Tab
                items={generateItems(
                  <span>Easily make tabs equal widths of their parent with <code>justified</code> prop.</span>
                )}
                justified
              />
            </Panel>

            <Panel title="Basic rounded" flat>
              <Tab
                items={generateItems(
                  <span>Use <code>rounded</code> prop to round corners if the tabs are a separate component.</span>
                )}
                rounded
              />
            </Panel>

            <Panel title="Justified rounded" flat>
              <Tab
                items={generateItems(
                  <span>For justified tabs use .nav-justified <code>justified</code> prop.</span>
                )}
                rounded
                justified
              />
            </Panel>

            <Panel title="Highlighted tabs" flat>
              <Tab
                items={generateItems(
                  <span>Highlight top border of the active tab by adding <code>highlight</code> prop.</span>
                )}
                highlight
              />
            </Panel>

            <Panel title="Highlighted justified" flat>
              <Tab
                items={generateItems(
                  <span>To use in tabs with equal widths add <code>justified</code> prop.</span>
                )}
                highlight
                justified
              />
            </Panel>
          </div>
        </section>
      </div>
    )
  }
}
