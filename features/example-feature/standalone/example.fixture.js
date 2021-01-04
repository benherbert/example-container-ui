import { commonGoodResponse } from '_Mock/fixtures/common-good-response'
import { mockFeatureData } from '_Example/mock/example.mock'

export const mockExampleEndpoint = () => ({
  get: {
    ...commonGoodResponse,
    body: mockFeatureData
  }
})
