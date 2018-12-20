import chai, { expect } from 'chai'
// import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import validate from '../../src/components/validate/validate.js'

chai.use(sinonChai)

/* eslint-disable no-unused-expressions */
describe('validate', () => {
  it('should exist', function () {
    expect(validate).to.be.exist
  })

  it('required true Pass', function () {
    const errors = validate({ email: '' }, [
      { key: 'email', required: true }
    ])

    expect(errors).to.have.nested.property('email.required', '必填')
  })

  it('require true Error', function () {
    const errors = validate({ email: 0 }, [
      { key: 'email', required: true }
    ])

    expect(errors).to.not.have.property('email')
  })

  it('pattern Pass', function () {
    const errors = validate({ email: 'guo@gmail.com' }, [
      { key: 'email', pattern: /^.+@.+$/ }
    ])

    expect(errors).to.not.have.property('email')
  })

  it('pattern Error', function () {
    const errors = validate({ email: '@gmail.com' }, [
      { key: 'email', pattern: /^.+@.+$/ }
    ])

    expect(errors).to.have.nested.property('email.pattern', '格式不正确')
  })

  it('pattern email Pass', function () {
    const errors = validate({ email: 'guo@gmail.com' }, [
      { key: 'email', pattern: 'email' }
    ])

    expect(errors).to.not.have.property('email')
  })

  it('pattern email Error', function () {
    const errors = validate({ email: '@gmail.com' }, [
      { key: 'email', pattern: 'email' }
    ])

    expect(errors).to.have.nested.property('email.pattern', '格式不正确')
  })

  it('require && pattern Pass', function () {
    const errors = validate({ email: '' }, [
      { key: 'email', pattern: 'email', required: true }
    ])

    expect(errors).to.have.nested.property('email.required')
    expect(errors).to.not.have.nested.property('email.pattern')
  })

  it('pattern && minLength', function () {
    const errors = validate({ email: 'wr' }, [
      { key: 'email', pattern: 'email', minLength: 6 }
    ])

    expect(errors).to.have.deep.property('email', {
      minLength: '太短',
      pattern: '格式不正确'
    })
  })

  it('invalid validator', function () {
    const fn = () => {
      validate({}, [
        { key: '', hasNumber: true }
      ])
    }

    expect(fn).to.throw(Error, 'Invalid validator of \'hasNumber\'')
  })

  it('custom validator Pass', function () {
    validate.hasNumber = (value) => {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    }

    const errors = validate({ content: 'don\'t have number' }, [
      { key: 'content', hasNumber: true }
    ])

    expect(errors).to.have.nested.property('content.hasNumber', '必须含有数字')
  })

  it('custom validator Error', function () {
    validate.hasNumber = (value) => {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    }

    const errors = validate({ content: 'have number 123' }, [
      { key: 'content', hasNumber: true }
    ])

    expect(errors).to.not.have.property('content')
  })
})
