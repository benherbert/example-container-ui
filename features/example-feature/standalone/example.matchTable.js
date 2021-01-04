import { EXAMPLE_ENDPOINT } from '_Banking/api/example.endpoint'
import { mockExampleEndpoint } from '_Banking/standalone/example.fixture'

const { EXAMPLE } = EXAMPLE_ENDPOINT(1234)

const matchExampleTable = {
  [EXAMPLE]: mockExampleEndpoint
}

export default matchExampleTable
