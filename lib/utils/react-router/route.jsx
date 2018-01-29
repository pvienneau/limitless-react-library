import React from 'react';

import { Route as ReactRouterRoute } from 'react-router-dom';
import trimStart from 'lodash.trimstart';
import assign from 'lodash.assign';

export default class Route extends React.Component {
  render() {
    const { children, path, ...props } = this.props;

    const computedChildren = React.Children.map(children, child => {
      const { children, props: childProps } = child;
      const computedProps = assign({}, childProps);

      console.log(child);

      if (child.type !== Route) return child;

      console.log(child)

      computedProps.path = `${path}/${trimStart(childProps.path, '/')}`;

      console.log(computedProps);

      return React.cloneElement(
        child,
        computedProps,
        children
      )
    });

    return (
      <ReactRouterRoute
        {...props}
        path={path}
        children={React.Children.count(computedChildren) === 1 ? computedChildren[0] : computedChildren}
      />
    );
  }
}
