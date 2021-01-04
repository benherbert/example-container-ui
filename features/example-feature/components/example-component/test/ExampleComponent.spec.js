import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import { ExampleComponent } from '_Example/components/example-component/ExampleComponent'

import { mockProps } from '_Example/components/example-component/mock/ExampleComponent.mock'

describe('<ExampleComponent />', () => {
  it('Renders correctly', () => {
    const tree = mount(<ExampleComponent {...mockProps} />)
    const textStyle = tree.find('TextStyle')

    expect(textStyle).to.have.lengthOf(1)
    expect(textStyle.at(0).text()).to.equal(mockProps.copy)
  })
})
