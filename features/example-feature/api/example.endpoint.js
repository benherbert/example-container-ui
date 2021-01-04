export const EXAMPLE_ENDPOINT = id => {
  if (!id) {
    throw new Error('No ID provided for EXAMPLE_ENDPOINT')
  }
  return {
    MY_ENDPOINT: `/my-service/${id}/my-endpoint`
  }
}
