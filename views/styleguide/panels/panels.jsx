import React from 'react';

import { Container, Panel } from 'components';
import './panels.scss';

export default class Panels extends React.Component {
  render() {
    return (
        <div>
          <Container className="Panels">
            <section>
              <h4>
                Panel heading options
                <small>Panel heading controls and subtitles</small>
              </h4>

              <div className="grid">
                <div className="col">
                  <Panel
                    title="Panel title"
                  >
                    Basic panel example without heading elements
                  </Panel>
                </div>

                <div className="col">
                  <Panel
                    title="Panel controls"
                    canCollapse
                    canDelete
                    canRefresh
                  >
                    Basic panel with panel controls
                  </Panel>
                </div>

                <div className="col">
                  <Panel
                    title="Panel title"
                    subtitle="With subtitle"
                  >
                    Basic panel with block heading subtitle
                  </Panel>
                </div>

                <div className="col">
                  <Panel
                    title="Panel controls"
                    subtitle="With subtitle"
                    canCollapse
                    canDelete
                    canRefresh
                  >
                    Panel with block heading subtitle and panel controls
                  </Panel>
                </div>
              </div>
            </section>

            <section>
              <h4>
                Basic panel styles
                <small>Available panel styles and colors</small>
              </h4>

              <div className="grid">
                <div className="col">
                  <Panel
                    title="Default panel"
                    canCollapse
                    canDelete
                    canRefresh
                  >
                    Default panel
                  </Panel>
                </div>

                <div className="col">
                  <Panel
                    title="Flat panel"
                    flat
                  >
                    Flat panel using the <code>flat</code> prop
                  </Panel>
                </div>

                <div className="col">
                  <Panel
                    title="White panel"
                    canCollapse
                    canDelete
                    canRefresh
                    fill={false}
                  >
                    White panel using the <code>{'fill={false}'}</code> prop
                  </Panel>
                </div>

                <div className="col">
                  <Panel
                    title="White panel"
                    canCollapse
                    canDelete
                    canRefresh
                    success
                  >
                    Success panel using the <code>success</code> prop
                  </Panel>
                </div>

                <div className="col">
                  <Panel
                    title="White panel"
                    canCollapse
                    canDelete
                    canRefresh
                    primary
                  >
                    Primary panel using the <code>primary</code> prop
                  </Panel>
                </div>

                <div className="col">
                  <Panel
                    title="White panel"
                    canCollapse
                    canDelete
                    canRefresh
                    warning
                  >
                    Warning panel using the <code>warning</code> prop
                  </Panel>
                </div>

                <div className="col">
                  <Panel
                    title="White panel"
                    canCollapse
                    canDelete
                    canRefresh
                    danger
                  >
                    Danger panel using the <code>danger</code> prop
                  </Panel>
                </div>

                <div className="col">
                  <Panel
                    title="White panel"
                    canCollapse
                    canDelete
                    canRefresh
                    info
                  >
                    Info panel using the <code>info</code> prop
                  </Panel>
                </div>
              </div>
            </section>
          </Container>
        </div>
    );
  }
}
