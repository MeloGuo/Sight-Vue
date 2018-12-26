import chai, { expect } from 'chai'
// import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Validator from '../../src/components/validate/validate.js'

chai.use(sinonChai)

/* eslint-disable no-unused-expressions */
describe('Validator', () => {
  it('should exist', function () {
    expect(Validator).to.be.exist
  })

  it('required true Pass', function () {
    const validator = new Validator()
    const errors = validator.validate({ email: '' }, [
      { key: 'email', required: true }
    ])

    expect(errors).to.have.nested.property('email.required', '必填')
  })

  it('require true Error', function () {
    const validator = new Validator()
    const errors = validator.validate({ email: 0 }, [
      { key: 'email', required: true }
    ])

    expect(errors).to.not.have.property('email')
  })

  it('pattern Pass', function () {
    const validator = new Validator()
    const errors = validator.validate({ email: 'guo@gmail.com' }, [
      { key: 'email', pattern: /^.+@.+$/ }
    ])

    expect(errors).to.not.have.property('email')
  })

  it('pattern Error', function () {
    const validator = new Validator()
    const errors = validator.validate({ email: '@gmail.com' }, [
      { key: 'email', pattern: /^.+@.+$/ }
    ])

    expect(errors).to.have.nested.property('email.pattern', '格式不正确')
  })

  it('pattern email Pass', function () {
    const validator = new Validator()
    const errors = validator.validate({ email: 'guo@gmail.com' }, [
      { key: 'email', pattern: 'email' }
    ])

    expect(errors).to.not.have.property('email')
  })

  it('pattern email Error', function () {
    const validator = new Validator()
    const errors = validator.validate({ email: '@gmail.com' }, [
      { key: 'email', pattern: 'email' }
    ])

    expect(errors).to.have.nested.property('email.pattern', '格式不正确')
  })

  it('require && pattern Pass', function () {
    const validator = new Validator()
    const errors = validator.validate({ email: '' }, [
      { key: 'email', pattern: 'email', required: true }
    ])

    expect(errors).to.have.nested.property('email.required')
    expect(errors).to.not.have.nested.property('email.pattern')
  })

  it('pattern && minLength', function () {
    const validator = new Validator()
    const errors = validator.validate({ email: 'wr' }, [
      { key: 'email', pattern: 'email', minLength: 6 }
    ])

    expect(errors).to.have.deep.property('email', {
      minLength: '太短',
      pattern: '格式不正确'
    })
  })

  it('最小值', function () {
    const validator = new Validator()
    const errors = validator.validate({ email: 'guoziliang@gmail.com' }, [
      { key: 'email', pattern: 'email', minLength: 6 }
    ])

    expect(errors).to.not.have.nested.property('email.minLength')
  })

  it('invalid validator', function () {
    const validator = new Validator()

    expect(() => {
      validator.validate({}, [
        { key: '', hasNumber: true }
      ])
    }).to.throw(Error, 'Invalid validator of \'hasNumber\'')
  })

  it('custom validator Pass', function () {
    const validator = new Validator()
    validator.hasNumber = (value) => {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    }

    const errors = validator.validate({ content: 'don\'t have number' }, [
      { key: 'content', hasNumber: true }
    ])

    expect(errors).to.have.nested.property('content.hasNumber', '必须含有数字')
  })

  it('custom validator Error', function () {
    const validator = new Validator()
    validator.hasNumber = (value) => {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    }

    const errors = validator.validate({ content: 'have number 123' }, [
      { key: 'content', hasNumber: true }
    ])

    expect(errors).to.not.have.property('content')
  })

  it('custom validator don\'t affect each other', function () {
    const validator1 = new Validator()
    const validator2 = new Validator()

    const data = { email: 'just a string' }
    const rules = [{ key: 'email', hasNumber: true }]

    validator1.hasNumber = (value) => {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    }

    expect(() => {
      validator1.validate(data, rules)
    }).to.not.throw()
    expect(() => {
      validator2.validate(data, rules)
    }).to.throw()
  })

  it('add origin validator', function () {
    Validator.add('hasNumber', function (value) {
      if (!/\d/.test(value)) {
        return '必须含有数字'
      }
    })

    const validator1 = new Validator()
    const validator2 = new Validator()
    const data = { email: 'just a string' }
    const rules = [{ key: 'email', hasNumber: true }]

    expect(() => {
      validator1.validate(data, rules)
    }).to.not.throw()
    expect(() => {
      validator2.validate(data, rules)
    }).to.not.throw()
  })
})
