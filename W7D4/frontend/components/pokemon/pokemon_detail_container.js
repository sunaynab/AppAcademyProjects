import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectPoke, selectItems } from '../../reducers/selector';
import { requestPoke } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = state => ({
  poke: selectPoke(state),
  items: selectItems(state)
});

const mapDispatchToProps = dispatch => ({
  requestPoke: (poke) => dispatch(requestPoke(poke))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail));
