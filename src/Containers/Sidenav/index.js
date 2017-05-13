import { connect } from 'react-redux'
import Sidenav from '../../Components/Sidenav'
import { toggleOpen } from '../../Stores/sidebar'

const mapStateToProps = (state) => ({
  isOpen: state.sidebar.isOpen
})

const mapDispatchToProps = (dispatch) => ({
  toggleOpen: () => dispatch(toggleOpen())
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidenav)
