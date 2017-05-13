import { connect } from 'react-redux'
import { openModal } from '../../Stores/modal'
import Tile from '../../Components/Tile'

const mapDispatchToProps = (dispatch) => ({
  openModal: (component) => dispatch(openModal(component))
})

const TileContainer = connect(null, mapDispatchToProps)(Tile)

export default TileContainer
