import React from 'react'
import { shallow } from 'enzyme'
import Icon from './Icon'

describe('Component - Icon', () => {
  it('should render Amex svg', () => {
    const component = shallow(<Icon type='amex' />)
    expect(component).toMatchSnapshot()
  })

  it('should render Github svg', () => {
    const component = shallow(<Icon type='github' />)
    expect(component).toMatchSnapshot()
  })

  it('should render Heart svg', () => {
    const component = shallow(<Icon type='heart' />)
    expect(component).toMatchSnapshot()
  })

  it('should render Instagram svg', () => {
    const component = shallow(<Icon type='instagram' />)
    expect(component).toMatchSnapshot()
  })

  it('should render Mastercard svg', () => {
    const component = shallow(<Icon type='mastercard' />)
    expect(component).toMatchSnapshot()
  })

  it('should render Paypal svg', () => {
    const component = shallow(<Icon type='paypal' />)
    expect(component).toMatchSnapshot()
  })

  it('should render Twitter svg', () => {
    const component = shallow(<Icon type='twitter' />)
    expect(component).toMatchSnapshot()
  })

  it('should render Visa svg', () => {
    const component = shallow(<Icon type='visa' />)
    expect(component).toMatchSnapshot()
  })
})
