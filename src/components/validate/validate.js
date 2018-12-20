export default function validate (data, rules) {
  const errors = {}

  rules.forEach((rule) => {
    const value = data[rule.key]
    if (rule.required) {
      if (!value && value !== 0) {
        errors[rule.key] = {
          required: '必填'
        }
        return
      }
    }

    if (rule.pattern) {
      if (rule.pattern === 'email') {
        rule.pattern = /^.+@.+$/
      }

      if (rule.pattern.test(value) === false) {
        ensureObject(errors, rule.key)
        errors[rule.key].pattern = '格式不正确'
      }
    }

    if (rule.minLength) {
      if (rule.minLength > value.length) {
        ensureObject(errors, rule.key)
        errors[rule.key].minLength = '太短'
      }
    }
  })

  return errors
}

function ensureObject (object, key) {
  if (!object[key]) {
    object[key] = {}
  }
}
