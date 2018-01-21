import React from 'react';

import { withRouter, Link } from 'react-router-dom';
import filter from 'lodash.filter';
import isEmpty from 'lodash.isempty';
import map from 'lodash.map';
import split from 'lodash.split';
import upperFirst from 'lodash.upperfirst';

import './breadcrumb.scss';

class Breadcrumb extends React.Component {
  toTitle(str = '') {
    const sentence = str.replace('-', ' ');

    return upperFirst(sentence);
  }

  render() {
    const { location: { pathname }} = this.props;

    const paths = filter(split(pathname, '/'), path => !isEmpty(path));
    let cumulativePath = [];

    return (
      <ul className="Breadcrumb">
        {
          map(paths, (path, ii) => {
            cumulativePath.push(path);

            const element = (paths.length === (ii + 1)) ?
              React.createElement('span', { className: 'active' }) :
              React.createElement(Link, { to: cumulativePath.join('/') });

            return (
              <li
                key={ii}
                className="path"
              >
                <element.type {...element.props}>
                  {this.toTitle(path)}
                </element.type>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default withRouter(Breadcrumb);
