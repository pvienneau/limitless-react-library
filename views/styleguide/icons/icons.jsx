import React from 'react';

import map from 'lodash.map';
import filter from 'lodash.filter';
import reduce from 'lodash.reduce';
import startCase from 'lodash.startcase';
import trim from 'lodash.trim';

import './icons.scss';
import { Card, Container, Icon, Input } from 'components';
import iconFixtures from 'components/icon/icons.json';

const ICONS = reduce(iconFixtures.icons, (acc, value, name) => {
  acc.push({
    name,
    value,
  });

  return acc;
}, []);

export default class Icons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      filter: e.target.value
    });
  }

  render() {
    const { filter: filterQuery } = this.state;

    const filteredIcons = filter(ICONS, ({ name }) => name.includes(filterQuery))

    return (
      <Container className="Icons">
        <div className="filter-options">
          <Input
            type="search"
            placeholder="Search by name..."
            onChange={this.onChange}
          />
        </div>
        <div className="results">
          {
            map(filteredIcons, ({ name, value }) => (
              <Card
                key={name}
                title={startCase(name)}
                description={trim(value, '\'')}
                hintText={name}
              >
                <div className="icon-display">
                  <Icon>
                    {name}
                  </Icon>
                </div>
              </Card>
            ))
          }
        </div>
      </Container>
    );
  }
}
