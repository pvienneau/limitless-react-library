import React, { Component } from 'react'

import { Alert, Panel, Grid } from 'components'

export default class Alerts extends Component {
  render () {
    return (
      <div className="Alerts">
        <Panel
          title="Default alerts"
          flat
        >
          <p>
            Provide contextual feedback messages for typical user actions with the handful of available and flexible <code>Alert</code> messages.
          </p>

          <Grid columns={2}>
            <section>
              <h5>Primary alert</h5>

              <Alert
                primary
                dismissable
              >
                <strong>Morning!</strong> We're glad to <strong>see you again</strong> and wish you a nice day.
              </Alert>
            </section>

            <section>
              <h5>Warning alert</h5>

              <Alert
                warning
                dismissable
              >
                <strong>Warning!</strong> <strong>Better check yourself</strong>, you're not looking too good.
              </Alert>
            </section>

            <section>
              <h5>Danger alert</h5>

              <Alert
                danger
                dismissable
              >
                <strong>Oh snap!</strong> Change a few things up and <strong>try submitting again</strong>.
              </Alert>
            </section>

            <section>
              <h5>Info alert</h5>

              <Alert
                info
                dismissable
              >
                <strong>Heads up!</strong> This alert needs your attention, but it's not <strong>super important</strong>.
              </Alert>
            </section>

            <section>
              <h5>Success alert</h5>

              <Alert
                success
                dismissable
              >
                <strong>Well done!</strong> You successfully read <strong>this important</strong> alert message.
              </Alert>
            </section>
          </Grid>
        </Panel>

        <Panel
          title="Bordered alerts"
          flat
        >
          <p>
            Examples of <code>bordered</code> alerts. Basically, any alert could have a colored border, except <code>solid</code> alerts. This stronger border adds more visual separation, it doesn't attract too much attention, but in the same time highlights a message importance using contextual border, background and text colors.
          </p>

          <Grid columns={2}>
            <section>
              <h5>Primary alert</h5>

              <Alert
                primary
                dismissable
                bordered
              >
                <strong>Morning!</strong> We're glad to <strong>see you again</strong> and wish you a nice day.
              </Alert>
            </section>

            <section>
              <h5>Warning alert</h5>

              <Alert
                warning
                dismissable
                bordered
              >
                <strong>Warning!</strong> <strong>Better check yourself</strong>, you're not looking too good.
              </Alert>
            </section>

            <section>
              <h5>Danger alert</h5>

              <Alert
                danger
                dismissable
                bordered
              >
                <strong>Oh snap!</strong> Change a few things up and <strong>try submitting again</strong>.
              </Alert>
            </section>

            <section>
              <h5>Info alert</h5>

              <Alert
                info
                dismissable
                bordered
              >
                <strong>Heads up!</strong> This alert needs your attention, but it's not <strong>super important</strong>.
              </Alert>
            </section>

            <section>
              <h5>Success alert</h5>

              <Alert
                success
                dismissable
                bordered
              >
                <strong>Well done!</strong> You successfully read <strong>this important</strong> alert message.
              </Alert>
            </section>
          </Grid>
        </Panel>

        <Panel
          title="Bordered alerts with icon"
          flat
        >
          <p>
            Examples of <code>bordered</code> alerts with <code>icon</code>. These alerts have a wide left border and contextual <code>icon</code>.
          </p>

          <Grid columns={2}>
            <section>
              <h5>Primary alert</h5>

              <Alert
                primary
                dismissable
                bordered
                icon
              >
                <strong>Morning!</strong> We're glad to <strong>see you again</strong> and wish you a nice day.
              </Alert>
            </section>

            <section>
              <h5>Warning alert</h5>

              <Alert
                warning
                dismissable
                bordered
                icon
              >
                <strong>Warning!</strong> <strong>Better check yourself</strong>, you're not looking too good.
              </Alert>
            </section>

            <section>
              <h5>Danger alert</h5>

              <Alert
                danger
                dismissable
                bordered
                icon
              >
                <strong>Oh snap!</strong> Change a few things up and <strong>try submitting again</strong>.
              </Alert>
            </section>

            <section>
              <h5>Info alert</h5>

              <Alert
                info
                dismissable
                bordered
                icon
              >
                <strong>Heads up!</strong> This alert needs your attention, but it's not <strong>super important</strong>.
              </Alert>
            </section>

            <section>
              <h5>Success alert</h5>

              <Alert
                success
                dismissable
                bordered
                icon
              >
                <strong>Well done!</strong> You successfully read <strong>this important</strong> alert message.
              </Alert>
            </section>
          </Grid>
        </Panel>

        <Panel
          title="Solid alerts"
          flat
        >
          <p>
            Examples of alerts with <code>solid</code> background color. This type of alerts are useful when you need to highlight some important information and attract more attention to it.
          </p>

          <Grid columns={2}>
            <section>
              <h5>Primary alert</h5>

              <Alert
                primary
                dismissable
                solid
              >
                <strong>Morning!</strong> We're glad to <strong>see you again</strong> and wish you a nice day.
              </Alert>
            </section>

            <section>
              <h5>Warning alert</h5>

              <Alert
                warning
                dismissable
                solid
              >
                <strong>Warning!</strong> <strong>Better check yourself</strong>, you're not looking too good.
              </Alert>
            </section>

            <section>
              <h5>Danger alert</h5>

              <Alert
                danger
                dismissable
                solid
              >
                <strong>Oh snap!</strong> Change a few things up and <strong>try submitting again</strong>.
              </Alert>
            </section>

            <section>
              <h5>Info alert</h5>

              <Alert
                info
                dismissable
                solid
              >
                <strong>Heads up!</strong> This alert needs your attention, but it's not <strong>super important</strong>.
              </Alert>
            </section>

            <section>
              <h5>Success alert</h5>

              <Alert
                success
                dismissable
                solid
              >
                <strong>Well done!</strong> You successfully read <strong>this important</strong> alert message.
              </Alert>
            </section>
          </Grid>
        </Panel>

        <Panel
          title="Solid alert with icon"
          flat
        >
          <p>
            Examples of alerts with <code>solid</code> background color with <code>icon</code>. Default solid alerts can be mixed with <code>icon</code> in order to display contextual icon and darker left border. They perfectly suit for different kinds of notifications.
          </p>

          <Grid columns={2}>
            <section>
              <h5>Primary alert</h5>

              <Alert
                primary
                dismissable
                solid
                icon
              >
                <strong>Morning!</strong> We're glad to <strong>see you again</strong> and wish you a nice day.
              </Alert>
            </section>

            <section>
              <h5>Warning alert</h5>

              <Alert
                warning
                dismissable
                solid
                icon
              >
                <strong>Warning!</strong> <strong>Better check yourself</strong>, you're not looking too good.
              </Alert>
            </section>

            <section>
              <h5>Danger alert</h5>

              <Alert
                danger
                dismissable
                solid
                icon
              >
                <strong>Oh snap!</strong> Change a few things up and <strong>try submitting again</strong>.
              </Alert>
            </section>

            <section>
              <h5>Info alert</h5>

              <Alert
                info
                dismissable
                solid
                icon
              >
                <strong>Heads up!</strong> This alert needs your attention, but it's not <strong>super important</strong>.
              </Alert>
            </section>

            <section>
              <h5>Success alert</h5>

              <Alert
                success
                dismissable
                solid
                icon
              >
                <strong>Well done!</strong> You successfully read <strong>this important</strong> alert message.
              </Alert>
            </section>
          </Grid>
        </Panel>
      </div>
    )
  }
}
