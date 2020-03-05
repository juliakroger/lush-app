import React from 'react'
import { shallow } from 'enzyme'
import SubscriptionButton from './SubscriptionButton'

describe('Component - Subscription Button', () => {
  it('should render without crashing', () => {
    const component = shallow(<SubscriptionButton />)
    expect(component).toMatchSnapshot()
  })

  it('should trigger button correctly', () => {
    const mockFunc = jest.fn()
    const component = shallow(<SubscriptionButton clickSubscribe={mockFunc} />)

    component.find('button').simulate('click')
    expect(mockFunc.mock.calls.length).toBe(1)
  })
})
