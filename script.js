
var formSubmit = document.querySelector('#form')

formSubmit.addEventListener('submit', (value) => {
  value.preventDefault()
  var firstName = document.querySelector('#firstName')
  var lastName = document.querySelector('#lastName')
  var address = document.querySelector('#address')
  var pincode = document.querySelector('#pincode')
  var gender = document.querySelector('#gender')
  var food = document.querySelector('#food')
  var state = document.querySelector('#state')
  var country = document.querySelector('#country')

  var array = [firstName, lastName, address, pincode, gender, food, state, country]
  var tableRow = document.createElement('tr')
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].value != '') {
      var tableData = document.createElement('td')
      tableData.innerHTML = array[i].value
      tableRow.append(tableData)
      count++
    }
  }

  document.querySelector('tbody').append(tableRow)
  for (let i of array) {
    i.value = ''
  }
})