import React from 'react'
import TestUtils from 'react-dom/test-utils'

import Formsy from './..'
import TestInput from './utils/TestInput'

class TestForm extends React.Component {
  render () {
    return (
      <Formsy.Form>
        <TestInput name='foo' validations='isEmail' value={this.props.inputValue} />
      </Formsy.Form>
    )
  }
}

export default {

  'should pass with a default value': function (test) {
    const form = TestUtils.renderIntoDocument(<TestForm />)
    const inputComponent = TestUtils.findRenderedComponentWithType(form, TestInput)
    test.equal(inputComponent.isValid(), true)
    test.done()

  },

  'should fail with "foo"': function (test) {
    const form = TestUtils.renderIntoDocument(<TestForm inputValue='foo' />)
    const inputComponent = TestUtils.findRenderedComponentWithType(form, TestInput)
    test.equal(inputComponent.isValid(), false)
    test.done()

  },

  'should pass with "foo@foo.com"': function (test) {
    const form = TestUtils.renderIntoDocument(<TestForm inputValue='foo@foo.com' />)
    const inputComponent = TestUtils.findRenderedComponentWithType(form, TestInput)
    test.equal(inputComponent.isValid(), true)
    test.done()

  },

  'should pass with an undefined': function (test) {
    const form = TestUtils.renderIntoDocument(<TestForm inputValue={undefined} />)
    const inputComponent = TestUtils.findRenderedComponentWithType(form, TestInput)
    test.equal(inputComponent.isValid(), true)
    test.done()

  },

  'should pass with a null': function (test) {
    const form = TestUtils.renderIntoDocument(<TestForm inputValue={null} />)
    const inputComponent = TestUtils.findRenderedComponentWithType(form, TestInput)
    test.equal(inputComponent.isValid(), true)
    test.done()

  },

  'should pass with an empty string': function (test) {
    const form = TestUtils.renderIntoDocument(<TestForm inputValue={''} />)
    const inputComponent = TestUtils.findRenderedComponentWithType(form, TestInput)
    test.equal(inputComponent.isValid(), true)
    test.done()

  },

  'should fail with a number': function (test) {
    const form = TestUtils.renderIntoDocument(<TestForm inputValue={42} />)
    const inputComponent = TestUtils.findRenderedComponentWithType(form, TestInput)
    test.equal(inputComponent.isValid(), false)
    test.done()

  }

}
