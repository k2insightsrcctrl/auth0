import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ApplicationHeader extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    application: PropTypes.object.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.application !== this.props.application || nextProps.loading !== this.props.loading;
  }

  render() {
    const application = this.props.application.toJS();
    return (
      <div className="user-header">
        <Link className="btn btn-sm btn-transparent back-to-apps" to="/applications/settings">
          <span className="btn-icon icon-budicon-521" />
          Go back to Applications
        </Link>
        <h4>
          <span className="name user-head-nickname">
            {application.name}
          </span>
        </h4>
      </div>
    );
  }
}
