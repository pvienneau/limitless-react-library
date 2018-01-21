import React from 'react';

import { Button } from 'components';
import './Navbar.scss';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <Button
          icon="svg"
          fill={false}
        >
          LIMITLESS
        </Button>
      </div>
    );
  }
}
