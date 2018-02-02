import React from 'react';

import { Route as ReactRouterRoute } from 'react-router-dom';
import trimStart from 'lodash.trimstart';
import trim from 'lodash.trim';
import assign from 'lodash.assign';
import isEmpty from 'lodash.isempty';
import join from 'lodash.join';

import { makeArray } from 'utils/js';

export default class Route extends React.Component {
  extendChildrenPaths(nodes, basePath = '') {
    if (!nodes) return nodes;

    return React.Children.map(nodes, child => {
      const { props, type } = child;
      const computedProps = {};

      if (type === Route) {
        computedProps.path = `/${trim(basePath, '/')}/${trim(props.path, '/')}`
      }


      return React.cloneElement(
        child,
        assign({}, props, computedProps),
        this.extendChildrenPaths(props.children, computedProps.path || basePath)
      )
    });
  }

  render() {
    const { path, children, ...props } = this.props;
    const computedChildren = this.extendChildrenPaths(children, path);

    return (
      <ReactRouterRoute
        {...props}
        path={path}
        children={React.Children.count(computedChildren) === 1 ? computedChildren[0] : computedChildren}
      />
    );
  }
}
