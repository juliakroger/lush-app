import React from 'react'
import { shallow } from 'enzyme'
import { Button, Input } from '../../components'
import JoinForm from './JoinForm'

describe('Container - Join Form', () => {
  it('should render correctly with all props', () => {
    const component = shallow(
      <JoinForm
        name=''
        setName={jest.fn()}
        phone=''
        setPhone={jest.fn()}
        email=''
        setEmail={jest.fn()}
        emailConfirmation=''
        setEmailConfirmation={jest.fn()}
        password=''
        setPassword={jest.fn()}
        passwordConfirmation=''
        setPasswordConfirmation={jest.fn()}
        submit={jest.fn()}
      />
    )
    expect(component).toMatchSnapshot()
  })

  it('should trigger name input change', () => {
    let name = ''

    const component = shallow(
      <JoinForm
        name=''
        setName={value => (name = value)}
        phone=''
        setPhone={jest.fn()}
        email=''
        setEmail={jest.fn()}
        emailConfirmation=''
        setEmailConfirmation={jest.fn()}
        password=''
        setPassword={jest.fn()}
        passwordConfirmation=''
        setPasswordConfirmation={jest.fn()}
        submit={jest.fn()}
      />
    )
    expect(component).toMatchSnapshot()

    component
      .find(Input)
      .at(0)
      .props()
      .valueChange('nameTest')

    expect(name).toBe('nameTest')
  })

  it('should trigger phone input change', () => {
    let phone = ''

    const component = shallow(
      <JoinForm
        name=''
        setName={jest.fn()}
        phone=''
        setPhone={value => (phone = value)}
        email=''
        setEmail={jest.fn()}
        emailConfirmation=''
        setEmailConfirmation={jest.fn()}
        password=''
        setPassword={jest.fn()}
        passwordConfirmation=''
        setPasswordConfirmation={jest.fn()}
        submit={jest.fn()}
      />
    )
    expect(component).toMatchSnapshot()

    component
      .find(Input)
      .at(1)
      .props()
      .valueChange('phonetest')

    expect(phone).toBe('phonetest')
  })

  it('should trigger email input change', () => {
    let email = ''

    const component = shallow(
      <JoinForm
        name=''
        setName={jest.fn()}
        phone=''
        setPhone={jest.fn()}
        email=''
        setEmail={value => (email = value)}
        emailConfirmation=''
        setEmailConfirmation={jest.fn()}
        password=''
        setPassword={jest.fn()}
        passwordConfirmation=''
        setPasswordConfirmation={jest.fn()}
        submit={jest.fn()}
      />
    )
    expect(component).toMatchSnapshot()

    component
      .find(Input)
      .at(2)
      .props()
      .valueChange('emailtest')

    expect(email).toBe('emailtest')
  })

  it('should trigger emailConfirmation input change', () => {
    let emailConfirmation = ''

    const component = shallow(
      <JoinForm
        name=''
        setName={jest.fn()}
        phone=''
        setPhone={jest.fn()}
        email=''
        setEmail={jest.fn()}
        emailConfirmation=''
        setEmailConfirmation={value => (emailConfirmation = value)}
        password=''
        setPassword={jest.fn()}
        passwordConfirmation=''
        setPasswordConfirmation={jest.fn()}
        submit={jest.fn()}
      />
    )
    expect(component).toMatchSnapshot()

    component
      .find(Input)
      .at(3)
      .props()
      .valueChange('emailtest')

    expect(emailConfirmation).toBe('emailtest')
  })

  it('should trigger password input change', () => {
    let password = ''

    const component = shallow(
      <JoinForm
        name=''
        setName={jest.fn()}
        phone=''
        setPhone={jest.fn()}
        email=''
        setEmail={jest.fn()}
        emailConfirmation=''
        setEmailConfirmation={jest.fn()}
        password=''
        setPassword={value => (password = value)}
        passwordConfirmation=''
        setPasswordConfirmation={jest.fn()}
        submit={jest.fn()}
      />
    )
    expect(component).toMatchSnapshot()

    component
      .find(Input)
      .at(4)
      .props()
      .valueChange('password')

    expect(password).toBe('password')
  })

  it('should trigger passwordConfirmation input change', () => {
    let passwordConfirmation = ''

    const component = shallow(
      <JoinForm
        name=''
        setName={jest.fn()}
        phone=''
        setPhone={jest.fn()}
        email=''
        setEmail={jest.fn()}
        emailConfirmation=''
        setEmailConfirmation={jest.fn()}
        password=''
        setPassword={jest.fn()}
        passwordConfirmation=''
        setPasswordConfirmation={value => (passwordConfirmation = value)}
        submit={jest.fn()}
      />
    )
    expect(component).toMatchSnapshot()

    component
      .find(Input)
      .at(5)
      .props()
      .valueChange('passwordtest')

    expect(passwordConfirmation).toBe('passwordtest')
  })

  it('should trigger submit button click', () => {
    const mockFunc = jest.fn()

    const component = shallow(
      <JoinForm
        name=''
        setName={jest.fn()}
        phone=''
        setPhone={jest.fn()}
        email=''
        setEmail={jest.fn()}
        emailConfirmation=''
        setEmailConfirmation={jest.fn()}
        password=''
        setPassword={jest.fn()}
        passwordConfirmation=''
        setPasswordConfirmation={jest.fn()}
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
