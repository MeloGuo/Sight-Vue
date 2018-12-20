export default class Validator {
  static ensureObject (object, key) {
    if (!object[key]) {
      object[key] = {}
    }
  }

  static add (name, fn) {
    this[name] = fn
  }

  validate (data, rules) {
    const errors = {}

    rules.forEach((rule) => {
      const value = data[rule.key]
      if (rule.required) {
        const error = this.required(value)
        if (error) {
          Validator.ensureObject(errors, rule.key)
          errors[rule.key].required = error
          return
        }
      }

      const validators = Object.keys(rule).filter(key => (
        key !== 'key' && key !== 'required')
      )
      validators.forEach((validatorKey) => {
        if (this[validatorKey]) {
          const error = this[validatorKey](value, rule[validatorKey])
          if (error) {
            Validator.ensureObject(errors, rule.key)
            errors[rule.key][validatorKey] = error
          }
        } else {
          throw new Error(`Invalid validator of '${validatorKey}'`)
        }
      })
    })

    return errors
  }

  required (value) {
    if (!value && value !== 0) {
      return '必填'
    }
  }

  pattern (value, pattern) {
    if (pattern === 'email') {
      pattern = /^.+@.+$/
    }

    if (pattern.test(value) === false) {
      return '格式不正确'
    }
  }

  minLength (value, minLength) {
    if (minLength > value.length) {
      return '太短'
    }
  }
}
