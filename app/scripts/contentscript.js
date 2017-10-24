let input_size = document.querySelector('#priceForm .input-group .input_size');
let input_price = document.querySelector('#priceForm .input-group .input_price');

let values = require('./assets/values')
let template = require('./lib/template')

input_size.addEventListener('input', () => {
  deleteOldElement()

  let expectedJpy = Math.floor(input_size.value * input_price.value)  

  rendering(expectedJpy)
})

input_price.addEventListener('input', () => {
  deleteOldElement()

  let expectedJpy = Math.floor(input_size.value * input_price.value)  

  rendering(expectedJpy)
})

const deleteOldElement = () => {
  try {
    let oldElement = document.getElementById(values.DATA_BOX_ID)
    oldElement.parentNode.removeChild(oldElement);
  } catch (e) {
    //
  }
}

const rendering = (expectedJpy) => {
  let row = document.querySelectorAll('#priceForm tr')[0]

  let label = template.createLabel();
  let div = template.createValue(expectedJpy)

  let td = document.createElement('td')
  td.id = values.DATA_BOX_ID
  td.setAttribute('colspan', 1)
  td.appendChild(label)
  td.appendChild(div)

  row.appendChild(td)
}
