import React from 'react';
import { withRouter } from 'react-router-dom';

import BenchIndexContainer from '../benches/bench_index_container';

class BenchIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const benchId = this.props.bench.id;
    this.props.history.push(`/benches/${benchId}`);
  }

  render() {
    return (
      <div
        className="bench-index-item"
        onClick={this.handleClick}
      >
      </div>
    );
  }
}

export default withRouter(BenchIndexItem);
