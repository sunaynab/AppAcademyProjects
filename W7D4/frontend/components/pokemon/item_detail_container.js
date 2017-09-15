import { connect } from 'react-redux';
import { selectItem } from '../../reducers/selector';
import ItemDetail from './item_detail';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(state, ownProps)
});




export default withRouter(connect(mapStateToProps, null)(ItemDetail));
