const TOGGLE = 'sidebar/toggle'

const initialState = {
  isOpen: false
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        isOpen: !state.isOpen
      }
    default: return state
  }
}

export function toggleOpen () {
  return {
    type: TOGGLE
  }
}
