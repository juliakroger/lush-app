import React from 'react'
import { shallow } from 'enzyme'
import { Button, Input } from '../../components'
import LoginForm from './LoginForm'

describe('Container - Login Form', () => {
  it('should render correctly with all props', () => {
    const component = shallow(
      <LoginForm
        email=''
        setEmail={jest.fn()}
        password=''
        setPassword={jest.fn()}
        submit={jest.fn()}
      />
    )
    expect(component).toMatchSnapshot()
  })

  it('should trigger email input change', () => {
    let email = ''

    const component = shallow(
      <LoginForm
        email={email}
        setEmail={value => (email = value)}
        password=''
        setPassword={jest.fn()}
        submit={jest.fn()}
      />
    )

    component
      .find(Input)
      .at(0)
      .props()
      .valueChange('emailtest')

    expect(email).toBe('emailtest')
  })

  it('should trigger password input change', () => {
    let password = ''

    const component = shallow(
      <LoginForm
        email=''
        setEmail={jest.fn()}
        password={password}
        setPassword={value => (password = value)}
        submit={jest.fn()}
      />
    )

    component
      .find(Input)
      .at(1)
      .props()
      .valueChange('passwordtest')

    expect(password).toBe('passwordtest')
  })

  it('should trigger submit button click', () => {
    const mockFunc = jest.fn()

    const component = shallow(
      <LoginForm
        email=''
        setEmail={jest.fn()}
        password=''
        setPassword={jest.fn()}
        submit={mockFunc}
      />
    )

    component
      .find(Button)
      .props()
      .clickFunction()
    expect(mockFunc.mock.calls.length).toBe(1)
  })
})
