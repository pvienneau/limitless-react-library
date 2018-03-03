import React from 'react'

import { Container, Icon, Spinner, FormGroup } from 'components'
import './input-groups.scss'

export default class InputGroups extends React.Component {
  render () {
    return (
      <Container className="InputGroups">
        <form>
          <fieldset>
            <legend>
              TEXT ADDON
            </legend>
            <FormGroup
              type="text"
              label="Default text input"
              name="default_text_input"
              placeholder="Left addon"
              addons={{
                left: '@',
              }}
            />
            <FormGroup
              type="text"
              label="Default text input"
              name="default_text_input"
              placeholder="Right addon"
              addons={{
                right: '%',
              }}
            />
            <FormGroup
              type="text"
              label="Default text input"
              name="default_text_input"
              placeholder="Left and right addon"
              addons={{
                left: '$',
                right: '.00',
              }}
            />
          </fieldset>
          <fieldset>
            <legend>
              TEXT ADDON
            </legend>
            <FormGroup
              type="text"
              label="Default text input"
              name="default_text_input"
              placeholder="Left icon"
              addons={{
                left: <Icon>user</Icon>,
              }}
            />
            <FormGroup
              type="text"
              label="Default text input"
              name="default_text_input"
              placeholder="Right icon"
              addons={{
                right: <Icon>user</Icon>,
              }}
            />
            <FormGroup
              type="text"
              label="Default text input"
              name="default_text_input"
              placeholder="Left and right icon"
              addons={{
                left: <Icon>file-text</Icon>,
                right: <Icon>inbox</Icon>,
              }}
            />
          </fieldset>
          <fieldset>
            <legend>
              SPINNER ADDON
            </legend>
            <FormGroup
              type="text"
              label="Default text input"
              name="default_text_input"
              placeholder="Left spinner"
              addons={{
                left: <Spinner />,
              }}
            />
            <FormGroup
              type="text"
              label="Default text input"
              name="default_text_input"
              placeholder="Right spinner"
              addons={{
                right: <Spinner />,
              }}
            />
            <FormGroup
              type="text"
              label="Default text input"
              name="default_text_input"
              placeholder="Left and right spinner"
              addons={{
                left: <Spinner />,
                right: <Spinner />,
              }}
            />
          </fieldset>
        </form>
      </Container>
    )
  }
}
