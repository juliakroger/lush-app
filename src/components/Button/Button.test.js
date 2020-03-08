import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Component - Button', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Button text='my button' clickFunction={() => {}} id='#test-button' />
    )
    expect(component).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    const component = shallow(
      <Button
        text='my button'
        clickFunction={() => {}}
        id='#test-button'
        type='buttonLight'
      />
    )
    expect(component).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    const component = shallow(
      <Button
        text='my button'
        clickFunction={() => {}}
        id='#test-button'
        type='buttonRed'
      />
    )
    expect(component).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    const component = shallow(
      <Button
        text='my button'
        clickFunction={() => {}}
        id='#test-button'
        type='buttonMint'
      />
    )
    expect(component).toMatchSnapshot()
  })

  it('should trigger change without crashing', () => {
    const mockFunc = jest.fn()

    const component = shallow(
      <Button
        text='my button'
        clickFunction={mockFunc}
        id='#test-button'
        type='buttonMint'
      />
    )

    component.find('button').simulate('click')
    expect(mockFunc.mock.calls.length).toBe(1)
  })
})
