import React from 'react'
import { shallow } from 'enzyme'
import PaymentsAccepted from './PaymentsAccepted'

describe('Component - Payments Accepted', () => {
  it('should render without crashing', () => {
    const component = shallow(<PaymentsAccepted />)
    expect(component).toMatchSnapshot()
  })
})
