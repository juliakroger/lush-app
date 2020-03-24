import React from 'react'
import { shallow, mount } from 'enzyme'
import Input from './Input'

describe('Component - Input', () => {
  it('should render with only required props', () => {
    const component = shallow(
      <Input value='value' valueChange={jest.fn()} id='#test-input' />
    )
    expect(component).toMatchSnapshot()
  })

  it('should render with placeholder, label and secondary label', () => {
    const component = shallow(
      <Input
        value='value'
        valueChange={jest.fn()}
        id='#test-input'
        placeholder='my input test'
        label='label 1'
        secondaryLabel='label 2'
      />
    )
    expect(component).toMatchSnapshot()
  })

  it('should trigger input change', () => {
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

  it('should render with secondary label, click secondary function and type', () => {
    const component = shallow(
      <Input
        value='value'
        valueChange={jest.fn()}
        id='#test-input'
        secondaryLabel='label 2'
        clickSecondary={jest.fn()}
        type='password'
      />
    )
    expect(component).toMatchSnapshot()
  })

  it('should trigger secondary label click', () => {
    const mockFunc = jest.fn()

    const component = mount(
      <Input
        value='value'
        valueChange={jest.fn()}
        id='#test-input'
        secondaryLabel='label 2'
        clickSecondary={mockFunc}
        type='password'
      />
    )

    component.find('.secondaryLabelClickable').simulate('click')
    expect(mockFunc.mock.calls.length).toBe(1)
  })
})
