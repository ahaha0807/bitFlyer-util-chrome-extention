let values = require('../assets/values')

export let createLabel = () => {
  let div = document.createElement('div')
  div.className = values.DATA_LABEL_CLASSNAME
  div.innerHTML = values.DATA_LABEL_TEXT
  return div
}

export let createValue = expectedJpy => {
  let div = document.createElement('div')
  div.className = values.DATA_VALUE_CLASSNAME
  div.innerHTML = expectedJpy + ' JPY'
  return div
}
