import Button from '../packages/button/index.js'

const components = [
  Button
]

const install = function (Vue, opts = {}) {
  components.forEach(component => Vue.component(component.name, component))
}

// when developer download Vue with a script tag
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.3',
  install,
  Button
}
