import React, { Component, PropTypes } from 'react'
import ReactModal from 'react-modal'
import AnimatedButton from '../AnimatedButton'
import './index.css'

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    zIndex: 10
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 'none',
    background: 'transparent',
    overflowX: 'hidden',
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: 0,
    outline: 'none',
    padding: 0,
    paddingBottom: '10vh',
    width: '100%'
  }
}

export default class Modal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    component: PropTypes.node,
    closeModal: PropTypes.func.isRequired,
    contentLabel: PropTypes.string
  }

  static defaultProps = {
    contentLabel: 'Modal'
  }

  render () {
    const { isOpen, contentLabel, component, closeModal } = this.props
    return (
      <ReactModal
        isOpen={isOpen}
        contentLabel={contentLabel}
        onRequestClose={closeModal}
        style={styles}
      >
        <div className='container'>
          <div className='modal__close-btn-container row center-xs'>
            <AnimatedButton color='#FFFFFF' secondaryColor='#444444' onClick={closeModal}>
              Close
            </AnimatedButton>
          </div>
          <div className='modal__content row center-xs'>
            {component}
          </div>
        </div>
      </ReactModal>
    )
  }
}
