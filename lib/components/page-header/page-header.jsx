import React from 'react';

import { withRouter } from 'react-router-dom';
import last from 'lodash.last';
import upperfirst from 'lodash.upperfirst';

import { Container, Breadcrumb } from 'components';
import './page-header.scss';

class PageHeader extends React.Component {
  constructor(props) {
    super(props);

    this.getTitle = this.getTitle.bind(this);
  }

  getTitle() {
    const { location: { pathname }} = this.props;
    const lastPath = last(pathname.split('/'));

    return upperfirst(lastPath);
  }

  render() {
    return (
      <div className="PageHeader">
        <div className="page-header-main-section">
          <Container>
            <h2>
              {this.getTitle()}
            </h2>
          </Container>
        </div>
        <div className="page-header-secondary-section">
          <Container>
            <Breadcrumb />
          </Container>
        </div>
      </div>
    )
  }
}

export default withRouter(PageHeader);
