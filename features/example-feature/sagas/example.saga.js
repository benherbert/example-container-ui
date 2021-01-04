import { call, select, put, takeLatest } from 'redux-saga/effects'
import omitEmpty from 'omit-empty'

import { selectAppConfig } from '_Common/sagas/selectors'

import { exampleActionSuccess, exampleActionFailed, ACTIONS } from '_Example/redux/example.redux'

import { getExampleData } from '_Example/api/example.api'

import debug from '_Utils/debug'

const log = debug('example-saga')
const logError = log.extend('error')

const { EXAMPLE_ACTION } = ACTIONS

export function * sagaGetExampleWorker ({ payload }) {
  const { servicesUrl } = yield select(selectAppConfig)

  try {
    const response = yield call(getExampleData, servicesUrl, payload)

    if (response) {
      yield put(exampleActionSuccess({ request: payload, response: omitEmpty(response) }))
    } else {
      yield put(exampleActionFailed({ request: payload }))
      logError('Error - no response')
    }
  } catch (err) {
    yield put(exampleActionFailed({ request: payload }))
    logError(err)
  }
}

export function * sagaGetExample () {
  yield takeLatest(EXAMPLE_ACTION, sagaGetExampleWorker)
}
