const callbacks = []

const onClickDocument = ({ target }) => {
  callbacks.forEach((item) => {
    if (item.el === target || item.el.contains(target)) { return }
    item.callback()
  })
}

export default {
  bind (el, binding) {
    callbacks.push({ el, callback: binding.value })
  }
}

export const removeListener = () => {
  document.removeEventListener('click', onClickDocument)
}

document.addEventListener('click', onClickDocument)
