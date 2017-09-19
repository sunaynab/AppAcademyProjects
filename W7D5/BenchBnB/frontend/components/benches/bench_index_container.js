import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';
import BenchIndex from './bench_index.jsx';

const mapStateToProps = state => ({
  benches: Object.keys(state.entities).map(key => state.entities[key])
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
