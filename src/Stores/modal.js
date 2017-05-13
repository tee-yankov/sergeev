const OPEN = 'modal/open'
const CLOSE = 'modal/close'
const SET = 'modal/set'

const initialState = {
  isOpen: false,
  component: null

}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case OPEN:
      return {
        ...state,
        component: action.component,
        isOpen: true
      }
    case CLOSE:
      return {
        ...state,
        component: null,
        isOpen: false
      }
    case SET:
      return {
        ...state,
        component: action.component
      }
    default: return state
  }
}

export function openModal (component) {
  return {
    type: OPEN,
    component
  }
}

export function closeModal () {
  return {
    type: CLOSE
  }
}

export function setModalComponent (component) {
  return {
    type: SET,
    component
  }
}
