import { createAction } from '_Utils/tools'
import { combineReducers } from 'redux'

export const ACTIONS = {
  EXAMPLE_ACTION: 'example/example-action/started',
  EXAMPLE_ACTION_SUCCESS: 'example/example-action/success',
  EXAMPLE_ACTION_FAILED: 'example/example-action/failed'
}

// Statement Entries
export const exampleActionStarted = createAction(ACTIONS.EXAMPLE_ACTION_STARTED)
export const exampleActionSuccess = createAction(ACTIONS.EXAMPLE_ACTION_SUCCESS)
export const exampleActionFailed = createAction(ACTIONS.EXAMPLE_ACTION_FAILED)

const initialStateExample = {
  isExampleLoading: false,
  isExampleError: false,
  isExampleSuccess: false
}

export const exampleReducer = (state = initialStateExample, action) => {
  const { type, payload } = action

  switch (type) {
    case ACTIONS.EXAMPLE_ACTION_STARTED: {
      return {
        ...state,
        isExampleLoading: true,
        isExampleError: false,
        isExampleSuccess: false
      }
    }

    case ACTIONS.EXAMPLE_ACTION_SUCCESS: {
      return {
        ...state,
        isExampleLoading: false,
        isExampleError: false,
        isExampleSuccess: true
      }
    }

    case ACTIONS.EXAMPLE_ACTION_FAILED: {
      return {
        ...state,
        isExampleLoading: false,
        isExampleError: true,
        isExampleSuccess: false
      }
    }
  }
}

export const example = combineReducers({ exampleReducer })
