import { connect } from 'react-redux'
import { closeModal } from '../../Stores/modal'
import Modal from '../../Components/Modal'

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
  component: state.modal.component
})

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
})

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal)

export default ModalContainer
