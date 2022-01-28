const customerList = (JSON.parse(localStorage.getItem('formData')));
// console.log(customerList);
/* show the customer data in the screen*/
const bodyContainer = document.querySelector('#body-container')

const row = document.createElement('div')
row.classList.add('row')
bodyContainer.appendChild(row)

customerList.forEach(customer => {
    
    const col = document.createElement("div")
    col.classList.add("col-4")

    const card = document.createElement("div")
    card.classList.add("card")

    const nameField = document.createElement("h1")
    nameField.innerText = customer.name

    const numberField = document.createElement("h3")
    numberField.innerText = customer.phoneNumber

    const dateField = document.createElement("h5")
    dateField.innerText = customer.deliverDate

    card.appendChild(nameField)
    card.appendChild(numberField)
    card.appendChild(dateField)

    col.appendChild(card)
    row.appendChild(col)

});







