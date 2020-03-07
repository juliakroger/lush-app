import React from 'react'
import { shallow } from 'enzyme'
import Input from './Input'

describe('Component - Input', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Input value='value' valueChange={() => {}} id='#test-input' />
    )
    expect(component).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    const component = shallow(
      <Input
        value='value'
        valueChange={() => {}}
        id='#test-input'
        placeholder='my input test'
        label='label 1'
        secondaryLabel='label 2'
      />
    )
    expect(component).toMatchSnapshot()
  })

  it('should trigger change without crashing', () => {
    let value = ''
    const changeValue = targetValue => {
      value = targetValue
    }

    const component = shallow(
      <Input
        value={value}
        valueChange={targetValue => changeValue(targetValue)}
        id='#test-input'
        placeholder='my input test'
        label='label 1'
        secondaryLabel='label 2'
      />
    )

    component.find('input').simulate('change', {
      target: { id: '#test-input', value: 'test type' }
    })

    expect(value).toEqual('test type')
    expect(component).toMatchSnapshot()
  })
})
