import React from 'react';

import { Link } from 'utils/react-router';
import classNames from 'classnames';

import { Container } from 'components';
import './page-footer.scss';

export default class PageFooter extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <Container className={classNames('PageFooter', className)}>
        &copy; 2018 <Link to="http://demo.interface.club/limitless/layout_1/LTR/default/index.html#">Limitless Web App Kit</Link> by <Link to="http://themeforest.net/user/Kopyov">Eugene Kopyov</Link>
      </Container>
    );
  }
}
