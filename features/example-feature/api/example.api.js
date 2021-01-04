import { callApi } from '_LtdRole/api/callApi'

import { EXAMPLE_ENDPOINT } from '_Example/example/api/example.endpoint'

import debug from '_Utils/debug'

const log = debug('example-api')

export const getExampleData = async (servicesUrl, { id }) => {
  const { MY_ENDPOINT } = EXAMPLE_ENDPOINT(id)

  const api = agent => agent.get(MY_ENDPOINT).query({ id, page: 0, size: 10 })

  return callApi({
    servicesUrl,
    api,
    errMsg: `failed to get example data: ${servicesUrl}`,
    apiDebug: log
  })
}
