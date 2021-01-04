// @flow
import React from 'react'

// Import Components
import { TextStyle } from '@crunch/react-components/lib/crunch-react-components-container.browser'

// Import Type
import type { ExampleComponentType } from './ExampleComponent.types'

const ExampleComponent = (props: ExampleComponentType) => {
  const { copy } = props

  return <TextStyle>{copy}</TextStyle>
}

ExampleComponent.displayName = ExampleComponent.name

export default ExampleComponent

export { ExampleComponent }
