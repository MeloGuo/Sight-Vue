export default function validate (data, rules) {
  const errors = {}

  rules.forEach((rule) => {
    const value = data[rule.key]
    if (rule.required) {
      const error = validate.required(value)
      if (error) {
        ensureObject(errors, rule.key)
        errors[rule.key].required = error
        return
      }
    }

    // if (rule.pattern) {
    //   const error = validate.pattern(value, rule.pattern)
    //   if (error) {
    //     ensureObject(errors, rule.key)
    //     errors[rule.key].pattern = error
    //   }
    // }
    //
    // if (rule.minLength) {
    //   const error = validate.minLength(value, rule.minLength)
    //   if (error) {
    //     ensureObject(errors, rule.key)
    //     errors[rule.key].minLength = error
    //   }
    // }

    const validators = Object.keys(rule).filter(key => key !== 'key' && key !== 'required')
    validators.forEach((validatorKey) => {
      if (validate[validatorKey]) {
        const error = validate[validatorKey](value, rule[validatorKey])
        if (error) {
          ensureObject(errors, rule.key)
          errors[rule.key][validatorKey] = error
        }
      } else {
        throw new Error(`Invalid validator of '${validatorKey}'`)
      }
    })
  })

  return errors
}

validate.required = (value) => {
  if (!value && value !== 0) {
    return '必填'
  }
}

validate.pattern = (value, pattern) => {
  if (pattern === 'email') {
    pattern = /^.+@.+$/
  }

  if (pattern.test(value) === false) {
    return '格式不正确'
  }
}

validate.minLength = (value, minLength) => {
  if (minLength > value.length) {
    return '太短'
  }
}

function ensureObject (object, key) {
  if (!object[key]) {
    object[key] = {}
  }
}
